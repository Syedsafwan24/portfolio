export function StructuredData() {
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://syedsafwan.dev';

	type Place = {
		'@type': 'Place';
		name: string;
	};

	type Organization = {
		'@type': 'Organization' | 'ProfessionalService';
		'@id': string;
		name: string;
		url: string;
		logo?: string;
		description: string;
		foundingDate?: string;
		founder: { '@id': string };
		areaServed: Place[];
		hasOfferCatalog: {
			'@type': 'OfferCatalog';
			name: string;
			itemListElement: {
				'@type': 'Offer';
				itemOffered: {
					'@type': 'Service';
					name: string;
				};
			}[];
		};
	};

	type Person = {
		'@type': 'Person';
		'@id': string;
		name: string;
		alternateName?: string;
		jobTitle: string;
		url: string;
		image?: string;
		sameAs: string[];
		knowsAbout: string[];
		worksFor: { '@id': string };
		address: {
			'@type': 'PostalAddress';
			addressLocality: string;
			addressRegion: string;
			addressCountry: string;
		};
	};

	type WebSite = {
		'@type': 'WebSite';
		'@id': string;
		name: string;
		url: string;
		publisher: { '@id': string };
	};

	type BreadcrumbList = {
		'@type': 'BreadcrumbList';
		'@id': string;
		itemListElement: {
			'@type': 'ListItem';
			position: number;
			name: string;
			item: string;
		}[];
	};

	type Graph = {
		'@context': 'https://schema.org';
		'@graph': (Person | Organization | WebSite | BreadcrumbList)[];
	};

	const areasServed = [
		'Bhatkal',
		'Manki',
		'Murdeshwar',
		'Shirali',
		'Byndoor',
		'Honnavar',
		'Kumta',
		'Gokarna',
		'Ankola',
		'Karwar',
		'Sirsi',
		'Siddapur',
		'Yellapur',
		'Dandeli',
		'Kundapura',
		'Brahmavar',
		'Udupi',
		'Manipal',
		'Karkala',
		'Kaup',
		'Malpe',
		'Mangalore',
		'Surathkal',
		'Moodbidri',
		'Bantwal',
		'Puttur',
		'Shivamogga',
		'Sagara',
	].map((name) => ({ '@type': 'Place' as const, name }));

	const services = [
		'Custom Web Development',
		'Mobile App Development',
		'ERP Systems',
		'POS and Billing Software',
		'E-Commerce Development',
		'UI/UX Design',
	].map((service) => ({
		'@type': 'Offer' as const,
		itemOffered: {
			'@type': 'Service' as const,
			name: service,
		},
	}));

	const structuredData: Graph = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				'@id': `${siteUrl}/#person`,
				name: 'Syed Safwan Pirzade',
				alternateName: 'Syed Safwan',
				jobTitle: 'Co-Founder & Full Stack Developer',
				url: siteUrl,
				sameAs: [
					'https://github.com/Syedsafwan24',
					'https://linkedin.com/in/syedsafwanpirzade',
					'https://x.com/syedsafwan', // Placeholder, user might want to change it.
					'https://procraft.ae',
				],
				knowsAbout: [
					'Next.js',
					'React',
					'React Native',
					'TypeScript',
					'ERP systems',
					'POS systems',
					'UI/UX design',
				],
				worksFor: { '@id': `${siteUrl}/#organization` },
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Bhatkal',
					addressRegion: 'Karnataka',
					addressCountry: 'IN',
				},
			},
			{
				'@type': 'ProfessionalService',
				'@id': `${siteUrl}/#organization`,
				name: 'ProCraft',
				url: 'https://procraft.ae',
				description:
					'Digital agency offering comprehensive web and software solutions.',
				founder: { '@id': `${siteUrl}/#person` },
				areaServed: areasServed,
				hasOfferCatalog: {
					'@type': 'OfferCatalog',
					name: 'Digital Services',
					itemListElement: services,
				},
			},
			{
				'@type': 'WebSite',
				'@id': `${siteUrl}/#website`,
				name: 'Syed Safwan Pirzade Portfolio',
				url: siteUrl,
				publisher: { '@id': `${siteUrl}/#person` },
			},
			{
				'@type': 'BreadcrumbList',
				'@id': `${siteUrl}/#breadcrumb`,
				itemListElement: [
					{
						'@type': 'ListItem',
						position: 1,
						name: 'Home',
						item: siteUrl,
					},
				],
			},
		],
	};

	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(structuredData),
			}}
		/>
	);
}
