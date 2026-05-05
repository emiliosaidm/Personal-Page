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

/** Sin URL válida, `new URL('')` rompe todo el layout con 500. */
function resolveCanonicalOrigin(): string {
	const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
	if (raw) return raw.replace(/\/$/, '');
	if (assetPrefix) return `https://emiliosaidm.github.io${assetPrefix}`;
	return 'http://localhost:3005';
}

const baseUrl = resolveCanonicalOrigin();

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
		'Estudiante de matemáticas aplicadas (ITAM), cofundador de Meefi, piloto privado. Ciudad de México.',
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
