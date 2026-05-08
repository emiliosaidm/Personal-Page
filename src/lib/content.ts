/** Central content — edit here (no CMS). */

/** Párrafos de la sección Sobre mí (enlaces se arman en el componente). */
export const aboutSection = {
	p1: 'A los 17 saqué la licencia de piloto privado. Antes de eso, lo que más me enganchó del código fue Python en la prepa: quería automatizar cosas aburridas de la escuela y se me fue de las manos. En mate, me tardé en entender que me gustaban de verdad; en el ITAM empecé a ver cómo se conectan con cosas medibles.',
	p2BeforeLink:
		'Hoy el día se reparte entre clases en el ITAM (desde 2023) y ',
	p2AfterLink:
		' (la startup de finanzas operativas para pymes que armamos Alan, Gerardo y yo): parches, decisiones técnicas y lo que toque en producto. Cuando afloja, natación o bajarle un poco a la lista de pendientes sin obsesionarme con cerrarla del todo.',
	p3: 'Aparte me gusta enredarme en problemas de matemáticas, leer y salir con mi novia.',
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
					src: '/images/meefi/story-dashboard-showcase.png',
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
		dates: '2023 — hoy',
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
