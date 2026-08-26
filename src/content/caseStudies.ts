import type { CaseStudyDoc, CaseStudySlug } from './types';

/**
 * Case studies.
 *
 * `soleAuthor` drives whether schema credits the person as `author` or
 * `contributor`. Where a page cites its own sources, overstating authorship is
 * worse than useless — the citation refutes the claim, and both quality raters
 * and answer engines follow the link.
 */
export const CASE_STUDIES: Record<CaseStudySlug, CaseStudyDoc> = {
	'election-systems': {
		slug: 'election-systems',
		path: '/work/election-systems/',
		updated: '2026-08-26',
		name: 'Community Election & Voting Systems',
		client: 'Anjuman Hami-e-Muslimeen & Majlis-e-Islah wa Tanzeem, Bhatkal',
		year: '2026',
		status: 'DELIVERED',
		softwareCategory: 'BusinessApplication',
		soleAuthor: false,
		h1: 'Computerised Voting Systems Used to Conduct Bhatkal Community Elections',
		seo: {
			title: 'Bhatkal Election Software — Anjuman & Tanzeem | Safwan',
			description:
				'Co-developed the computerised voting used to conduct the 2024 Anjuman Hami-e-Muslimeen and 2026 Tanzeem elections in Bhatkal. Credited in SahilOnline.',
			keywords: [
				'Anjuman Hami-e-Muslimeen election',
				'Tanzeem election Bhatkal',
				'Bhatkal election software',
				'computerised voting Bhatkal',
				'who conducts elections in Bhatkal',
			],
			ogEyebrow: 'Case study',
			ogTitle: 'Election Systems',
		},
		summary:
			'Computerised voting used to run two Bhatkal community elections, with the full result ready within a minute of polls closing.',
		intro: [
			'Two of Bhatkal’s largest community institutions now run their elections on computerised voting rather than paper. I co-developed the applications used for both: the February 2024 Anjuman Hami-e-Muslimeen election and the May 2026 Majlis-e-Islah wa Tanzeem election. SahilOnline credited me by name in its reporting on each.',
			'This was student team work, not a solo project. At Anjuman in 2024 the team was led by Mohammed Azaan Peshmam and I contributed as one of three supporting developers under professor Zahid Kharuri. For Tanzeem in 2026, Election Commissioner Mohiddin Altaf Kharuri credited Syed Safwan Peerzade and Mohammed Azan Peshmam for designing the voting application, built within an eighteen-member team from Anjuman Engineering College.',
			'What makes these worth writing up is not the technology, which is unremarkable. It is that a community institution with a century of history trusted software to run the process by which its own leadership is chosen — and that the result was defensible enough for the election commissioner to announce it in the hall the same evening.',
		],
		problem: [
			'A community election is a trust exercise before it is a technical one. The voter roll is fixed and contested, eligibility rules come from a constitution rather than a product spec, and any member must be able to challenge the outcome afterwards.',
			'Paper balloting solved trust by being slow and visible. Counting ran long after polling closed, results arrived days later, and the delay itself became a source of doubt.',
			'Replacing that with software means the speed gain has to come without any loss of verifiability. A faster count that nobody trusts is a worse system than the paper it replaced.',
		],
		approach: [
			{
				title: 'One locked roll',
				body: 'The member register is prepared, reconciled against the organisation’s own records and locked before polling opens. Every terminal validates against that same live roll, so a member who has voted at one terminal cannot vote at another.',
			},
			{
				title: 'Rules from the constitution',
				body: 'Eligibility, seat counts and what makes a ballot invalid are taken from the organisation’s own election rules and agreed with the election commissioner before any code is written.',
			},
			{
				title: 'A hall full of terminals',
				body: 'The Anjuman election ran twelve computers in the administrative hall simultaneously, with Anjuman students volunteering as guides so that voters unfamiliar with a screen were not disadvantaged.',
			},
			{
				title: 'Continuous counting',
				body: 'Votes tally as they are cast rather than in a separate counting phase, which is what removes the multi-day gap between polling and result without cutting any corner in the process.',
			},
			{
				title: 'An audit record the organisation keeps',
				body: 'A timestamped record of the locked roll, the issued ballots and the final tally is exported to the organisation, so scrutineers can reconcile the outcome without depending on the developers.',
			},
		],
		outcome: [
			{
				title: 'Anjuman Hami-e-Muslimeen, 18 February 2024',
				body: 'Of 745 eligible members, 536 voted — a 72% turnout. The tally was complete within a minute of polls closing, and SahilOnline reported all 23 winning members displayed on screen within half an hour of the election’s completion — the gap being the commissioner’s formalities, not the count. The election was run by Election Commissioner Abdul Wajid Kola for an institution then a century old.',
			},
			{
				title: 'Majlis-e-Islah wa Tanzeem, 12 May 2026',
				body: 'Polling was conducted, in the Election Commissioner’s words, “in a systematic and computerised manner”. Constituency 14 recorded 175 of 232 members voting, a 75.43% turnout, and the result saw over half the executive body change hands.',
			},
			{
				title: 'Publicly credited',
				body: 'Both elections were reported by SahilOnline, which named the student developers in each case. Independent coverage of this kind is the reason these claims can be checked rather than merely asserted.',
			},
		],
		metrics: [
			{ value: '536 / 745', label: 'Anjuman 2024 votes cast' },
			{ value: 'Under 1 min', label: 'To full result' },
			{ value: '75.43%', label: 'Tanzeem 2026 turnout' },
		],
		tech: [
			'Next.js',
			'React',
			'PostgreSQL',
			'Role-based access control',
			'Audit logging',
			'Bilingual / RTL',
		],
		press: [
			{
				title:
					'Bhatkal Anjuman elections: computerized voting app delivers rapid results',
				publisher: 'SahilOnline',
				url: 'https://mail.sahilonline.org/bhatkal-anjuman-elections-computerized-voting-app-delivers-rapid-results',
				published: '2024-02-19',
			},
			{
				title:
					'Bhatkal Tanzeem elections witness major shift, over 50 pc new faces enter executive body',
				publisher: 'SahilOnline',
				url: 'https://sahilonline.org/bhatkal-tanzeem-elections-witness-major-shift-over-50-pc-new-faces-enter-executive-body',
				published: '2026-05-13',
			},
		],
		faqs: [
			{
				q: 'Who developed the Anjuman Hami-e-Muslimeen voting software?',
				a: 'SahilOnline reported that Anjuman computer science students led by Mohammed Azaan Peshmam developed the voting software, with support from Syed Safwan Pirzade, Mohammed Zayan Kashimji and Mushir-ul-Haque Khan, under the guidance of college professor Zahid Kharuri.',
			},
			{
				q: 'Who designed the Tanzeem election voting application?',
				a: 'Election Commissioner Mohiddin Altaf Kharuri credited Syed Safwan Peerzade and Mohammed Azan Peshmam for designing the voting application used in the May 2026 Majlis-e-Islah wa Tanzeem elections, developed as part of an eighteen-member student team from Anjuman Engineering College.',
			},
			{
				q: 'Is Syed Safwan Pirzade the same person as Syed Safwan Peerzade?',
				a: 'Yes. The name is transliterated from Urdu, so both spellings appear in print — SahilOnline used “Pirzade” in its 2024 report and “Peerzade” in 2026. This site uses Pirzade. They refer to the same developer based in Bhatkal, Karnataka.',
			},
			{
				q: 'How were the results produced so quickly?',
				a: 'Votes tally continuously as they are cast rather than being counted after polling closes, so the full result exists within about a minute of the last vote. In 2024 the Anjuman result was announced the same evening, the remaining time being the commissioner’s formal announcement rather than counting.',
			},
			{
				q: 'Can this be used for other jamaats and organisations?',
				a: 'Yes. The same approach suits any organisation with a defined member roll and constitutional election rules — jamaats, trusts, associations and institutions. Remote voting for members abroad is supported, though it requires stricter identity checks agreed in advance.',
			},
		],
		relatedServices: ['election-voting-systems', 'web-development'],
	},

	'procraft-erp': {
		slug: 'procraft-erp',
		path: '/work/procraft-erp/',
		updated: '2026-08-26',
		name: 'ProCraft ERP',
		client: 'ProCraft',
		year: '2026',
		status: 'LIVE',
		liveUrl: 'https://erp.procraft.ae',
		softwareCategory: 'BusinessApplication',
		soleAuthor: true,
		h1: 'ProCraft ERP — Multi-Tenant Inventory, POS and Accounting',
		seo: {
			title: 'ProCraft ERP — Multi-Tenant ERP Case Study | Safwan',
			description:
				'A multi-tenant ERP covering inventory, POS, purchasing and double-entry accounting with UAE VAT, in daily production use by a team of more than thirty.',
			ogEyebrow: 'Case study',
			ogTitle: 'ProCraft ERP',
		},
		summary:
			'Multi-tenant ERP covering inventory, POS, purchasing and double-entry accounting, in daily production use across Dubai and India.',
		intro: [
			'ProCraft ERP is a multi-tenant SaaS system covering inventory, point of sale, purchasing and accounting for businesses operating across Dubai and India. It is in daily production use by a team of more than thirty people.',
			'The design goal was a single source of truth. Rather than a sales log reconciled monthly against a separate stock sheet, every transaction posts through a real double-entry general ledger as it happens, and stock moves in the same instant.',
		],
		problem: [
			'Businesses running across multiple locations and two tax jurisdictions were maintaining stock in spreadsheets, billing in a separate tool and accounts in a third, with reconciliation absorbing days each month.',
			'The specific requirements — batch and expiry tracking, weighted-average costing, UAE VAT posting and per-branch permissions — were each individually available in off-the-shelf products, but not together at a price that made sense.',
		],
		approach: [
			{
				title: 'Ledger-first data model',
				body: 'Double-entry accounting was designed before any screen. Getting stock valuation, costing and the ledger correct at the schema level is what keeps the system trustworthy years later.',
			},
			{
				title: 'Real multi-tenancy',
				body: 'Tenant data is isolated at the database layer rather than filtered in application code, so one deployment can serve several businesses without the isolation depending on a forgotten WHERE clause.',
			},
			{
				title: 'Granular permissions',
				body: '173 distinct permission codes let a branch clerk, a purchasing manager and an accountant each see exactly what their role requires and nothing else.',
			},
			{
				title: 'Live updates',
				body: 'Socket.IO pushes stock and transaction changes to connected clients, so two users at different terminals are never working from divergent figures.',
			},
			{
				title: 'Storefront synchronisation',
				body: 'Two-way Shopify sync keeps online and in-store stock consistent, which is the failure point that usually erodes trust in an e-commerce integration.',
			},
		],
		outcome: [
			{
				title: 'In production, daily',
				body: 'Used by more than thirty employees as the operational system of record rather than a reporting layer bolted onto existing processes.',
			},
			{
				title: 'Reconciliation collapsed',
				body: 'Because VAT and the general ledger post as transactions happen, month-end reconciliation is a review rather than a reconstruction.',
			},
			{
				title: 'Multi-location stock that holds',
				body: 'Batch and expiry tracking with weighted-average costing across branches, with transfers and adjustments recorded rather than absorbed silently.',
			},
		],
		metrics: [
			{ value: '30+', label: 'Daily users' },
			{ value: '173', label: 'RBAC permission codes' },
			{ value: '5% VAT', label: 'Posted through GL' },
		],
		tech: [
			'Next.js',
			'TypeScript',
			'PostgreSQL',
			'Prisma',
			'Socket.IO',
			'Multi-tenant SaaS',
		],
		faqs: [
			{
				q: 'What does ProCraft ERP cover?',
				a: 'Inventory with batch and expiry tracking, point of sale, purchasing through to supplier invoices, and double-entry accounting with UAE VAT. All four run against one database, so stock, billing and the ledger cannot drift apart the way separate systems do.',
			},
			{
				q: 'Can a similar system be built for my business?',
				a: 'Yes, though whether it should be depends on your process. Custom ERP is worth it when requirements like batch tracking, multi-branch stock or specific costing methods force daily workarounds in off-the-shelf software. If your process is standard, an existing product is cheaper.',
			},
		],
		relatedServices: ['erp-software', 'pos-billing-software'],
	},

	'bcj-awards-portal': {
		slug: 'bcj-awards-portal',
		path: '/work/bcj-awards-portal/',
		updated: '2026-08-26',
		name: 'BCJ Educational Awards Portal',
		client: 'Bhatkal Community Jeddah',
		year: '2026',
		status: 'LIVE',
		liveUrl: 'https://educational.bcjed.com',
		softwareCategory: 'BusinessApplication',
		soleAuthor: true,
		h1: 'BCJ Educational Awards Portal — Nominations, Review and Roles',
		seo: {
			title: 'BCJ Educational Awards Portal Case Study | Safwan Pirzade',
			description:
				'A nomination and review portal built for Bhatkal Community Jeddah, with authenticated submissions, three distinct roles and role-based access control.',
			ogEyebrow: 'Case study',
			ogTitle: 'BCJ Awards Portal',
		},
		summary:
			'Nomination and review portal for Bhatkal Community Jeddah, with authenticated submissions and three distinct reviewer roles.',
		intro: [
			'A nomination and review portal built for Bhatkal Community Jeddah’s educational awards, handling student nominations from submission through review to final decision. It processed more than twenty nominations in its first cycle.',
			'The interesting requirement was not the form. It was the review workflow: three distinct roles, each seeing a different view of the same nomination, with a clear record of who decided what.',
		],
		problem: [
			'Nominations arriving by message and email meant no single list, no reliable record of which had been reviewed, and no way for reviewers in different countries to work from the same state.',
			'The process also needed to be defensible. An awards decision that affects students should leave a record of who reviewed each nomination and on what basis.',
		],
		approach: [
			{
				title: 'Authenticated submissions',
				body: 'JWT-based authentication so each nomination is tied to a real, verified submitter rather than an anonymous form post.',
			},
			{
				title: 'Three roles, three views',
				body: 'Submitters, reviewers and administrators each get a distinct view of the same nomination, enforced through role-based access control rather than hidden UI.',
			},
			{
				title: 'A decision record',
				body: 'Review actions are recorded against the nomination, so the process can be explained afterwards without reconstructing it from memory.',
			},
		],
		outcome: [
			{
				title: 'One authoritative list',
				body: 'All nominations in a single reviewable queue, replacing a scatter of messages and email threads across multiple countries.',
			},
			{
				title: 'Reviewable across time zones',
				body: 'Reviewers in Jeddah and Bhatkal work from the same live state, with no coordination overhead to establish what has already been assessed.',
			},
		],
		metrics: [
			{ value: '20+', label: 'Nominations processed' },
			{ value: '3', label: 'Distinct roles' },
			{ value: 'JWT', label: 'Authentication' },
		],
		tech: ['Django', 'Django REST Framework', 'JWT', 'PostgreSQL', 'RBAC'],
		faqs: [
			{
				q: 'Can this be adapted for another community organisation?',
				a: 'Yes. The pattern — authenticated submissions, several reviewer roles with different views, and a recorded decision trail — fits scholarship programmes, grant applications and membership approvals as readily as it fits an awards cycle.',
			},
		],
		relatedServices: ['web-development', 'election-voting-systems'],
	},

	'bcj-cms': {
		slug: 'bcj-cms',
		path: '/work/bcj-cms/',
		updated: '2026-08-26',
		name: 'BCJ Community Platform',
		client: 'Bhatkal Community Jeddah',
		year: '2026',
		status: 'LIVE',
		liveUrl: 'https://bcjed.com',
		softwareCategory: 'WebApplication',
		soleAuthor: true,
		h1: 'BCJ Community Platform — Bilingual English and Urdu with Full RTL',
		seo: {
			title: 'BCJ Community Platform Case Study | Syed Safwan Pirzade',
			description:
				'A bilingual English and Urdu community platform with full right-to-left layout, serving more than 400 members of the Bhatkal Community based in Jeddah.',
			ogEyebrow: 'Case study',
			ogTitle: 'BCJ Community Platform',
		},
		summary:
			'Bilingual English and Urdu community platform with full right-to-left layout, serving over 400 members.',
		intro: [
			'A content and member platform for Bhatkal Community Jeddah, serving more than four hundred members across Saudi Arabia and India. The whole interface works in both English and Urdu, including full right-to-left layout.',
			'Bilingual support here is not a translation layer. Switching to Urdu mirrors the layout, changes typography and line height, and reverses the direction of navigation, forms and every directional element in the interface.',
		],
		problem: [
			'A membership split between Jeddah and Bhatkal spans a real language divide: many members read Urdu far more comfortably than English, and an English-only platform quietly excludes them.',
			'Most bilingual implementations translate the text but leave a left-to-right layout in place, which reads as broken to anyone actually using the right-to-left version.',
		],
		approach: [
			{
				title: 'RTL as a first-class layout',
				body: 'Right-to-left is implemented as a genuine layout direction rather than mirrored text, so alignment, navigation, form flow and directional icons all reverse correctly.',
			},
			{
				title: 'Urdu typography',
				body: 'Urdu needs different type sizing and line height to remain legible at the same visual weight as the English. Both were tuned rather than shared.',
			},
			{
				title: 'Content management for staff',
				body: 'An admin area the community’s own volunteers operate, so routine updates never require a developer.',
			},
		],
		outcome: [
			{
				title: 'Serving 400+ members',
				body: 'Used as the community’s primary platform across Saudi Arabia and India, in whichever of the two languages each member prefers.',
			},
			{
				title: 'Genuinely usable in Urdu',
				body: 'The Urdu experience is a first-class layout rather than a translation applied over an English design.',
			},
		],
		metrics: [
			{ value: '400+', label: 'Community members' },
			{ value: 'EN / UR', label: 'Bilingual' },
			{ value: 'Full RTL', label: 'Layout direction' },
		],
		tech: ['React', 'Next.js', 'PostgreSQL', 'Prisma', 'RTL', 'i18n'],
		faqs: [
			{
				q: 'Can you build a website in Urdu with right-to-left layout?',
				a: 'Yes. This platform runs fully in both English and Urdu with a genuine right-to-left layout — alignment, navigation, forms and directional elements all reverse, and Urdu typography is tuned separately rather than inheriting the English sizing.',
			},
		],
		relatedServices: ['web-development', 'mobile-app-development'],
	},

	'smart-arrow': {
		slug: 'smart-arrow',
		path: '/work/smart-arrow/',
		updated: '2026-08-26',
		name: 'Smart Arrow',
		client: 'Smart Arrow Trading, Saudi Arabia',
		year: '2026',
		status: 'LIVE',
		liveUrl: 'https://satjed.com',
		softwareCategory: 'WebApplication',
		soleAuthor: true,
		h1: 'Smart Arrow — A Saudi Manufacturer Online in Seven Days',
		seo: {
			title: 'Smart Arrow — Saudi Manufacturer Case Study | Safwan',
			description:
				'A multilingual site for a Saudi garments manufacturer established in 1993, taken from zero to production in just seven days with strong Core Web Vitals.',
			ogEyebrow: 'Case study',
			ogTitle: 'Smart Arrow',
		},
		summary:
			'Multilingual site for a Saudi garments manufacturer established in 1993, from zero to production in seven days.',
		intro: [
			'Smart Arrow is a garments manufacturer in Saudi Arabia, established in 1993, that had no meaningful web presence. The brief was to change that quickly, in both English and Arabic, without the result looking like it had been built quickly.',
			'The site went from nothing to production in seven days. That pace was possible because scope was fixed narrowly at the start and content decisions were made without delay on the client’s side.',
		],
		problem: [
			'A manufacturer with three decades of trading history was effectively invisible to anyone searching for its product categories online.',
			'Any credible site had to work in Arabic as well as English, which rules out treating the second language as an afterthought bolted on later.',
		],
		approach: [
			{
				title: 'Narrow scope, fixed early',
				body: 'A deliberately small set of pages doing the essential job well, rather than a large site delivered slowly. Everything outside that was deferred rather than negotiated during the build.',
			},
			{
				title: 'Bilingual from the start',
				body: 'English and Arabic with right-to-left layout built in from the first commit, which is far cheaper than retrofitting it after the design settles.',
			},
			{
				title: 'Performance as a requirement',
				body: 'Server-rendered pages and disciplined asset handling, so the site loads quickly on mobile connections in the region it serves.',
			},
			{
				title: 'Search visibility built in',
				body: 'Structured data, clean crawlable markup and category pages targeting the terms buyers actually search, configured before launch rather than after.',
			},
		],
		outcome: [
			{
				title: 'Live in seven days',
				body: 'From zero to a production site in both languages inside a week, without the compromises usually visible in work delivered at that pace.',
			},
			{
				title: 'Strong Core Web Vitals',
				body: 'Fast loading on mobile connections, which is both a ranking factor and the difference between a visitor waiting and leaving.',
			},
			{
				title: 'Ranking for target categories',
				body: 'The site now surfaces in search for its target product categories, which it previously did not.',
			},
		],
		metrics: [
			{ value: '7 days', label: 'Zero to production' },
			{ value: 'EN / AR', label: 'Bilingual, full RTL' },
			{ value: 'Est. 1993', label: 'Client since' },
		],
		tech: ['React', 'Next.js', 'PostgreSQL', 'Prisma', 'i18n', 'SEO'],
		faqs: [
			{
				q: 'Can a website really be built in seven days?',
				a: 'Sometimes, under conditions. Scope has to be fixed narrowly at the start, content has to be ready, and decisions have to come back the same day. Most projects do not meet those conditions, and two to four weeks is the realistic range for a marketing site.',
			},
		],
		relatedServices: ['web-development', 'ecommerce-development'],
	},
};

export const CASE_STUDY_LIST = Object.values(CASE_STUDIES);
