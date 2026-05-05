/** Central content — edit here (no CMS). */

export const site = {
	name: 'Emilio Said Maccise',
	age: 22,
	location: 'Ciudad de México',
	countryFlag: '🇲🇽',
	email: 'esaid@meefi.io',
	linkedin: 'https://www.linkedin.com/in/emiliosaidm/',
	github: 'https://github.com/emiliosaidm',
	meefiUrl: 'https://meefi.io',
	coordinates: { lat: '19.4326° N', lng: '99.1332° W' },
} as const;

/** Bitácora — agregar entradas en src/lib/content.ts si hace falta. */
export const flightLog = [
	{
		id: 'meefi',
		role: 'Cofundador y CTO',
		place: 'Meefi',
		dates: '2023 — hoy',
		description:
			'Somos tres: Alan Said Maccise, Jesús Reyna Núñez y yo. Construimos software para que pymes en México no pierdan el hilo con pagos, cobranza, facturación y nómina. Yo me quedo más del lado técnico.',
	},
	{
		id: 'itam',
		role: 'Licenciatura en curso',
		place: 'ITAM — Matemáticas aplicadas y ciencias de datos',
		// PENDIENTE: Emilio confirma año de ingreso → usar p.ej. "2019 — hoy" en dates
		dates: '—',
		description:
			'Voy por la carrera; todavía no soy “matemático hecho”, voy aprendiendo. Me interesa lo que se puede modelar y lo que no.',
	},
	{
		id: 'pilot',
		role: 'Piloto privado',
		place: 'Licencia a los 17',
		dates: '—',
		description:
			'Reglas, checklist, meterle cuando el panorama no es claro. No vuelo todos los fines; cuando se puede, mejor.',
	},
	{
		id: 'tech',
		role: 'Técnico',
		place: 'Ingeniería de software',
		dates: '—',
		description: 'Fue antes del ITAM: bases de código, sistemas, cómo se arma un proyecto de software.',
	},
] as const;

/** Lista agrupada — sin años ni porcentajes. */
export const skills = {
	languages: ['Python', 'Ruby', 'Java', 'C++', 'JavaScript', 'TypeScript'],
	frameworks: ['React', 'Next.js', 'Rails', 'Tailwind'],
	dataMath: ['Mathematica', 'LaTeX', 'ML', 'OpenAI API'],
	other: ['Git', 'Linux', 'Figma'],
} as const;

export type SkillGroup = keyof typeof skills;

export const projects = [
	{
		slug: 'meefi',
		title: 'Meefi',
		description:
			'Lo de siempre en una pyme: quién pagó, quién debe, la nómina, la factura. Meefi lo mete a un solo flujo, con WhatsApp cuando tiene sentido.',
		tags: ['Rails', 'React', 'PostgreSQL', 'GPT', 'Fintech'],
		href: 'https://meefi.io',
		github: null as string | null,
		image: '/images/projects/1.jpg',
	},
	{
		slug: 'expensesapp',
		title: 'expensesapp',
		description:
			'Un proyecto viejito en PHP para gastos. Lo dejé en GitHub como archivo; no es lo que haría hoy, pero ahí está.',
		tags: ['PHP'],
		href: null,
		github: 'https://github.com/emiliosaidm/expensesapp',
		image: '/images/projects/2.jpg',
	},
	{
		slug: 'placeholder-3',
		title: 'Proyecto — reemplazar',
		description: '// REEMPLAZAR: nombre, descripción y links del proyecto.',
		tags: ['Tag'],
		href: null,
		github: null,
		image: '/images/projects/3.jpg',
	},
	{
		slug: 'placeholder-4',
		title: 'Proyecto — reemplazar',
		description: '// REEMPLAZAR: nombre, descripción y links del proyecto.',
		tags: ['Tag'],
		href: null,
		github: null,
		image: '/images/projects/4.jpg',
	},
	{
		slug: 'placeholder-5',
		title: 'Proyecto — reemplazar',
		description: '// REEMPLAZAR: nombre, descripción y links del proyecto.',
		tags: ['Tag'],
		href: null,
		github: null,
		image: '/images/projects/5.jpg',
	},
	{
		slug: 'placeholder-6',
		title: 'Proyecto — reemplazar',
		description: '// REEMPLAZAR: nombre, descripción y links del proyecto.',
		tags: ['Tag'],
		href: null,
		github: null,
		image: '/images/projects/6.jpg',
	},
] as const;

export const books = [
	{
		title: 'Título — reemplazar',
		note: 'Pendiente: una frase post-it cuando tengas el libro.',
		cover: '/images/books/1.jpg',
	},
	{
		title: 'Título — reemplazar',
		note: 'Pendiente: confirmar.',
		cover: '/images/books/2.jpg',
	},
	{
		title: 'Título — reemplazar',
		note: 'Pendiente: confirmar.',
		cover: '/images/books/3.jpg',
	},
	{
		title: 'Título — reemplazar',
		note: 'Pendiente: confirmar.',
		cover: '/images/books/4.jpg',
	},
	{
		title: 'Título — reemplazar',
		note: 'Pendiente: confirmar.',
		cover: '/images/books/5.jpg',
	},
] as const;

export const personalGallery = [
	{
		src: '/images/personal/1.jpg',
		caption: 'Sobre [lugar] — editar',
	},
	{
		src: '/images/personal/2.jpg',
		caption: 'Lectura: [título corto]',
	},
	{
		src: '/images/personal/3.jpg',
		caption: 'Alberca, temprano',
	},
	{
		src: '/images/personal/4.jpg',
		caption: 'Notas en la mesa',
	},
] as const;
