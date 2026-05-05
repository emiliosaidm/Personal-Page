export const profile = {
	name: 'Emilio Said Maccise',
	tagline: 'Matemáticas aplicadas y ciencia de datos',
	location: 'Ciudad de México',
	bio: 'Construyo productos digitales con impacto. Me interesa crear valor con datos, sistemas bien diseñados y equipos claros.',
	github: 'https://github.com/emiliosaidm',
	linkedin: 'https://www.linkedin.com/in/emiliosaidm',
	avatar: 'https://avatars.githubusercontent.com/u/83373857?s=400&v=4',
	meefi: 'https://meefi.io',
} as const;

export const education = {
	lewagon:
		'Pasé por Le Wagon: bases sólidas en desarrollo web y buenas prácticas de entorno (incluido el flujo de trabajo que aún uso).',
} as const;

export const projects = [
	{
		title: 'Meefi',
		description:
			'Producto principal: operaciones, contratos y facturación con cumplimiento fiscal en México (CFDI y catálogo SAT). Monorepo con API en Rails, front en React + Vite, Postgres y Redis.',
		href: 'https://meefi.io',
		tags: ['Rails', 'React', 'PostgreSQL', 'Fintech'],
	},
	{
		title: 'Meefi Analytics',
		description:
			'Proyecto analítico complementario al core de Meefi: exploración y métricas sobre el negocio.',
		tags: ['Analytics', 'Data'],
	},
	{
		title: 'Ventrauren',
		description: 'Otra línea en la carpeta de startups: experimentación de producto y go-to-market.',
		tags: ['Startup'],
	},
	{
		title: 'Dashboard UI kit',
		description:
			'Kit tipo dashboard con shadcn/ui: componentes, layouts y patrones reutilizables para interfaces internas o SaaS.',
		tags: ['shadcn', 'React', 'UI'],
	},
] as const;
