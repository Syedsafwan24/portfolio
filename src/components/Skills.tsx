'use client';

import { FadeIn } from './animation/FadeIn';

const skills = [
	{ category: 'LANGUAGES', items: 'JavaScript · Python · Java · C' },
	{ category: 'FRAMEWORKS', items: 'Next.js · React.js · TailwindCSS' },
	{ category: 'DESIGN', items: 'Figma · Photoshop · Illustrator · Canva' },
	{
		category: 'VIDEO EDITING',
		items: 'Adobe Premiere Pro · After Effects · CapCut',
	},
	{
		category: 'DEVOPS',
		items:
			'GitHub CI/CD · GitHub Actions · VPS Hostinger · AWS Amplify · Amazon RDS',
	},
	{ category: 'DATABASES', items: 'MySQL · PostgreSQL' },
	{
		category: 'AI TOOLS',
		items:
			'Claude AI · GitHub Copilot · Figma Make · Antigravity AI · OpenAI Codex · Cursor',
	},
];

export function Skills() {
	return (
		<section id='skills' className='section-padding border-t border-[#0A0A0A]'>
			<div className='px-[20px] md:px-[80px] max-w-[1920px] mx-auto mb-16'>
				<div className='md:w-1/4'>
					<FadeIn className='font-mono text-[11px] uppercase'>
						02 — SKILLS
					</FadeIn>
				</div>
			</div>

			<div className='flex flex-col border-t border-[#0A0A0A]'>
				{skills.map((skill, index) => (
					<FadeIn key={index} delay={index * 0.05} className='w-full'>
						<div className='w-full group hover:bg-[#0A0A0A] hover:text-[#F1F1F1] transition-colors duration-200 border-b border-[#0A0A0A]'>
							<div className='px-[20px] md:px-[80px] max-w-[1920px] mx-auto py-6 flex flex-col md:flex-row gap-4 md:gap-0'>
								<div className='md:w-1/4 font-mono text-[11px] text-[#0A0A0A]/40 group-hover:text-[#F1F1F1]/70 transition-colors duration-200'>
									{skill.category}
								</div>
								<div className='md:w-3/4 font-light text-[14px] md:text-[15px]'>
									{skill.items}
								</div>
							</div>
						</div>
					</FadeIn>
				))}
			</div>
		</section>
	);
}
