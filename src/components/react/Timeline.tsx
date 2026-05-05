import { motion } from 'framer-motion';

export type TimelineItem = {
	period: string;
	title: string;
	org: string;
	detail: string;
	tags: readonly string[];
};

type Props = { entries: readonly TimelineItem[] };

export default function Timeline({ entries }: Props) {
	return (
		<ol className="relative mx-auto max-w-3xl border-l border-white/10 pl-8">
			{entries.map((e, i) => (
				<motion.li
					key={e.title + e.period}
					className="mb-12 last:mb-0"
					initial={{ opacity: 0, x: -12 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: '-20%' }}
					transition={{ delay: i * 0.05, duration: 0.45 }}
				>
					<span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 ring-4 ring-[#050508]" />
					<p className="font-mono text-xs font-medium uppercase tracking-wider text-cyan-400/80">
						{e.period}
					</p>
					<h3 className="mt-1 font-display text-xl font-semibold text-white">
						{e.title}
					</h3>
					<p className="text-sm font-medium text-fuchsia-200/80">{e.org}</p>
					<p className="mt-3 text-sm leading-relaxed text-zinc-400">{e.detail}</p>
					<ul className="mt-4 flex flex-wrap gap-2">
						{e.tags.map((t) => (
							<li
								key={t}
								className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide text-zinc-400"
							>
								{t}
							</li>
						))}
					</ul>
				</motion.li>
			))}
		</ol>
	);
}
