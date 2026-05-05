import { motion } from 'framer-motion';

type Props = {
	title: string;
	description: string;
	tags: readonly string[];
	href?: string;
	index: number;
};

const cardClass =
	'group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl transition duration-300';

const interactiveClass =
	'hover:border-teal-500/35 hover:bg-white/[0.06] hover:shadow-teal-500/5';

export default function ProjectCard({
	title,
	description,
	tags,
	href,
	index,
}: Props) {
	return (
		<motion.article
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-40px' }}
			transition={{
				delay: index * 0.06,
				duration: 0.45,
				ease: [0.22, 1, 0.36, 1],
			}}
			className="h-full"
		>
			{href ? (
				<a
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					className={`${cardClass} ${interactiveClass}`}
				>
					<CardInner title={title} description={description} tags={tags} />
				</a>
			) : (
				<div className={cardClass}>
					<CardInner title={title} description={description} tags={tags} />
				</div>
			)}
		</motion.article>
	);
}

function CardInner({
	title,
	description,
	tags,
}: {
	title: string;
	description: string;
	tags: readonly string[];
}) {
	return (
		<>
			<div className="mb-3 flex items-start justify-between gap-3">
				<h3 className="font-display text-lg font-semibold text-white transition group-hover:text-teal-200">
					{title}
				</h3>
			</div>
			<p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-400">
				{description}
			</p>
			<ul className="flex flex-wrap gap-2">
				{tags.map((t) => (
					<li
						key={t}
						className="rounded-full border border-white/10 bg-black/30 px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wide text-zinc-400"
					>
						{t}
					</li>
				))}
			</ul>
		</>
	);
}
