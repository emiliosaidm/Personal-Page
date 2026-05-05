import ProjectCard from './ProjectCard';

export type Project = {
	title: string;
	description: string;
	tags: readonly string[];
	href?: string;
};

type Props = {
	projects: readonly Project[];
};

export default function ProjectsGrid({ projects }: Props) {
	return (
		<div className="grid gap-5 sm:grid-cols-2">
			{projects.map((p, i) => (
				<ProjectCard
					key={p.title}
					title={p.title}
					description={p.description}
					tags={p.tags}
					href={p.href}
					index={i}
				/>
			))}
		</div>
	);
}
