import type { Faq } from '@/content/types';
import { Reveal } from './Reveal';

/**
 * Native <details>/<summary> styled as the site's divider row.
 *
 * Deliberately not a JS accordion: content inside a closed <details> still
 * counts as visible for rich-result eligibility, and a server-rendered answer
 * is readable by extractors that do not run JavaScript — which is the whole
 * point of publishing FAQPage data.
 */
export function FaqList({ faqs }: { faqs: readonly Faq[] }) {
	if (!faqs.length) return null;

	return (
		<div className='flex flex-col'>
			{faqs.map((faq, i) => (
				<Reveal key={i}>
					<details
						className='w-full border-t last:border-b faq-row'
						style={{ borderColor: 'var(--theme-border)' }}
					>
						<summary
							className='py-[2.2vh] flex items-start justify-between gap-[2vw] cursor-pointer list-none font-sans'
							style={{
								fontSize: 'clamp(0.9rem, 1.05vw, 1.1rem)',
								color: 'var(--theme-heading)',
								fontWeight: 500,
							}}
						>
							<h3 className='m-0 font-sans' style={{ fontWeight: 500 }}>
								{faq.q}
							</h3>
							<span
								aria-hidden='true'
								className='faq-marker shrink-0'
								style={{ color: 'var(--theme-orange)' }}
							>
								&#8599;
							</span>
						</summary>
						<p
							className='pb-[2.6vh] font-sans'
							style={{
								fontSize: 'clamp(0.85rem, 0.98vw, 1.02rem)',
								lineHeight: 1.75,
								color: 'var(--theme-body)',
								fontWeight: 300,
								maxWidth: '72ch',
							}}
						>
							{faq.a}
						</p>
					</details>
				</Reveal>
			))}
		</div>
	);
}
