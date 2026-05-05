export type TimelineEntry = {
	period: string;
	title: string;
	org: string;
	detail: string;
	tags: string[];
};

export const workTimeline: TimelineEntry[] = [
	{
		period: '2023 — present',
		title: 'Product & engineering',
		org: 'Meefi',
		detail:
			'Shipping and hardening a regulated-leaning operations stack: Rails services, React clients, Sidekiq workloads, Dockerized dev parity, and Kamal-based releases across multiple live environments.',
		tags: ['Rails', 'React', 'PostgreSQL', 'Sidekiq', 'Docker', 'Kamal'],
	},
	{
		period: 'Parallel',
		title: 'Analytics & automation',
		org: 'Meefi Analytics (local monorepo)',
		detail:
			'Laravel queues + Horizon, GCS object storage, ONNX-powered utilities, and PHP libraries in the phpcfdi ecosystem for SAT / CFDI automation.',
		tags: ['Laravel', 'Horizon', 'GCS', 'CFDI tooling'],
	},
	{
		period: '2025 — 2026',
		title: 'Applied math & data coursework',
		org: 'ITAM',
		detail:
			'Public GitHub activity around ITAM’s “Fuentes de Datos” course — reproducible notebooks, team forks, and project repos (`fdd_p26`, `Proyecto-1-FDD`).',
		tags: ['Jupyter', 'Python', 'Data sourcing'],
	},
	{
		period: '2022',
		title: 'Full-stack bootcamp',
		org: 'Le Wagon',
		detail:
			'Intensive Rails curriculum — MVC apps, authentication, CRUD products, and collaborative git workflows that still shape how I structure side projects.',
		tags: ['Ruby on Rails', 'SQL', 'Git'],
	},
];
