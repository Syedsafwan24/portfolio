import { CASE_STUDIES } from '@/content/caseStudies';
import { CaseStudyPage } from '@/components/templates/CaseStudyPage';
import { buildMetadata } from '@/lib/metadata';

const doc = CASE_STUDIES['election-systems'];

export const metadata = buildMetadata({ path: doc.path, ...doc.seo });

export default function Page() {
	return <CaseStudyPage doc={doc} />;
}
