'use client';

import { FadeIn } from './animation/FadeIn';

const experiences = [
	{
		role: 'Freelance Web Developer, UI/UX Designer & DevOps',
		duration: 'October 2024 — Present',
		location: 'Gulf Region & India',
		details: [
			{
				title: 'Development',
				description:
					'Built 12 production websites across React.js and Next.js with TailwindCSS. Delivered client-provided Figma designs as pixel-perfect React applications. Implemented CMS systems, bilingual RTL support, and admin dashboards for clients across Saudi Arabia, UAE, and India.',
			},
			{
				title: 'Design',
				description:
					'Created brand identities, posters, banners, and social creatives. Led visual design for college hackathons, sports tournaments, and cultural fests. Designed the AITM college website UI from scratch in Figma.',
			},
			{
				title: 'Video Editing',
				description:
					'Produced promotional reels and content for clients using Adobe Premiere Pro, After Effects, and CapCut.',
			},
			{
				title: 'DevOps',
				description:
					'Configured GitHub CI/CD pipelines via GitHub Actions. Deployed and managed production apps on Hostinger VPS. Handled cloud deployments on AWS Amplify with Amazon RDS.',
			},
			{
				title: 'AI Workflows',
				description:
					'Daily use of Claude AI, Cursor, GitHub Copilot, OpenAI Codex, Figma Make, and Antigravity AI to accelerate design and development.',
			},
		],
	},
];

export function Experience() {
	return (
		<section id='work' className='section-padding px-[20px] md:px-[80px] max-w-[1920px] mx-auto border-t border-[#0A0A0A]'>
			<div className='flex flex-col md:flex-row gap-8 md:gap-16'>
				<div className='md:w-1/4 flex-shrink-0'>
					<FadeIn className='font-mono text-[11px] uppercase sticky top-24'>
						04 — EXPERIENCE
					</FadeIn>
				</div>

				<div className='md:w-3/4'>
					{experiences.map((exp, idx) => (
						<FadeIn key={idx} delay={idx * 0.1}>
							<div className='mb-12'>
								{/* Role Header */}
								<div className='mb-3'>
									<h3 className='font-bold text-[20px] md:text-[24px] tracking-tight leading-tight'>
										{exp.role}
									</h3>
									<div className='font-mono text-[10px] text-[#0A0A0A]/50 uppercase mt-2 space-x-2'>
										<span>{exp.duration}</span>
										<span>·</span>
										<span>{exp.location}</span>
									</div>
								</div>

								{/* Details Grid */}
								<div className='grid md:grid-cols-2 gap-x-8 gap-y-3 mt-6 border-t border-[#0A0A0A]/10 pt-6'>
									{exp.details.map((detail, detailIdx) => (
										<FadeIn
											key={detailIdx}
											delay={idx * 0.1 + detailIdx * 0.05}
										>
											<div>
												<h4 className='font-semibold text-[13px] uppercase tracking-wide mb-1'>
													{detail.title}
												</h4>
												<p className='text-[13px] text-[#0A0A0A]/70 leading-[1.6]'>
													{detail.description}
												</p>
											</div>
										</FadeIn>
									))}
								</div>
							</div>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
}
