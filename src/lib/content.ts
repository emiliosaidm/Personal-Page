/** Central content — edit here (no CMS). */

/** Párrafos de la sección Sobre mí (enlaces se arman en el componente). */
export const aboutSection = {
	p1: 'Lo que más me gusta es programar y las matemáticas. Desde la preparatoria descubrí un gran interés por estas áreas, y por eso decidí orientar mis estudios hacia ellas. Siempre me ha gustado la ciencia, pero en el ITAM entendí mejor cómo se conecta con aspectos medibles y aplicables. Además, obtuve mi licencia de piloto privado en el verano de 2021.',
	p2BeforeLink:
		'Hoy el día se reparte entre clases en el ITAM (desde 2023) y ',
	p2AfterLink:
		' (la startup en la que trabajo): parches, decisiones técnicas y lo que toque en producto.',
	p3: 'Mis hobbies son leer tomando café y el deporte; el que más me gusta es esquiar y nadar.',
} as const;

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
	/** Una línea para pies de sección / chips. */
	pilotShort: 'piloto privado (verano 2021)',
	/** Hero — editar solo aquí para no tocar JSX/estilos del componente. */
	tagline: 'ITAM, Meefi, código y matemáticas.',
	heroBeforeMeefi:
		'Estudio matemáticas aplicadas y ciencia de datos en el ITAM y soy uno de los tres cofundadores de ',
	heroAfterMeefi: '.',
} as const;

export const contactSection = {
	intro: 'Normalmente respondo en uno o dos días.',
} as const;

/** Sección Meefi — historia + rutas bajo /public/images/meefi/ */
export const meefiSection = {
	tagline: 'Tesorería centralizada para las pymes en México.',
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
			body: 'Esa operación la vendimos. Hoy Meefi es tesorería centralizada para las pymes en México.',
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
			body: '' as string,
			images: [
				{
					src: '/images/meefi/story-dashboard-showcase.png',
					alt: 'Dashboard de Meefi: bienvenida, balance, gráfica y movimientos.',
				},
			],
		},
	],
} as const;

/** Bitácora — nuevas entradas en este archivo. */
export const flightLog = [
	{
		id: 'meefi',
		role: 'Cofundador y CTO',
		place: 'Meefi',
		dates: '2023 — hoy',
		description:
			'Facturación por WhatsApp primero (20k+ personas, 500+ clientes); en esa etapa entramos a Platanus. Vendimos, pivotamos y hoy Meefi es tesorería centralizada para pymes en México—yo más del lado técnico con Alan y Gerardo.',
	},
	{
		id: 'itam',
		role: 'Licenciatura en curso',
		place: 'ITAM — Matemáticas aplicadas y ciencia de datos',
		dates: '2023 — hoy',
		description:
			'Voy por la carrera; todavía no soy “matemático hecho”, voy aprendiendo. Me interesa lo que se puede modelar y lo que no.',
	},
	{
		id: 'pilot',
		role: 'Piloto privado',
		place: 'Licencia privada',
		dates: 'Verano 2021',
		description:
			'Siempre me gustó volar, así que fui por la licencia. Es un hobby, pero de los que te cambian cómo ves las cosas.',
	},
	{
		id: 'tech',
		role: 'Técnico',
		place: 'Le Wagon — bootcamp de programación',
		dates: '2020',
		description:
			'Fue antes del ITAM: bases de código, sistemas y cómo se arma un proyecto de software de punta a punta.',
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

/** Sección Leyendo — títulos en `books`. */
export const readingSection = {
	intro: 'Los libros que más me gustan.',
} as const;

export const books = [
	{
		title: 'Sapiens',
		subtitle: 'De animales a dioses · Yuval Noah Harari',
		note: 'Breve historia de la humanidad; para ver el bosque, no solo los árboles.',
		cover: '/images/books/sapiens.png',
	},
	{
		title: 'Cosmos',
		subtitle: 'Carl Sagan',
		note: 'Origen, vida y consciencia; el clásico que no envejece.',
		cover: '/images/books/cosmos.png',
	},
	{
		title: 'La poesía de los números',
		subtitle: 'Daniel Tammet',
		note: 'Cómo las matemáticas iluminan la vida; calma y curiosidad.',
		cover: '/images/books/poesia-numeros.png',
	},
] as const;
