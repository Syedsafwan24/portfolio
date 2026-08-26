import { LOCATION_LIST } from '@/content/locations';
import { HubPage } from '@/components/templates/HubPage';
import { buildMetadata } from '@/lib/metadata';

const title = 'Areas I Work In — Coastal Karnataka | Safwan Pirzade';
const description =
	'Software and web development across Bhatkal, Honnavar, Kumta, Karwar, Udupi and Mangalore, plus remote work for Gulf clients and community organisations.';

export const metadata = buildMetadata({
	path: '/locations/',
	title,
	description,
});

export default function Page() {
	return (
		<HubPage
			path='/locations/'
			kicker='Locations'
			h1='Where I Work'
			title={title}
			description={description}
			intro={[
				'I am based in Bhatkal, Karnataka, and work with businesses and organisations along the coast — from Karwar in the north through Honnavar, Kumta and Bhatkal down to Udupi and Mangalore.',
				'Being local matters more for some projects than others. A POS rollout, an ERP migration or an election needs somebody physically present at least once; a website does not. These pages set out what I do in each area and how close I actually am.',
				'Each hub also covers the towns around it. Bhatkal takes in Manki, Murdeshwar, Shirali, Jali, Mundalli and Belke. Honnavar covers Gerusoppa and Haldipur, and Kumta covers Aversa and Mirjan. Karwar reaches inland to Ankola, Gokarna, Sirsi, Yellapur and Dandeli. Udupi covers Manipal, Kaup, Malpe, Brahmavar, Kundapura and Byndoor, and Mangalore covers Surathkal, Moodbidri, Bantwal, Puttur and Karkala.',
				'The needs differ by area more than you might expect. Retail and wholesale businesses along the Uttara Kannada coast most often want billing and stock control that stays trustworthy past the first few months. Udupi and Mangalore, being denser, bring more multi-branch operations, more staff roles needing separate permissions, and more demand for online ordering. Tourism-facing businesses around Karwar and Gokarna need booking and enquiry flows on sites that load fast for visitors on mobile data.',
				'I also work remotely for clients in Dubai, Riyadh, Jeddah and Bangalore, and with Bhatkali community organisations across the Gulf — including the platform serving over 400 Bhatkal Community Jeddah members and the computerised voting used in Bhatkal community elections.',
			]}
			listTitle='Areas'
			items={LOCATION_LIST.map((doc) => ({
				label: doc.city,
				path: doc.path,
				note: doc.seo.description,
			}))}
			ctaHeading='Somewhere else?'
			ctaBody='Most development work happens remotely regardless of distance. If you are outside these areas, it changes very little except how often we meet in person.'
		/>
	);
}
