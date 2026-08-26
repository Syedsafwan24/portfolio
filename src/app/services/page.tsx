import { SERVICE_LIST } from '@/content/services';
import { HubPage } from '@/components/templates/HubPage';
import { buildMetadata } from '@/lib/metadata';

const title = 'Software & Web Development Services | Syed Safwan';
const description =
	'Custom software, ERP, POS billing, e-commerce, mobile apps and online election systems, built in Bhatkal for businesses and community organisations alike.';

export const metadata = buildMetadata({ path: '/services/', title, description });

export default function Page() {
	return (
		<HubPage
			path='/services/'
			kicker='Services'
			h1='What I Build'
			title={title}
			description={description}
			intro={[
				'I build custom software from Bhatkal, Karnataka — ERP systems, POS and billing software, websites and web applications, online stores, mobile apps, and computerised election systems for community organisations.',
				'These are six distinct kinds of project rather than a menu of packages, and they overlap. A shop wanting billing usually ends up wanting stock and accounts in the same system; a community organisation wanting a website often needs member management behind it.',
				'If what you need is not here, or if an existing product would serve you better than a custom build, I will say so rather than quote you for work you do not need.',
				'Most projects start the same way: a conversation about what is actually going wrong today. A shop counting stock by hand because the billing software drifted. A committee running an election on paper and waiting days for a count. A manufacturer invisible to anyone searching for what they make. The technology follows from that, not the other way round.',
			]}
			listTitle='Services'
			items={SERVICE_LIST.map((doc) => ({
				label: doc.name,
				path: doc.path,
				note: doc.seo.description,
			}))}
			ctaHeading='Not sure which of these you need?'
			ctaBody='Describe the problem rather than the solution and I will tell you which of these actually applies — or whether none of them do.'
		/>
	);
}
