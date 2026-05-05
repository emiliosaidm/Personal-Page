'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

type Props = {
	/** Plain text — split on spaces */
	text: string;
};

/**
 * Animated word spans — place inside <h1>, <h2>, etc.
 * Respects prefers-reduced-motion (shows text immediately).
 */
export function WordRevealWords({ text }: Props) {
	const ref = useRef<HTMLSpanElement>(null);
	const inView = useInView(ref, { once: true, margin: '-10% 0px' });
	const reduce = useReducedMotion();
	const words = text.split(' ');

	if (reduce) {
		return <span>{text}</span>;
	}

	return (
		<span ref={ref} className="inline">
			{words.map((word, i) => (
				<motion.span key={`${word}-${i}`} className="inline-block overflow-hidden">
					<motion.span
						className="inline-block pr-[0.22em]"
						initial={{ y: '110%', opacity: 0 }}
						animate={inView ? { y: 0, opacity: 1 } : {}}
						transition={{
							delay: i * 0.045,
							duration: 0.52,
							ease: [0.22, 1, 0.36, 1],
						}}
					>
						{word}
					</motion.span>
				</motion.span>
			))}
		</span>
	);
}
