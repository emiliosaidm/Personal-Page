import { Camera } from 'lucide-react';

type Props = {
	/** Expected path under /public, e.g. /images/hero.jpg */
	expectedPath: string;
	/** Short hint for the shoot you want */
	suggestion: string;
	className?: string;
	aspectClass?: string;
};

/**
 * Placeholder until real assets exist.
 * When files are in /public, swap for next/image (see comment block below).
 */
export function ImagePlaceholder({
	expectedPath,
	suggestion,
	className = '',
	aspectClass = 'aspect-[4/5]',
}: Props) {
	return (
		<div
			className={`relative flex flex-col items-center justify-center overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--elevated)] ${aspectClass} ${className}`}
		>
			{/* TODO: reemplazar con {expectedPath} en public — sugerencia: {suggestion} */}
			<Camera className="h-8 w-8 text-[var(--muted)]" aria-hidden />
			<p className="mt-3 max-w-[14rem] text-center font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
				{expectedPath}
			</p>
			<p className="mt-1 px-4 text-center text-xs text-[var(--muted)]">{suggestion}</p>
			{/*
        import Image from 'next/image'
        <Image
          src={expectedPath}
          alt="…"
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, 40vw"
          priority
        />
      */}
		</div>
	);
}
