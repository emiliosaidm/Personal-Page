import { skills, type SkillGroup } from '@/lib/content';

const labels: Record<SkillGroup, string> = {
	languages: 'Lenguajes',
	frameworks: 'Frameworks y web',
	dataMath: 'Datos y mates',
	other: 'Otras',
};

export function SectionSkills() {
	return (
		<section
			id="skills"
			className="scroll-mt-20 border-b border-[var(--line)] bg-[var(--elevated)] px-4 py-24 dark:bg-[#0d0d10] md:px-6 md:py-32"
		>
			<div className="mx-auto max-w-6xl">
				<p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--cockpit)]">
					Herramientas
				</p>
				<h2 className="font-display mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
					Con qué trabajo.
				</h2>
				<p className="mt-6 max-w-xl text-[var(--muted)]">
					Lista nada más. Si algo no está, es que no lo uso lo suficiente como para presumirlo aquí.
				</p>
				<div className="mt-14 grid gap-12 md:grid-cols-2">
					{(Object.keys(skills) as SkillGroup[]).map((group) => (
						<div key={group}>
							<h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--cockpit)]">
								{labels[group]}
							</h3>
							<div className="mt-6 flex flex-wrap gap-2">
								{skills[group].map((name) => (
									<span
										key={name}
										className="rounded-full border border-[var(--line)] bg-[var(--canvas)] px-3 py-1.5 font-mono text-xs font-medium text-[var(--ink)] dark:bg-[#121214]"
									>
										{name}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
