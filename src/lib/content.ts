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
	/** Hero — editar solo aquí para no tocar JSX/estilos del componente. */
	tagline: 'ITAM, Meefi y piloto privado.',
	heroBeforeMeefi:
		'Estudio matemáticas aplicadas y ciencia de datos en el ITAM y soy uno de los tres cofundadores de ',
	heroAfterMeefi: '. Soy piloto privado.',
} as const;

/** Sección Meefi — historia + rutas bajo /public/images/meefi/ */
export const meefiSection = {
	tagline: 'Cuenta empresarial, pagos masivos y facturación para PYMEs.',
	intro:
		'Esa frase resume lo que hoy vendemos en producción. Abajo va el recorrido, con fotos del camino.',
	story: [
		{
			id: 'whatsapp',
			label: 'WhatsApp primero',
			body: 'Meefi empezó como un sistema de facturación por WhatsApp: cobrar y facturar donde ya estaban los chats. En esa ola llegamos a más de veinte mil personas y a más de quinientos clientes.',
			images: [
				{
					src: '/images/meefi/story-team-jackets.png',
					alt: 'Alan, Gerardo y Emilio con chamarras Meefi al aire libre.',
				},
			],
		},
		{
			id: 'platanus',
			label: 'Platanus',
			body: 'Todavía con el producto anclado en WhatsApp nos aceptaron en Platanus: aceleradora, comunidad y la presión buena de ordenar lo que venía. Ahí cruzamos con otros equipos y metimos criterio a lo técnico y a lo de negocio.',
			images: [
				{
					src: '/images/meefi/story-platanus-team-web.jpg',
					alt: 'Equipo Meefi frente al letrero de Platanus Ventures.',
				},
				{
					src: '/images/meefi/story-platanus-bottle.png',
					alt: 'Emilio con playera Meefi y termo con logo de Platanus.',
				},
			],
		},
		{
			id: 'pivot',
			label: 'Venta y giro',
			body: 'Esa operación la vendimos. Con el aprendizaje (y el mismo trío) pivotamos a lo que hoy es Meefi: tesorería para pymes que siguen repartiéndose entre Excel, el banco y el celular—con producto web, reglas claras y GPT donde ahorra trabajo repetitivo.',
			images: [
				{
					src: '/images/meefi/story-office.png',
					alt: 'Oficina tipo coworking, equipo reunido al fondo.',
				},
			],
		},
		{
			id: 'hoy',
			label: 'Lo de ahora',
			body: 'El producto ya vive en producción: inicio con balance y movimientos, facturas, cuentas por cobrar y conciliación. Abajo va el tablero real—lo que ven los clientes en app, no un mock de marketing.',
			images: [
				{
					src: '/images/meefi/story-dashboard-magic.png',
					alt: 'Dashboard de Meefi: bienvenida, balance, gráfica y movimientos.',
				},
			],
		},
	],
} as const;

/** Bitácora — agregar entradas en src/lib/content.ts si hace falta. */
export const flightLog = [
	{
		id: 'meefi',
		role: 'Cofundador y CTO',
		place: 'Meefi',
		dates: '2023 — hoy',
		description:
			'Facturación por WhatsApp primero (20k+ personas, 500+ clientes); en esa etapa entramos a Platanus. Vendimos, pivotamos y hoy somos tesorería para pymes con Alan y Gerardo—yo más del lado técnico.',
	},
	{
		id: 'itam',
		role: 'Licenciatura en curso',
		place: 'ITAM — Matemáticas aplicadas y ciencia de datos',
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
			'Reglas, checklist, meterle cuando el panorama no es claro. La licencia la saqué a los 17; lo demás es disciplina y no apurarse.',
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
			'De facturación por WhatsApp a cuenta empresarial, pagos masivos y facturación para pymes. Platanus en el medio; hoy producto en producción.',
		tags: ['Rails', 'React', 'PostgreSQL', 'GPT', 'Fintech'],
		href: 'https://meefi.io',
		github: null as string | null,
		image: '/images/meefi/story-dashboard.png',
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
