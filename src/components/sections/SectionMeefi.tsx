import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { meefiSection, site } from '@/lib/content';
import { publicAsset } from '@/lib/public-url';

const badges = [
	'Cofundador y CTO',
	'Desde agosto 2023',
	'CDMX',
	'Alan Said Maccise · Gerardo · yo',
] as const;

function StoryFigure({
	src,
	alt,
	aspectClass = 'aspect-[4/3]',
	sizes,
}: {
	src: string;
	alt: string;
	aspectClass?: string;
	sizes: string;
}) {
	return (
		<figure className="relative overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--canvas)] dark:bg-[#151518]">
			<div className={`relative w-full ${aspectClass}`}>
				<Image
					src={publicAsset(src)}
					alt={alt}
					fill
					className="object-cover"
					sizes={sizes}
				/>
			</div>
		</figure>
	);
}

function StoryGallery({
	images,
}: {
	images: readonly { readonly src: string; readonly alt: string }[];
}) {
	const wide = '(max-width: 1024px) 100vw, 45vw';
	if (images.length === 1) {
		return <StoryFigure src={images[0].src} alt={images[0].alt} sizes={wide} />;
	}
	if (images.length === 2) {
		return (
			<div className="grid gap-3 sm:grid-cols-2">
				<StoryFigure
					src={images[0].src}
					alt={images[0].alt}
					aspectClass="aspect-[4/5]"
					sizes="(max-width: 640px) 100vw, 22vw"
				/>
				<StoryFigure
					src={images[1].src}
					alt={images[1].alt}
					aspectClass="aspect-[4/5]"
					sizes="(max-width: 640px) 100vw, 22vw"
				/>
			</div>
		);
	}
	return (
		<div className="grid gap-3 sm:grid-cols-2">
			{images.map((img) => (
				<StoryFigure
					key={img.src}
					src={img.src}
					alt={img.alt}
					aspectClass="aspect-[4/3]"
					sizes="(max-width: 640px) 100vw, 24vw"
				/>
			))}
		</div>
	);
}

export function SectionMeefi() {
	return (
		<section
			id="meefi"
			className="scroll-mt-20 border-b border-[var(--line)] bg-[var(--elevated)] px-4 py-24 dark:bg-[#0d0d10] md:px-6 md:py-32"
		>
			<div className="mx-auto max-w-6xl">
				<header className="max-w-3xl">
					<p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--cockpit)]">
						Ahora
					</p>
					<h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
						Meefi
					</h2>
					<p className="font-display mt-4 text-xl font-medium leading-snug text-[var(--cockpit)] md:text-2xl">
						{meefiSection.tagline}
					</p>
					<p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">{meefiSection.intro}</p>
					<a
						href={site.meefiUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--instrument)] underline decoration-[var(--instrument)]/40 underline-offset-4 hover:decoration-[var(--instrument)]"
					>
						meefi.io
						<ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
					</a>
				</header>

				<div className="mt-20 space-y-20 md:mt-28 md:space-y-28">
					{meefiSection.story.map((block, i) => (
						<article
							key={block.id}
							className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14"
						>
							<div className={i % 2 === 1 ? 'lg:order-2' : ''}>
								<p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--cockpit)]">
									{block.label}
								</p>
								<p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">{block.body}</p>
							</div>
							<div className={i % 2 === 1 ? 'lg:order-1' : ''}>
								<StoryGallery images={block.images} />
							</div>
						</article>
					))}
				</div>

				<ul className="mt-20 flex flex-wrap gap-2 border-t border-[var(--line)] pt-14">
					{badges.map((b) => (
						<li
							key={b}
							className="rounded border border-[var(--line)] bg-[var(--canvas)] px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-wider text-[var(--ink)] dark:bg-[#151518]"
						>
							{b}
						</li>
					))}
				</ul>
				<a
					href={site.meefiUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="group mt-8 inline-flex items-center gap-2 border-b-2 border-[var(--instrument)] pb-1 font-mono text-sm font-semibold uppercase tracking-widest text-[var(--ink)] transition hover:gap-3"
				>
					meefi.io
					<ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
				</a>
			</div>
		</section>
	);
}
