/** Curated from GitHub API + public bios — edit freely. */
export const profile = {
	name: 'Emilio Said Maccise',
	shortTitle: 'Applied mathematics · Data science · Product engineering',
	location: 'Mexico City, Mexico',
	email: null as string | null,
	links: {
		github: 'https://github.com/emiliosaidm',
		linkedin: 'https://www.linkedin.com/in/emiliosaidm',
		meefi: 'https://meefi.io',
	},
	avatar: 'https://avatars.githubusercontent.com/u/83373857?s=400&v=4',
	taglines: [
		'Building serious software where money, data, and regulation meet.',
		'Applied math student who ships full-stack systems, not just notebooks.',
	],
	/** Long-form voice for About + Work pages */
	narrative: [
		"I work where quantitative thinking meets production code: APIs, data pipelines, and UIs that real businesses run on. I'm pursuing applied mathematics and data science at ITAM while building at Meefi — a Mexican fintech-style operations platform where billing, contracts, and tax compliance (CFDI / SAT catalogs) have to be correct every time.",
		"My GitHub history mirrors that path: Le Wagon Rails projects, course work in data sources (Fuentes de Datos) with heavy Jupyter pipelines, and smaller experiments in normalization and public health data. On the side I maintain a `~/startups` workspace where Meefi, analytics services, UI kits, and payment-adjacent experiments live side by side.",
		"I'm motivated by leverage: small teams, clear architecture, automated tests, and infrastructure (Docker, queues, observability) that keep complexity from sneaking in.",
	],
	focusAreas: [
		{
			title: 'Product & platform',
			body: 'End-to-end features across Rails APIs, React + Vite SPAs, admin tooling, and deployment pipelines (Kamal, multi-environment staging).',
		},
		{
			title: 'Data & compliance',
			body: 'CFDI-aware flows, catalog-driven billing, analytics backends (Laravel, Horizon, GCS), and coursework-scale data pipelines (Python / Jupyter).',
		},
		{
			title: 'Craft in the UI',
			body: 'Design systems and dashboards — including a local Next.js 15 + shadcn/ui kit for fast internal interfaces.',
		},
	],
	education: [
		{
			institution: 'ITAM — Applied Mathematics',
			role: 'Undergraduate (in progress)',
			detail:
				'Coursework spans rigorous math and data-heavy electives. Recent public activity includes the “Fuentes de Datos” (Spring 2026) course on GitHub — notebooks, forks, and team project repos.',
		},
		{
			institution: 'Le Wagon',
			role: 'Web development bootcamp',
			detail:
				'Foundational full-stack training (Ruby on Rails, MVC, git workflow). The `dotfiles` repo still references the Le Wagon student setup — habits from that program stuck.',
		},
	],
	githubBio:
		'Student of Applied Math and Data Science — continuously looking to create value for society.',
	githubMeta: {
		handle: 'emiliosaidm',
		publicRepos: 20,
		sinceYear: 2021,
	},
} as const;
