import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import { HeadingIndicator } from '@/components/HeadingIndicator';
import { SmoothScroll } from '@/components/providers/SmoothScroll';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { SiteNav } from '@/components/SiteNav';
import './globals.css';

const fraunces = Fraunces({
	subsets: ['latin'],
	variable: '--font-fraunces',
	display: 'swap',
});

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

const jetbrains = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-jetbrains',
	display: 'swap',
});

const assetPrefix = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').trim().replace(/\/$/, '');

/** Solo acepta http(s); si `NEXT_PUBLIC_SITE_URL` está mal, evita 500 en metadata. */
function tryParseAbsoluteUrl(raw: string): URL | null {
	const s = raw.trim();
	if (!s) return null;
	const withProto = /^https?:\/\//i.test(s) ? s : `https://${s}`;
	try {
		const u = new URL(withProto);
		if (u.protocol !== 'http:' && u.protocol !== 'https:') return null;
		return u;
	} catch {
		return null;
	}
}

function resolveSiteUrl(): URL {
	const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
	if (fromEnv) {
		const parsed = tryParseAbsoluteUrl(fromEnv);
		if (parsed) return parsed;
	}
	if (assetPrefix) {
		const parsed = tryParseAbsoluteUrl(`https://emiliosaidm.github.io${assetPrefix}`);
		if (parsed) return parsed;
	}
	return new URL('http://localhost:3005');
}

const siteUrl = resolveSiteUrl();
const baseUrl = siteUrl.href.replace(/\/$/, '');

/** Base estable para metadata (OG, etc.); siempre con `/` final. */
let metadataBase: URL;
try {
	metadataBase = new URL(`${baseUrl}/`);
} catch {
	metadataBase = new URL('http://localhost:3005/');
}

export const metadata: Metadata = {
	metadataBase,
	title: {
		default: 'Emilio Said Maccise — matemáticas, código, Meefi',
		template: '%s — Emilio Said Maccise',
	},
	description:
		'Estudiante de matemáticas aplicadas y ciencia de datos (ITAM), cofundador de Meefi, piloto privado. Ciudad de México.',
	openGraph: {
		title: 'Emilio Said Maccise',
		description: 'Matemáticas, código, Meefi — Ciudad de México.',
		url: baseUrl,
		siteName: 'Emilio Said Maccise',
		locale: 'es_MX',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Emilio Said Maccise',
		description: 'Matemáticas, código, Meefi — Ciudad de México.',
	},
	icons: {
		icon: assetPrefix ? `${assetPrefix}/favicon.svg` : '/favicon.svg',
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#fafaf7' },
		{ media: '(prefers-color-scheme: dark)', color: '#0a0a0b' },
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="es-MX"
			className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}
			suppressHydrationWarning
		>
			<body className="font-sans antialiased">
				<ThemeProvider>
					<SmoothScroll>
						<div className="grain" />
						<SiteNav />
						{children}
						<HeadingIndicator />
					</SmoothScroll>
				</ThemeProvider>
			</body>
		</html>
	);
}
