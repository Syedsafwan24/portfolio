import { LOCATIONS } from '@/content/locations';
import { LocationPage } from '@/components/templates/LocationPage';
import { buildMetadata } from '@/lib/metadata';

const doc = LOCATIONS['bhatkal'];

export const metadata = buildMetadata({ path: doc.path, ...doc.seo });

export default function Page() {
	return <LocationPage doc={doc} />;
}
