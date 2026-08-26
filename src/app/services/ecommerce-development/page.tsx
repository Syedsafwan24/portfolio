import { SERVICES } from '@/content/services';
import { ServicePage } from '@/components/templates/ServicePage';
import { buildMetadata } from '@/lib/metadata';

const doc = SERVICES['ecommerce-development'];

export const metadata = buildMetadata({ path: doc.path, ...doc.seo });

export default function Page() {
	return <ServicePage doc={doc} />;
}
