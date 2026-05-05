/** Sourced from local `~/startups` trees + README/composer inspection. */
export type StartupProject = {
	slug: string;
	name: string;
	role: string;
	summary: string;
	highlights: string[];
	stack: string[];
	link?: string;
	localPath: string;
};

export const startupProjects: StartupProject[] = [
	{
		slug: 'meefi',
		name: 'Meefi',
		role: 'Core product — active build',
		summary:
			'Operations and finance platform for Mexican businesses: contracts, settlements, payouts, and invoicing with CFDI / SAT catalog discipline baked into the domain model.',
		highlights: [
			'Monorepo: Ruby on Rails API (Ruby 3.3.x), PostgreSQL, Redis, Sidekiq; React + Vite frontends for app and admin.',
			'Docker-first developer experience with Compose, HTTPS dev hosts, Playwright E2E on admin, RSpec request specs on the API.',
			'Production-style deploys with Kamal; documented staging/production/ASP/STP environments and SSH + Rails console workflows.',
			'Rich admin surface: billing products, SAT product catalog pickers, reconciliation flows — the “SAT” here is Mexico’s tax authority integration, not satellites.',
		],
		stack: [
			'Rails',
			'React',
			'Vite',
			'PostgreSQL',
			'Redis',
			'Sidekiq',
			'Docker',
			'Kamal',
		],
		link: 'https://meefi.io',
		localPath: '~/startups/Meefi',
	},
	{
		slug: 'meefi-analytics',
		name: 'Meefi Analytics',
		role: 'Analytics / automation companion',
		summary:
			'Laravel 11 service that sits next to Meefi’s data plane: queues, cloud storage, and deep integration with Mexican electronic invoicing tooling.',
		highlights: [
			'Composer graph includes `phpcfdi/cfdi-sat-scraper`, captcha resolver packages, ONNX runtime, Google Cloud Storage, Laravel Horizon, and Sanctum — oriented toward resilient ingestion and async jobs.',
			'Vite + Tailwind front-of-house for internal or partner-facing analytics views.',
			'Designed to evolve with Meefi’s operational reporting needs rather than one-off scripts.',
		],
		stack: [
			'Laravel 11',
			'PHP 8.2',
			'Horizon',
			'GCS',
			'ONNX',
			'CFDI / SAT tooling',
			'Vite',
			'Tailwind',
		],
		localPath: '~/startups/meefi-analytics',
	},
	{
		slug: 'ventrauren',
		name: 'Ventrauren',
		role: 'R&D sandbox',
		summary:
			'Early-stage workspace touching payment rails and certificate-oriented Java workflows (STP demo signing code, SAT credential layout in tree). Treat as experimental — not a public product yet.',
		highlights: [
			'Explores how signing and tax-adjacent artifacts could fit into broader Meefi-style automation.',
			'Useful scratchpad for validating third-party APIs before promoting patterns into production repos.',
		],
		stack: ['Java', 'Experimental APIs'],
		localPath: '~/startups/Ventrauren',
	},
	{
		slug: 'shadcn-dashboard-kit',
		name: 'shadcn UI kit (dashboard)',
		role: 'UI laboratory',
		summary:
			'Local fork of Bundui’s shadcn dashboard kit — Next.js 15, React 19, and the shadcn component system for polished internal tools.',
		highlights: [
			'Keeps me honest on modern App Router patterns, server components boundaries, and install quirks (`--legacy-peer-deps` with React 19).',
			'Reusable layout + chart patterns for admin consoles that pair with Rails or Laravel backends.',
		],
		stack: ['Next.js 15', 'React 19', 'shadcn/ui', 'TypeScript'],
		localPath: '~/startups/shadcn-ui-kit-dashboard',
	},
];
