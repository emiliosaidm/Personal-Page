import { motion } from 'framer-motion';

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.09, delayChildren: 0.06 },
	},
};

const item = {
	hidden: { opacity: 0, y: 28 },
	show: {
		opacity: 1,
		y: 0,
		transition: { type: 'spring', stiffness: 120, damping: 22 },
	},
};

type Props = {
	name: string;
	tagline: string;
	location: string;
	avatar: string;
	github: string;
	linkedin: string;
	meefi: string;
};

export default function HeroSection({
	name,
	tagline,
	location,
	avatar,
	github,
	linkedin,
	meefi,
}: Props) {
	return (
		<motion.section
			className="relative mx-auto max-w-5xl px-6 pb-16 pt-16 md:pb-24 md:pt-24"
			initial="hidden"
			animate="show"
			variants={container}
		>
			<div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:gap-14">
				<motion.div variants={item} className="relative shrink-0">
					<div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-teal-400/40 via-violet-500/30 to-transparent blur-md" />
					<img
						src={avatar}
						alt=""
						width={160}
						height={160}
						className="relative h-36 w-36 rounded-2xl border border-white/10 object-cover shadow-2xl shadow-teal-900/20 md:h-40 md:w-40"
						loading="eager"
						decoding="async"
					/>
				</motion.div>

				<div className="min-w-0 flex-1 space-y-5">
					<motion.p
						variants={item}
						className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal-400/90"
					>
						{location}
					</motion.p>
					<motion.h1
						variants={item}
						className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
					>
						{name}
					</motion.h1>
					<motion.p
						variants={item}
						className="max-w-xl text-lg text-zinc-400 md:text-xl"
					>
						{tagline}
						<span className="text-zinc-500">
							{' '}
							— enfocado en producto y datos con impacto real.
						</span>
					</motion.p>
					<motion.div
						variants={item}
						className="flex flex-wrap gap-3 pt-2"
					>
						<a
							href={meefi}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center rounded-full bg-teal-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-teal-500/20 transition hover:bg-teal-300"
						>
							Meefi
						</a>
						<a
							href={github}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:border-white/25 hover:bg-white/10"
						>
							GitHub
						</a>
						<a
							href={linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:border-white/25 hover:bg-white/10"
						>
							LinkedIn
						</a>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}
