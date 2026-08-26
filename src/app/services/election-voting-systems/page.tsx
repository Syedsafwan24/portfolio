import { SERVICES } from '@/content/services';
import { ServicePage } from '@/components/templates/ServicePage';
import { buildMetadata } from '@/lib/metadata';

const doc = SERVICES['election-voting-systems'];

export const metadata = buildMetadata({ path: doc.path, ...doc.seo });

export default function Page() {
	return <ServicePage doc={doc} />;
}
