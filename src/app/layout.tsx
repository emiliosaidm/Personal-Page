import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import { CustomCursor } from '@/components/CustomCursor';
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

const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const baseUrl =
	process.env.NEXT_PUBLIC_SITE_URL ??
	(assetPrefix ? `https://emiliosaidm.github.io${assetPrefix}` : 'http://localhost:3000');

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: 'Emilio Said Maccise — matemáticas, código, Meefi',
		template: '%s — Emilio Said Maccise',
	},
	description:
		'Estudiante de matemáticas aplicadas (ITAM), cofundador de Meefi, piloto privado. Maestría en AI y datos en UT Austin, en curso.',
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
		icon: `${assetPrefix || ''}/favicon.svg`,
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
						<CustomCursor />
					</SmoothScroll>
				</ThemeProvider>
			</body>
		</html>
	);
}
