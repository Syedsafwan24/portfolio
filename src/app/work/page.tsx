import { CASE_STUDY_LIST } from '@/content/caseStudies';
import { HubPage } from '@/components/templates/HubPage';
import { buildMetadata } from '@/lib/metadata';

const title = 'Case Studies & Selected Work | Syed Safwan Pirzade';
const description =
	'Production systems built by Syed Safwan Pirzade — community election software, a multi-tenant ERP, bilingual community platforms and multilingual sites.';

export const metadata = buildMetadata({ path: '/work/', title, description });

export default function Page() {
	return (
		<HubPage
			path='/work/'
			kicker='Work'
			h1='Things I Have Built'
			title={title}
			description={description}
			intro={[
				'These are systems in production use rather than portfolio pieces — an ERP a team of thirty relies on daily, a platform serving over four hundred community members, and the computerised voting used to conduct two Bhatkal community elections.',
				'Each write-up includes what the actual problem was, the approach taken, and what happened afterwards. Where independent coverage exists, it is linked so the claims can be checked rather than merely read.',
				'The election systems are the work I am most often asked about locally. I co-developed the voting applications used for the 2024 Anjuman Hami-e-Muslimeen election and the 2026 Majlis-e-Islah wa Tanzeem election in Bhatkal, both as part of student teams from Anjuman Engineering College, and SahilOnline credited the developers by name in its reporting on each.',
				'The commercial work runs in a different direction. ProCraft ERP is a multi-tenant system covering inventory, point of sale, purchasing and double-entry accounting with UAE VAT, built around a real general ledger rather than a sales log reconciled monthly. Smart Arrow took a Saudi garments manufacturer established in 1993 from no web presence to a live bilingual site in seven days.',
				'A recurring thread is bilingual and right-to-left interfaces. The BCJ community platform runs fully in English and Urdu with a genuine right-to-left layout rather than translated text in a left-to-right design — alignment, navigation, forms and typography all change with the language.',
			]}
			listTitle='Case studies'
			items={CASE_STUDY_LIST.map((doc) => ({
				label: doc.name,
				path: doc.path,
				note: doc.summary,
			}))}
			ctaHeading='Want to talk about your project?'
			ctaBody='Tell me what you are trying to build and what has already been tried. That is a far more useful starting point than a feature list.'
		/>
	);
}
