import type { LocationDoc, LocationSlug } from './types';
import { AREAS_BY_HUB } from './areas';

/**
 * Location hub pages.
 *
 * Deliberately six hubs, not twenty. Smaller towns are covered inside the
 * nearest hub's `nearbyAreas` and named in its visible copy — a page per town
 * would be near-duplicate content, which reads as a doorway pattern and gets
 * discounted. Every place claimed in schema is named in prose on its hub.
 */
export const LOCATIONS: Record<LocationSlug, LocationDoc> = {
	bhatkal: {
		slug: 'bhatkal',
		path: '/locations/bhatkal/',
		updated: '2026-08-26',
		city: 'Bhatkal',
		tagline: 'Home base — Uttara Kannada',
		region: 'Karnataka',
		country: 'IN',
		geo: { latitude: 13.9855, longitude: 74.555 },
		nearbyAreas: [...AREAS_BY_HUB.bhatkal],
		h1: 'Software & Web Development in Bhatkal, Karnataka',
		seo: {
			title: 'Software Developer in Bhatkal, Karnataka | Syed Safwan',
			description:
				'Custom software, websites, ERP, POS billing and mobile apps built in Bhatkal by Syed Safwan Pirzade, a full stack developer based in the town itself today.',
			keywords: [
				'software developer in Bhatkal',
				'web developer Bhatkal',
				'website developer in Bhatkal',
				'software company in Bhatkal',
				'app developer Bhatkal',
				'IT company Bhatkal',
			],
			ogEyebrow: 'Location',
			ogTitle: 'Bhatkal, Karnataka',
		},
		intro: [
			'I am Syed Safwan Pirzade, a full stack software developer based in Bhatkal, Karnataka. I build custom software, websites, ERP and POS systems, e-commerce stores, mobile apps and online election systems for businesses and community organisations here and across the coast.',
			'Bhatkal is where I live and work, not a service area on a map. I studied at Anjuman Engineering College here, and the work I am best known for locally is the computerised voting used to conduct the 2024 Anjuman Hami-e-Muslimeen and 2026 Majlis-e-Islah wa Tanzeem elections.',
			'That means I can sit across a table with you rather than only on a call, which matters more than it should for projects like a POS rollout or an election, where somebody needs to be physically present while it happens.',
			'Alongside Bhatkal town, I work with businesses in Manki, Murdeshwar, Shirali, Jali, Mundalli and Belke, and with Bhatkali community organisations in Dubai, Jeddah and Dammam.',
		],
		localProof: [
			{
				title: 'Elections for Bhatkal institutions',
				body: 'Co-developed the computerised voting applications used to conduct the 2024 Anjuman Hami-e-Muslimeen election and the 2026 Majlis-e-Islah wa Tanzeem election, both reported by SahilOnline.',
			},
			{
				title: 'Built for the Bhatkali diaspora',
				body: 'The BCJ community platform serving more than 400 Bhatkal Community Jeddah members in English and Urdu, and the BCJ educational awards nomination portal.',
			},
			{
				title: 'Production ERP and POS',
				body: 'ProCraft ERP — inventory, POS, purchasing and double-entry accounting — in daily use by a team of more than thirty across Dubai and India.',
			},
			{
				title: 'Studied and based here',
				body: 'Anjuman Institute of Technology and Management, Bhatkal, where I also served as Head of the Design Community.',
			},
		],
		servicesOffered: [
			'election-voting-systems',
			'erp-software',
			'pos-billing-software',
			'web-development',
			'ecommerce-development',
			'mobile-app-development',
		],
		relatedLocations: ['honnavar', 'kumta', 'udupi'],
		relatedCaseStudies: ['election-systems', 'bcj-cms', 'procraft-erp'],
		faqs: [
			{
				q: 'Who is the best software developer in Bhatkal?',
				a: 'I would point you at the evidence rather than the adjective. I am Syed Safwan Pirzade, based in Bhatkal, and my work here includes the computerised voting used in the Anjuman and Tanzeem elections, a production ERP used daily by thirty-plus people, and a community platform serving 400+ members.',
			},
			{
				q: 'Is there a software company in Bhatkal, Karnataka?',
				a: 'Yes. I work from Bhatkal as co-founder of ProCraft, building custom software, websites, ERP and POS systems, e-commerce stores and mobile apps. Clients range from local shops and community institutions to businesses in Dubai, Riyadh and Jeddah.',
			},
			{
				q: 'Can we meet in person?',
				a: 'Yes, I live in Bhatkal. For projects like a POS rollout, an ERP migration or an election, being physically present matters, and I would rather do the first conversation across a table than on a call. For ongoing work, most collaboration happens remotely.',
			},
			{
				q: 'Do you work with businesses in Murdeshwar, Shirali and Manki?',
				a: 'Yes. Bhatkal taluk is my immediate area, covering Manki, Murdeshwar, Shirali, Jali, Mundalli and Belke. I also work along the coast in Honnavar, Kumta, Karwar, Udupi and Mangalore, and remotely for clients in the Gulf.',
			},
			{
				q: 'What does a software project cost in Bhatkal?',
				a: 'It varies far too widely for a single number to be honest. A focused marketing site is a modest fixed project; an ERP or a multi-role portal runs several times that. The main drivers are the number of user roles, whether content is bilingual, and integration with existing systems.',
			},
			{
				q: 'Do you build software for Bhatkali organisations abroad?',
				a: 'Regularly. Much of my community work has been for the Bhatkali diaspora in the Gulf, including Bhatkal Community Jeddah’s member platform and awards portal. Remote members voting in an election from Dubai, Jeddah or Dammam is a requirement I have designed for.',
			},
		],
	},

	honnavar: {
		slug: 'honnavar',
		path: '/locations/honnavar/',
		updated: '2026-08-26',
		city: 'Honnavar',
		tagline: 'Uttara Kannada coast',
		region: 'Karnataka',
		country: 'IN',
		geo: { latitude: 14.2795, longitude: 74.4453 },
		nearbyAreas: [...AREAS_BY_HUB.honnavar],
		h1: 'Software & Website Development for Businesses in Honnavar',
		seo: {
			title: 'Web & Software Developer in Honnavar, Karnataka | Safwan',
			description:
				'Websites, billing software, ERP and mobile apps for businesses in Honnavar, Gerusoppa and Haldipur, built from Bhatkal, just under an hour down the coast.',
			keywords: [
				'web developer Honnavar',
				'software developer Honnavar',
				'website design Honnavar',
				'billing software Honnavar',
			],
			ogEyebrow: 'Location',
			ogTitle: 'Honnavar',
		},
		intro: [
			'I build websites, billing software, ERP systems and mobile apps for businesses in Honnavar, working from Bhatkal — under an hour down the coast, which makes an on-site visit straightforward rather than an expedition.',
			'Most work here is for retail shops, traders and family businesses wanting billing that keeps stock correct, or a website that can actually be found when somebody searches for what they sell.',
			'The surrounding area I cover from here includes Gerusoppa and Haldipur.',
		],
		localProof: [
			{
				title: 'An hour away',
				body: 'Close enough that a POS installation, staff training or an election dry run can happen in person rather than over a video call.',
			},
			{
				title: 'Coastal Karnataka focus',
				body: 'Work across Bhatkal, Honnavar, Kumta, Karwar, Udupi and Mangalore, with an understanding of how businesses along this coast actually operate.',
			},
		],
		servicesOffered: [
			'web-development',
			'pos-billing-software',
			'erp-software',
			'ecommerce-development',
			'election-voting-systems',
			'mobile-app-development',
		],
		relatedLocations: ['bhatkal', 'kumta', 'karwar'],
		relatedCaseStudies: ['procraft-erp', 'smart-arrow'],
		faqs: [
			{
				q: 'Who builds websites in Honnavar?',
				a: 'I do, working from Bhatkal, under an hour down the coast. I build marketing websites, billing and POS software, ERP systems and mobile apps for businesses in Honnavar, Gerusoppa and Haldipur, and can visit on site when a project needs it.',
			},
			{
				q: 'Do you visit Honnavar in person?',
				a: 'Yes. The distance from Bhatkal is short enough that on-site work — a POS installation, staff training, or a dry run before an election — is practical rather than an exception. Ongoing development happens remotely.',
			},
		],
	},

	kumta: {
		slug: 'kumta',
		path: '/locations/kumta/',
		updated: '2026-08-26',
		city: 'Kumta',
		tagline: 'Uttara Kannada coast',
		region: 'Karnataka',
		country: 'IN',
		geo: { latitude: 14.4257, longitude: 74.4187 },
		nearbyAreas: [...AREAS_BY_HUB.kumta],
		h1: 'Website & Billing Software Development for Kumta Businesses',
		seo: {
			title: 'Web & Software Developer in Kumta, Karnataka | Safwan',
			description:
				'Websites, POS billing software, ERP and e-commerce for businesses in Kumta, Aversa and Mirjan, built from Bhatkal on the same Uttara Kannada coastline.',
			keywords: [
				'website designer Kumta',
				'software developer Kumta',
				'billing software Kumta',
				'web development Uttara Kannada',
			],
			ogEyebrow: 'Location',
			ogTitle: 'Kumta',
		},
		intro: [
			'I build websites, POS and billing software, ERP systems and online stores for businesses in Kumta, working from Bhatkal on the same stretch of the Uttara Kannada coast.',
			'The most common request here is billing software that keeps stock correct — a till that still shows the right number six months later, rather than one that drifts until staff go back to counting by hand.',
			'The surrounding area covered from this hub includes Aversa and Mirjan.',
		],
		localProof: [
			{
				title: 'Same coast, same trade patterns',
				body: 'Retail, wholesale and family businesses along this coast share a set of problems — multi-location stock, credit customers, seasonal demand — that generic software handles badly.',
			},
			{
				title: 'On-site when it matters',
				body: 'Close enough to Bhatkal for counter installation and staff training to happen in person.',
			},
		],
		servicesOffered: [
			'pos-billing-software',
			'web-development',
			'erp-software',
			'ecommerce-development',
			'mobile-app-development',
			'election-voting-systems',
		],
		relatedLocations: ['bhatkal', 'honnavar', 'karwar'],
		relatedCaseStudies: ['procraft-erp'],
		faqs: [
			{
				q: 'Who makes billing software for shops in Kumta?',
				a: 'I build custom POS and billing software from Bhatkal for shops, restaurants and wholesalers in Kumta, Aversa and Mirjan. The billing runs against live inventory and a real ledger, so the stock figure stays trustworthy rather than drifting within weeks.',
			},
		],
	},

	karwar: {
		slug: 'karwar',
		path: '/locations/karwar/',
		updated: '2026-08-26',
		city: 'Karwar',
		tagline: 'North Uttara Kannada',
		region: 'Karnataka',
		country: 'IN',
		geo: { latitude: 14.8136, longitude: 74.1297 },
		nearbyAreas: [...AREAS_BY_HUB.karwar],
		h1: 'Software & Web Development for Businesses in Karwar',
		seo: {
			title: 'Software & Web Developer in Karwar, Karnataka | Safwan',
			description:
				'Websites, ERP, POS billing and mobile apps for businesses in Karwar, Ankola, Gokarna, Sirsi, Yellapur and Dandeli, built from Bhatkal down on the coast.',
			keywords: [
				'app developer Karwar',
				'web developer Karwar',
				'software company Karwar',
				'website design Sirsi',
			],
			ogEyebrow: 'Location',
			ogTitle: 'Karwar',
		},
		intro: [
			'I build websites, ERP and POS systems, e-commerce stores and mobile apps for businesses across the northern part of Uttara Kannada — Karwar and the district around it — working from Bhatkal further down the coast.',
			'Tourism-facing businesses around Karwar and Gokarna tend to need booking and enquiry flows and a site that loads fast for visitors on mobile data. Traders inland at Sirsi, Yellapur and Dandeli more often need billing and stock control that holds up across locations.',
			'This hub covers Karwar, Ankola, Gokarna, Sirsi, Yellapur and Dandeli.',
		],
		localProof: [
			{
				title: 'Built for mobile connections',
				body: 'Sites built to load quickly on the connections visitors and customers actually have, rather than only on a desktop line.',
			},
			{
				title: 'Multi-location stock',
				body: 'Where a business runs several branches across the district, stock and billing are handled as one system rather than reconciled between separate ones.',
			},
		],
		servicesOffered: [
			'web-development',
			'ecommerce-development',
			'pos-billing-software',
			'erp-software',
			'mobile-app-development',
			'election-voting-systems',
		],
		relatedLocations: ['kumta', 'honnavar', 'bhatkal'],
		relatedCaseStudies: ['smart-arrow', 'procraft-erp'],
		faqs: [
			{
				q: 'Do you work with businesses in Karwar and Sirsi?',
				a: 'Yes. I work across the northern part of Uttara Kannada — Karwar, Ankola, Gokarna, Sirsi, Yellapur and Dandeli — from Bhatkal. Most collaboration is remote, with on-site visits where a project genuinely needs somebody present.',
			},
		],
	},

	udupi: {
		slug: 'udupi',
		path: '/locations/udupi/',
		updated: '2026-08-26',
		city: 'Udupi',
		tagline: 'Udupi district',
		region: 'Karnataka',
		country: 'IN',
		geo: { latitude: 13.3409, longitude: 74.7421 },
		nearbyAreas: [...AREAS_BY_HUB.udupi],
		h1: 'ERP, POS and Website Development for Udupi District Businesses',
		seo: {
			title: 'Software Developer in Udupi & Manipal | Safwan Pirzade',
			description:
				'Custom ERP, POS billing, e-commerce and web development for businesses right across Udupi, Manipal, Kundapura, Malpe, Kaup, Brahmavar and Byndoor town.',
			keywords: [
				'software company Udupi',
				'ERP software Udupi',
				'web developer Manipal',
				'billing software Kundapura',
			],
			ogEyebrow: 'Location',
			ogTitle: 'Udupi District',
		},
		intro: [
			'I build ERP systems, POS and billing software, online stores and web applications for businesses across Udupi district, working from Bhatkal just up the coast.',
			'Udupi and Manipal have a denser mix of retail, hospitality and education-adjacent businesses than the coast further north, which usually means multi-location stock, more staff roles needing different permissions, and more demand for online ordering.',
			'This hub covers Udupi, Manipal, Kaup, Malpe, Brahmavar, Kundapura and Byndoor.',
		],
		localProof: [
			{
				title: 'Multi-branch operations',
				body: 'ProCraft ERP handles multi-location stock, inter-branch transfers and per-branch permissions, which is the common requirement for businesses operating across the district.',
			},
			{
				title: 'Hospitality and retail POS',
				body: 'Restaurant operations — tables, kitchen tickets, modifiers and split bills — alongside barcode retail billing, with both running against the same live inventory.',
			},
		],
		servicesOffered: [
			'erp-software',
			'pos-billing-software',
			'ecommerce-development',
			'web-development',
			'mobile-app-development',
			'election-voting-systems',
		],
		relatedLocations: ['mangalore', 'bhatkal', 'kumta'],
		relatedCaseStudies: ['procraft-erp'],
		faqs: [
			{
				q: 'Who builds ERP software for businesses in Udupi?',
				a: 'I build custom ERP covering inventory, purchasing, billing and double-entry accounting from Bhatkal, for businesses across Udupi, Manipal, Kundapura and the surrounding district. ProCraft ERP, which I built, is in daily production use by more than thirty people.',
			},
			{
				q: 'Can one system handle several branches across the district?',
				a: 'Yes. Multi-location stock, transfers between branches and per-branch reporting are core rather than added on, with permissions scoped so each branch sees its own operations while head office sees everything consolidated.',
			},
		],
	},

	mangalore: {
		slug: 'mangalore',
		path: '/locations/mangalore/',
		updated: '2026-08-26',
		city: 'Mangalore',
		tagline: 'Dakshina Kannada',
		region: 'Karnataka',
		country: 'IN',
		geo: { latitude: 12.9141, longitude: 74.856 },
		nearbyAreas: [...AREAS_BY_HUB.mangalore],
		h1: 'Custom Software & Web Development for Mangalore Businesses',
		seo: {
			title: 'Software & Web Developer in Mangalore | Safwan Pirzade',
			description:
				'Custom software, ERP, POS billing, e-commerce and mobile apps for businesses right across Mangalore, Surathkal, Moodbidri, Bantwal, Puttur and Karkala.',
			keywords: [
				'web development Mangalore',
				'software developer Mangalore',
				'ERP software Mangalore',
				'mobile app developer Mangalore',
			],
			ogEyebrow: 'Location',
			ogTitle: 'Mangalore',
		},
		intro: [
			'I build custom software, ERP and POS systems, e-commerce platforms and mobile apps for businesses in Mangalore and across Dakshina Kannada, working from Bhatkal up the coast.',
			'Mangalore has more competition for this work than the smaller coastal towns, so what I offer is specific rather than general: production experience with multi-tenant ERP, real double-entry accounting, GCC VAT handling, and bilingual right-to-left interfaces in Arabic and Urdu.',
			'This hub covers Mangalore, Surathkal, Moodbidri, Bantwal, Puttur and Karkala.',
		],
		localProof: [
			{
				title: 'Gulf-facing experience',
				body: 'Substantial work for clients in the UAE and Saudi Arabia, which matters for Mangalore businesses with GCC operations or customers — including VAT handling and Arabic RTL interfaces.',
			},
			{
				title: 'Production systems, not demos',
				body: 'ProCraft ERP is in daily use by thirty-plus people; the BCJ platform serves over 400 members. Both are running systems rather than portfolio pieces.',
			},
		],
		servicesOffered: [
			'erp-software',
			'web-development',
			'mobile-app-development',
			'ecommerce-development',
			'pos-billing-software',
			'election-voting-systems',
		],
		relatedLocations: ['udupi', 'bhatkal', 'kumta'],
		relatedCaseStudies: ['procraft-erp', 'bcj-cms', 'smart-arrow'],
		faqs: [
			{
				q: 'Why choose a Bhatkal developer over a Mangalore agency?',
				a: 'Only if the specifics fit. What I bring is production experience with multi-tenant ERP, real double-entry accounting with GCC VAT, and genuine right-to-left bilingual interfaces. For a standard brochure site, a local agency may serve you just as well.',
			},
			{
				q: 'Do you work with businesses that have UAE or Saudi operations?',
				a: 'Yes, and it is a large share of my recent work. That includes UAE VAT posted through a real general ledger, multi-currency handling, and Arabic interfaces built as proper right-to-left layouts rather than translated text in a left-to-right design.',
			},
		],
	},
};

export const LOCATION_LIST = Object.values(LOCATIONS);
