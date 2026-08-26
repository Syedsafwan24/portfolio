import type { ServiceDoc, ServiceSlug } from './types';

/**
 * Service pages.
 *
 * Every `intro[0]` answers the page's implied question directly in the first
 * sentence — that is the paragraph an answer engine lifts. Claims here must be
 * backed by work that actually shipped; capability is described as capability,
 * never dressed up as a track record.
 */
export const SERVICES: Record<ServiceSlug, ServiceDoc> = {
	'election-voting-systems': {
		slug: 'election-voting-systems',
		path: '/services/election-voting-systems/',
		updated: '2026-08-26',
		name: 'Election & Voting System Development',
		shortName: 'Election Systems',
		tagline: 'Computerised elections',
		serviceType: 'Online election and voting system development',
		h1: 'Online Election & Voting Systems for Anjuman, Tanzeem and Community Organisations',
		seo: {
			title: 'Election & Voting System Developer in Bhatkal | Safwan',
			description:
				'Computerised election and online voting systems for Anjuman, Tanzeem, jamaats and community organisations in Bhatkal. Used to conduct real elections here.',
			keywords: [
				'election software Bhatkal',
				'online voting system for Anjuman',
				'Tanzeem election software',
				'jamaat election voting system',
				'community election software India',
				'computerised election Bhatkal',
			],
			ogEyebrow: 'Service',
			ogTitle: 'Election & Voting Systems',
		},
		intro: [
			'I build computerised election and online voting systems for community organisations — Anjuman, Tanzeem, jamaats, trusts and associations. I co-developed the voting applications used to conduct the 2024 Anjuman Hami-e-Muslimeen election and the 2026 Majlis-e-Islah wa Tanzeem election in Bhatkal, both credited by name in SahilOnline’s reporting.',
			'A community election is not a generic form. It has a fixed voter roll, strict eligibility rules, one-member-one-vote enforcement, scrutineers who must be able to verify the count, and a result that has to be defensible afterwards. The software has to make the process faster without making it less trustworthy.',
			'These systems run on-site on polling terminals, or online for members voting from abroad, or both. Results are tallied the moment polling closes rather than over the following days.',
		],
		metrics: [
			{ value: '2', label: 'Elections conducted' },
			{ value: 'Under 1 min', label: 'Result after polls close' },
			{ value: '75%', label: 'Tanzeem 2026 turnout' },
		],
		offerings: [
			{
				title: 'Voter roll management',
				body: 'Import and maintain the member register, mark eligibility, handle constituency or category splits, and lock the roll before polling opens so it cannot be edited mid-election.',
			},
			{
				title: 'Eligibility & authentication',
				body: 'Verify each voter against the roll at the terminal or online, so only eligible members vote and each member votes exactly once. Every issued ballot is accounted for.',
			},
			{
				title: 'Ballot design',
				body: 'Single-seat, multi-seat and panel ballots, with a configurable maximum number of selections. Bilingual ballots including Urdu and Arabic with full right-to-left layout.',
			},
			{
				title: 'On-site polling terminals',
				body: 'Multiple computers running simultaneously in a polling hall, each validating against the same live roll. The Anjuman election ran twelve terminals in the administrative hall.',
			},
			{
				title: 'Live counting & results',
				body: 'Votes tally as they are cast, so the full result is ready the moment polling closes. Winners can be displayed on screen to the hall immediately rather than announced days later.',
			},
			{
				title: 'Audit trail',
				body: 'A complete, timestamped record of the roll, the issued ballots and the tally, so scrutineers and the election commissioner can verify the outcome independently after the fact.',
			},
		],
		process: [
			{
				title: '1. Rules first',
				body: 'Before any code, we write down the constitution’s election rules: who votes, for how many seats, what makes a ballot invalid, who adjudicates. Most election software fails because this step was skipped.',
			},
			{
				title: '2. Roll preparation',
				body: 'The member register is imported, de-duplicated and checked against the organisation’s own records. This is usually where the real work is, and it has to be finished well before polling day.',
			},
			{
				title: '3. Dry run',
				body: 'A full rehearsal on the actual terminals with test voters, including a deliberate attempt to double-vote. The election commissioner and scrutineers watch this, not just the developers.',
			},
			{
				title: '4. Polling day',
				body: 'On-site support for the whole polling window, with volunteers guiding voters at the terminals and a fallback procedure agreed in advance in case of a power or network failure.',
			},
			{
				title: '5. Count & handover',
				body: 'Results tallied and displayed at close of polling, followed by the exported audit record handed to the organisation so the outcome is theirs to keep and verify.',
			},
		],
		stack: [
			'Next.js',
			'React',
			'PostgreSQL',
			'Prisma',
			'Role-based access control',
			'Bilingual / RTL',
		],
		faqs: [
			{
				q: 'Who developed the voting app used in the Anjuman Hami-e-Muslimeen elections?',
				a: 'The voting software for the February 2024 Anjuman Hami-e-Muslimeen election was developed by a team of Anjuman computer science students led by Mohammed Azaan Peshmam, with support from Syed Safwan Pirzade, Mohammed Zayan Kashimji and Mushir-ul-Haque Khan, guided by professor Zahid Kharuri.',
			},
			{
				q: 'Who designed the voting application for the Tanzeem elections in Bhatkal?',
				a: 'For the May 2026 Majlis-e-Islah wa Tanzeem election, Election Commissioner Mohiddin Altaf Kharuri publicly credited Syed Safwan Peerzade and Mohammed Azan Peshmam for designing the voting application, built as part of an eighteen-member student team from Anjuman Engineering College.',
			},
			{
				q: 'How fast can a community election be counted?',
				a: 'Within about a minute of polls closing. Votes tally continuously as they are cast, so the full result exists the moment the last vote is recorded — there is no separate counting day. At the 2024 Anjuman election, 536 of 745 members voted across twelve terminals and all 23 winners were announced the same evening.',
			},
			{
				q: 'Can members vote from Dubai, Jeddah or Dammam?',
				a: 'Yes. The same roll and ballot can be served online to members abroad while on-site terminals run in Bhatkal, with one-member-one-vote enforced across both. Remote voting needs stricter identity checks, so the eligibility rules have to be agreed with the organisation first.',
			},
			{
				q: 'How do you stop somebody voting twice?',
				a: 'Every voter is checked against a single locked roll at the moment of voting, and the roll is marked atomically as the ballot is issued. Because all terminals validate against the same live register, a member who has voted at one terminal cannot vote at another.',
			},
			{
				q: 'Can scrutineers verify the result independently?',
				a: 'Yes, and they should. The system produces a timestamped audit record covering the locked roll, every issued ballot and the final tally. The organisation keeps that record, so the election commissioner can reconcile the outcome without relying on the developers.',
			},
			{
				q: 'Does the ballot support Urdu?',
				a: 'Yes. Ballots and the voter interface can be bilingual with full right-to-left layout, which matters when a significant share of members are more comfortable reading Urdu than English. I have shipped production right-to-left interfaces in both Urdu and Arabic.',
			},
		],
		relatedCaseStudies: ['election-systems', 'bcj-awards-portal'],
		relatedServices: ['web-development', 'erp-software'],
		primaryLocations: ['bhatkal', 'honnavar'],
	},

	'erp-software': {
		slug: 'erp-software',
		path: '/services/erp-software/',
		updated: '2026-08-26',
		name: 'ERP Software Development',
		shortName: 'ERP Software',
		tagline: 'Custom ERP systems',
		serviceType: 'Custom ERP software development',
		h1: 'Custom ERP Software Development in Bhatkal & Coastal Karnataka',
		seo: {
			title: 'ERP Software Development in Bhatkal, Karnataka | Safwan',
			description:
				'Custom ERP covering inventory, purchasing, billing and accounting for businesses in Bhatkal and coastal Karnataka. In production with 30+ daily users.',
			keywords: [
				'ERP software Bhatkal',
				'custom ERP development India',
				'inventory management software Bhatkal',
				'accounting software for business',
				'ERP developer coastal Karnataka',
			],
			ogEyebrow: 'Service',
			ogTitle: 'ERP Software',
		},
		intro: [
			'I build custom ERP systems for businesses that have outgrown spreadsheets — covering inventory, purchasing, billing, multi-location stock and double-entry accounting in one system. ProCraft ERP, which I built, is used daily in production by a team of more than thirty across Dubai and India.',
			'Off-the-shelf ERP fails in two directions: it is either too generic to match how the business actually operates, or so large that most of it goes unused while the licence is paid anyway. A custom system is worth it when your process is genuinely specific — batch and expiry tracking, multi-branch stock, or a costing method your accountant insists on.',
			'I am equally willing to tell you when a custom ERP is the wrong answer and an existing product would serve you better.',
		],
		metrics: [
			{ value: '30+', label: 'Daily users in production' },
			{ value: '173', label: 'Permission codes' },
			{ value: 'Real-time', label: 'General ledger' },
		],
		offerings: [
			{
				title: 'Inventory & stock control',
				body: 'Multi-location stock, batch and expiry tracking, transfers between branches, stock adjustments with reasons, and weighted-average costing that stays correct as prices move.',
			},
			{
				title: 'Purchasing & suppliers',
				body: 'Purchase orders through to goods received and supplier invoices, with landed cost handling so the true cost of stock reflects freight and duties rather than just the invoice line.',
			},
			{
				title: 'Billing & double-entry accounting',
				body: 'A real general ledger that updates as transactions happen, rather than a sales log that has to be reconciled monthly. Includes VAT handling for GCC operations at the applicable rate.',
			},
			{
				title: 'Role-based access control',
				body: 'Granular permissions so a branch clerk, a purchasing manager and an accountant each see exactly what they should. ProCraft ERP uses 173 distinct permission codes.',
			},
			{
				title: 'Multi-tenant architecture',
				body: 'Where several businesses or branches share one deployment, each tenant’s data is isolated at the database layer rather than filtered in the application.',
			},
			{
				title: 'Integrations',
				body: 'Two-way sync with e-commerce platforms so online and in-store stock stay consistent, plus exports in whatever shape your accountant actually wants.',
			},
		],
		process: [
			{
				title: '1. Watch the current process',
				body: 'Before designing anything I want to see the spreadsheets, the registers and the workarounds people have invented. The workarounds are the requirements.',
			},
			{
				title: '2. Model the data',
				body: 'Getting stock, costing and the ledger right at the schema level is what determines whether the system is still correct in year three. This is the part worth being slow about.',
			},
			{
				title: '3. Build the core first',
				body: 'One module in real use beats six modules in demo. We start with whatever is causing the most pain and put it in front of actual staff quickly.',
			},
			{
				title: '4. Migrate carefully',
				body: 'Opening balances, existing stock and supplier history are imported and reconciled against your records before anyone is asked to switch over.',
			},
			{
				title: '5. Train and hand over',
				body: 'Training for the people who will use it daily, and documentation that assumes the reader is busy rather than technical.',
			},
		],
		stack: [
			'Next.js',
			'TypeScript',
			'PostgreSQL',
			'Prisma',
			'Socket.IO',
			'Multi-tenant SaaS',
		],
		faqs: [
			{
				q: 'Who builds custom ERP software in Bhatkal?',
				a: 'I do. I am Syed Safwan Pirzade, a full stack developer based in Bhatkal, Karnataka, and co-founder of ProCraft. I built ProCraft ERP, a multi-tenant system covering inventory, purchasing, billing and accounting that is in daily production use by more than thirty people.',
			},
			{
				q: 'Is a custom ERP worth it for a small business?',
				a: 'Often not. If your process is standard, an existing product is cheaper and better supported. Custom becomes worth it when your operation has genuinely specific requirements — batch and expiry tracking, multi-branch stock, unusual costing — that off-the-shelf software forces you to work around daily.',
			},
			{
				q: 'How long does an ERP project take?',
				a: 'The first module in real use typically takes six to ten weeks; a full system covering inventory, purchasing, billing and accounting runs several months. Anyone promising a complete ERP in a few weeks is either rebadging a template or has not understood the accounting requirements.',
			},
			{
				q: 'Can it handle multiple branches or locations?',
				a: 'Yes. Multi-location stock, inter-branch transfers and per-branch reporting are core rather than bolted on, and permissions can be scoped so each branch sees only its own operations while head office sees everything consolidated.',
			},
			{
				q: 'Does it handle VAT for UAE or Saudi operations?',
				a: 'Yes. ProCraft ERP posts UAE VAT at 5% through a real double-entry general ledger rather than calculating it at report time, which is what keeps the filings reconcilable. The same approach applies to other GCC rates.',
			},
			{
				q: 'What happens to our existing data?',
				a: 'It is migrated. Opening balances, current stock, supplier and customer records and outstanding transactions are imported and reconciled against your existing records before go-live, so the first day on the new system starts from numbers you already trust.',
			},
		],
		relatedCaseStudies: ['procraft-erp'],
		relatedServices: ['pos-billing-software', 'web-development'],
		primaryLocations: ['bhatkal', 'mangalore', 'udupi'],
	},

	'pos-billing-software': {
		slug: 'pos-billing-software',
		path: '/services/pos-billing-software/',
		updated: '2026-08-26',
		name: 'POS & Billing Software',
		shortName: 'POS & Billing',
		tagline: 'Point of sale systems',
		serviceType: 'POS and billing software development',
		h1: 'POS & Billing Software for Shops, Restaurants and Pharmacies in Bhatkal',
		seo: {
			title: 'POS & Billing Software in Bhatkal, Karnataka | Safwan',
			description:
				'Point-of-sale and billing software for shops, restaurants and pharmacies in Bhatkal and coastal Karnataka, with stock that stays correct as you keep selling.',
			keywords: [
				'POS billing software Bhatkal',
				'restaurant POS software',
				'billing software for shops',
				'pharmacy billing software',
				'supermarket POS Karnataka',
			],
			ogEyebrow: 'Service',
			ogTitle: 'POS & Billing Software',
		},
		intro: [
			'I build point-of-sale and billing software for shops, restaurants, pharmacies and wholesalers — billing at the counter, stock that decrements as you sell, and reporting that tells you what actually moved. The POS I built is part of ProCraft ERP and runs against the same live inventory and ledger as the rest of the business.',
			'Most billing software sold locally is a printing tool with a product list attached. The stock figure drifts within weeks, so nobody trusts it, and the shop goes back to counting by hand. A POS is only useful if the number it shows you is still right in six months.',
			'That means the till, the stock and the accounts have to be the same system, not three systems reconciled later.',
		],
		metrics: [
			{ value: 'Live', label: 'Stock on every sale' },
			{ value: 'Multi-loc', label: 'Branch support' },
			{ value: 'Offline', label: 'Counter resilience' },
		],
		offerings: [
			{
				title: 'Counter billing',
				body: 'Fast keyboard and barcode-driven billing designed for someone working quickly with a queue, printing to standard thermal receipt printers.',
			},
			{
				title: 'Live stock deduction',
				body: 'Every sale moves stock immediately against the same inventory the purchasing side writes to, so the figure on screen is the figure in the shop.',
			},
			{
				title: 'Batch & expiry handling',
				body: 'Essential for pharmacies and food retail: sell by batch, warn before expiry, and report what is about to become dead stock while it can still be moved.',
			},
			{
				title: 'Restaurant operations',
				body: 'Table and order management, kitchen tickets, modifiers and split bills, with recipe-level stock deduction where ingredient tracking is wanted.',
			},
			{
				title: 'Day-close & reporting',
				body: 'Cashier-wise day close, payment mode breakdown, and margin reporting by product and category so slow movers are visible before they tie up capital.',
			},
			{
				title: 'GST-ready invoicing',
				body: 'Tax-compliant invoice formats for Indian operations and VAT handling for GCC branches, posted through the ledger rather than calculated at print time.',
			},
		],
		process: [
			{
				title: '1. Stand at the counter',
				body: 'I want to see the actual busy period before designing the billing screen. A POS that is elegant but slow at peak hour is a failed POS.',
			},
			{
				title: '2. Get the catalogue right',
				body: 'Products, units, barcodes, tax rates and opening stock. This is unglamorous and it is what determines whether the system is trusted in month two.',
			},
			{
				title: '3. Pilot on one counter',
				body: 'Run the new system alongside the existing method on a single till for a week, and compare the numbers at day close before rolling it out.',
			},
			{
				title: '4. Roll out and train',
				body: 'Staff training on the till itself during quiet hours, with the fallback procedure written down and understood before it is ever needed.',
			},
		],
		stack: [
			'Next.js',
			'TypeScript',
			'PostgreSQL',
			'Prisma',
			'Thermal printing',
			'Barcode input',
		],
		faqs: [
			{
				q: 'Where can I get billing software for a shop in Bhatkal?',
				a: 'I build custom POS and billing software from Bhatkal for shops, restaurants, pharmacies and wholesalers across coastal Karnataka. The billing runs against live inventory and a real ledger, so stock and accounts stay correct rather than drifting apart over the first few months.',
			},
			{
				q: 'Does it work for a restaurant as well as a retail shop?',
				a: 'Yes, though they need different things. Retail needs fast barcode billing and batch tracking; a restaurant needs table and order management, kitchen tickets, modifiers and split bills. Both are supported, but the counter workflow is built around whichever one you actually run.',
			},
			{
				q: 'What happens if the internet goes down?',
				a: 'Billing continues. The counter is designed to keep working through a network or power interruption and reconcile once the connection returns, because a till that stops when the line drops is worse than the paper process it replaced.',
			},
			{
				q: 'Can it track batches and expiry dates?',
				a: 'Yes. Batch and expiry tracking is built in, which matters for pharmacies and food retail. You can sell by batch, get warned before stock expires, and see what is approaching expiry while there is still time to move it.',
			},
			{
				q: 'Is the invoice GST compliant?',
				a: 'Yes for Indian operations, and VAT-compliant formats are supported for GCC branches. Tax is posted through the accounting ledger rather than calculated when the invoice prints, which is what makes the returns reconcile against the books.',
			},
		],
		relatedCaseStudies: ['procraft-erp'],
		relatedServices: ['erp-software', 'ecommerce-development'],
		primaryLocations: ['bhatkal', 'kumta', 'udupi'],
	},

	'web-development': {
		slug: 'web-development',
		path: '/services/web-development/',
		updated: '2026-08-26',
		name: 'Website & Web Application Development',
		shortName: 'Web Development',
		tagline: 'Websites & web apps',
		serviceType: 'Website and web application development',
		h1: 'Website & Web Application Development in Bhatkal, Karnataka',
		seo: {
			title: 'Website Developer in Bhatkal, Karnataka | Syed Safwan',
			description:
				'Websites and web applications built in Bhatkal for businesses across coastal Karnataka and the Gulf, including bilingual Urdu and Arabic sites with RTL.',
			keywords: [
				'website developer Bhatkal',
				'web developer in Bhatkal',
				'website design Bhatkal',
				'web development coastal Karnataka',
				'Urdu RTL website developer',
			],
			ogEyebrow: 'Service',
			ogTitle: 'Web Development',
		},
		intro: [
			'I build websites and web applications from Bhatkal for businesses, institutions and community organisations across coastal Karnataka, the UAE and Saudi Arabia. That ranges from a fast marketing site to a full member management platform with authentication, roles and an admin dashboard.',
			'A large share of my work has been bilingual — English with Urdu or Arabic, including full right-to-left layout. Doing this properly is not a translation plugin; it changes layout, typography, form behaviour and how the whole interface mirrors.',
			'Everything is built to be fast on an average phone on an average connection, because that is what your visitors are actually using.',
		],
		metrics: [
			{ value: '12+', label: 'Production sites' },
			{ value: 'EN / AR / UR', label: 'Bilingual & RTL' },
			{ value: '7 days', label: 'Fastest delivery' },
		],
		offerings: [
			{
				title: 'Business & marketing websites',
				body: 'Fast, search-optimised sites that load quickly on mobile data and are built to be found for the terms your customers actually search.',
			},
			{
				title: 'Web applications',
				body: 'Member portals, admin dashboards, booking and enquiry systems with authentication, role-based access and a real database behind them.',
			},
			{
				title: 'Content management',
				body: 'An admin area your own staff can use without calling a developer to change a phone number, with permissions so the right people edit the right things.',
			},
			{
				title: 'Bilingual & right-to-left',
				body: 'English with Urdu or Arabic, implemented as a genuine RTL layout rather than mirrored text in a left-to-right design. Used in production for community and GCC clients.',
			},
			{
				title: 'Performance & SEO',
				body: 'Server-rendered pages, real structured data and clean crawlable markup, so the site loads fast and search engines and AI answer engines can actually read it.',
			},
			{
				title: 'Deployment & CI/CD',
				body: 'Automated deploys through GitHub Actions to a VPS or AWS, so releases are repeatable and a bad deploy can be rolled back rather than hand-patched.',
			},
		],
		process: [
			{
				title: '1. Scope honestly',
				body: 'We agree what the site is actually for and what success looks like. If half the requested features will not move that needle, I will say so before quoting them.',
			},
			{
				title: '2. Design in the browser',
				body: 'Layout and typography reviewed on a real phone early, because a design that only works on a desktop mockup is not finished.',
			},
			{
				title: '3. Build & review',
				body: 'Built in reviewable stages on a live preview URL, so you see progress continuously rather than a single reveal at the end.',
			},
			{
				title: '4. Launch & hand over',
				body: 'Domain, HTTPS, analytics and Search Console configured, with access handed to you. You own the domain, the repository and the hosting account.',
			},
		],
		stack: [
			'Next.js',
			'React',
			'TypeScript',
			'TailwindCSS',
			'PostgreSQL',
			'Prisma',
			'GitHub Actions',
		],
		faqs: [
			{
				q: 'Who builds websites in Bhatkal?',
				a: 'I do. I am Syed Safwan Pirzade, a full stack developer based in Bhatkal, Karnataka. I build marketing sites, member portals and web applications for businesses and community organisations across coastal Karnataka, the UAE and Saudi Arabia.',
			},
			{
				q: 'How much does a website cost in Bhatkal?',
				a: 'It depends on scope, and the honest range is wide. A focused marketing site is a modest fixed project; a member portal with logins, roles and an admin dashboard is several times that. The main cost drivers are the number of distinct user roles and whether content must be bilingual.',
			},
			{
				q: 'How long does a website take to build?',
				a: 'A straightforward marketing site typically takes two to four weeks. I delivered the Smart Arrow site for a Saudi manufacturer from zero to production in seven days, but that pace requires content being ready and decisions being made quickly on your side.',
			},
			{
				q: 'Can you build a website in Urdu or Arabic?',
				a: 'Yes, and as a proper right-to-left layout rather than translated text in a left-to-right design. I have shipped bilingual English-Urdu and English-Arabic sites in production, including the BCJ platform serving over 400 community members.',
			},
			{
				q: 'Will I own the website?',
				a: 'Yes. You own the domain, the code repository and the hosting account, and they are registered in your name rather than mine. If you later want a different developer, everything needed to hand over is already yours.',
			},
			{
				q: 'Do you work with clients outside Bhatkal?',
				a: 'Regularly. Alongside local work across coastal Karnataka, I have delivered projects for clients in Dubai, Riyadh, Jeddah and Bangalore, working remotely. Most of my recent commercial work has been for businesses in the UAE and Saudi Arabia.',
			},
		],
		relatedCaseStudies: ['bcj-cms', 'smart-arrow'],
		relatedServices: ['ecommerce-development', 'mobile-app-development'],
		primaryLocations: ['bhatkal', 'karwar', 'honnavar', 'mangalore'],
	},

	'ecommerce-development': {
		slug: 'ecommerce-development',
		path: '/services/ecommerce-development/',
		updated: '2026-08-26',
		name: 'E-Commerce Development',
		shortName: 'E-Commerce',
		tagline: 'Online stores',
		serviceType: 'E-commerce website development',
		h1: 'E-Commerce Website Development for Businesses in Coastal Karnataka',
		seo: {
			title: 'E-Commerce Website Development in Bhatkal | Syed Safwan',
			description:
				'Online stores for businesses in Bhatkal and coastal Karnataka, with payments, shipping and inventory kept in sync with what you sell in the shop itself.',
			keywords: [
				'ecommerce website development Bhatkal',
				'online store developer Karnataka',
				'ecommerce developer India',
				'Shopify integration developer',
			],
			ogEyebrow: 'Service',
			ogTitle: 'E-Commerce Development',
		},
		intro: [
			'I build online stores for businesses that already sell something and want to sell it online without running two disconnected inventories. That means payments, shipping and stock that reflects what is actually on the shelf — including two-way sync with an existing shop system where one is in use.',
			'The common failure is not the storefront. It is that online stock and shop stock drift apart, so customers order what is no longer there and the team loses confidence in both systems. Getting that sync right matters more than the theme.',
			'I will also tell you honestly when a hosted platform would serve you better than a custom build, which for many small catalogues it does.',
		],
		metrics: [
			{ value: 'Two-way', label: 'Stock sync' },
			{ value: 'Multi-currency', label: 'India & GCC' },
			{ value: 'Mobile-first', label: 'Checkout' },
		],
		offerings: [
			{
				title: 'Storefront & catalogue',
				body: 'Product catalogue with variants, categories and search, built to load fast on mobile data rather than only on a desktop connection.',
			},
			{
				title: 'Payments',
				body: 'Indian and GCC payment gateway integration with card, UPI and cash-on-delivery flows, including the reconciliation reporting your accountant needs.',
			},
			{
				title: 'Inventory synchronisation',
				body: 'Two-way sync between the online store and your shop system, so a sale at the counter and a sale online draw down the same stock figure.',
			},
			{
				title: 'Shipping & fulfilment',
				body: 'Delivery zones, shipping rules and courier integration, with order statuses customers can actually follow without phoning to ask.',
			},
			{
				title: 'Admin & order management',
				body: 'An order dashboard your staff can run day to day — picking, dispatch, returns and refunds — without needing a developer.',
			},
			{
				title: 'Search visibility',
				body: 'Product structured data, clean URLs and fast server-rendered pages so listings can appear in search results and shopping surfaces.',
			},
		],
		process: [
			{
				title: '1. Catalogue and margins first',
				body: 'What you sell, in what variants, at what margin, and what shipping actually costs. Stores fail commercially far more often than technically.',
			},
			{
				title: '2. Decide custom vs platform',
				body: 'An honest assessment of whether a hosted platform would serve you better. If it would, I will say so rather than quote a build you do not need.',
			},
			{
				title: '3. Build & integrate',
				body: 'Storefront, payments, shipping and stock sync, tested end to end with real test orders before anything goes live.',
			},
			{
				title: '4. Launch & measure',
				body: 'Analytics and Search Console configured from day one, so you find out what is converting rather than guessing.',
			},
		],
		stack: [
			'Next.js',
			'TypeScript',
			'PostgreSQL',
			'Prisma',
			'Shopify sync',
			'Payment gateways',
		],
		faqs: [
			{
				q: 'Who builds e-commerce websites in coastal Karnataka?',
				a: 'I build online stores from Bhatkal for businesses across coastal Karnataka and the Gulf. The focus is on stores that connect to real inventory, so what a customer sees online matches what is actually in stock rather than drifting apart within weeks of launch.',
			},
			{
				q: 'Should I use Shopify or a custom store?',
				a: 'For a small, standard catalogue, a hosted platform is usually cheaper and better supported, and I will tell you so. Custom becomes worth it when you need deep integration with existing inventory or accounting, unusual pricing rules, or a checkout the platform will not allow.',
			},
			{
				q: 'Can the online store share stock with my shop?',
				a: 'Yes, and it should. I have built two-way inventory sync between an online store and a POS system so a sale at the counter and a sale online draw down the same figure. Without this, online and shop stock diverge and both become untrustworthy.',
			},
			{
				q: 'Which payment methods can customers use?',
				a: 'For Indian customers, cards, UPI and cash on delivery are all supported through standard gateways. For GCC customers, regional gateways and multi-currency pricing are supported. Reconciliation reporting is included so payouts can be matched against orders.',
			},
		],
		relatedCaseStudies: ['procraft-erp', 'smart-arrow'],
		relatedServices: ['pos-billing-software', 'web-development'],
		primaryLocations: ['bhatkal', 'mangalore', 'udupi'],
	},

	'mobile-app-development': {
		slug: 'mobile-app-development',
		path: '/services/mobile-app-development/',
		updated: '2026-08-26',
		name: 'Mobile App Development',
		shortName: 'Mobile Apps',
		tagline: 'Android & iOS apps',
		serviceType: 'Mobile application development',
		h1: 'Mobile App Development in Bhatkal — Android & iOS',
		seo: {
			title: 'Mobile App Developer in Bhatkal, Karnataka | Syed Safwan',
			description:
				'Android and iOS app development from Bhatkal using React Native, for businesses and community organisations across coastal Karnataka and the Gulf region.',
			keywords: [
				'mobile app developer Bhatkal',
				'Android app developer Karnataka',
				'React Native developer India',
				'app development coastal Karnataka',
			],
			ogEyebrow: 'Service',
			ogTitle: 'Mobile App Development',
		},
		intro: [
			'I build mobile apps for Android and iOS using React Native, sharing one codebase across both platforms so a small business is not paying to build the same app twice. The apps connect to the same backend and database as the web systems I build, rather than being a separate island of data.',
			'Before quoting an app, I will ask whether you need one. For a great many businesses, a fast mobile website does the job at a fraction of the cost and with no app store approval to manage. An app earns its keep when you need push notifications, offline use, or device features like the camera or location.',
			'Where an app is genuinely the right answer, it should share the backend with everything else you run.',
		],
		metrics: [
			{ value: 'One', label: 'Codebase, both platforms' },
			{ value: 'Shared', label: 'Backend with web' },
			{ value: 'Offline', label: 'Capable' },
		],
		offerings: [
			{
				title: 'Cross-platform apps',
				body: 'A single React Native codebase producing both Android and iOS apps, which keeps build and maintenance cost close to half that of two native apps.',
			},
			{
				title: 'Shared backend',
				body: 'The app talks to the same API and database as your website or ERP, so there is one source of truth rather than two systems to reconcile.',
			},
			{
				title: 'Authentication & roles',
				body: 'Secure sign-in with role-based permissions, so members, staff and administrators each get the right experience in the same app.',
			},
			{
				title: 'Push notifications',
				body: 'Targeted notifications by user group — the feature that most often justifies building an app instead of a mobile website.',
			},
			{
				title: 'Offline capability',
				body: 'Core functions that keep working without a connection and sync when one returns, which matters for field and counter use.',
			},
			{
				title: 'Store submission',
				body: 'Play Store and App Store submission handled, including the review process, with the accounts registered in your name.',
			},
		],
		process: [
			{
				title: '1. Check an app is the right answer',
				body: 'If a mobile website would serve your users as well, I will say so. This conversation saves more money than any other part of the project.',
			},
			{
				title: '2. Define the core journey',
				body: 'The one thing the app must do brilliantly. Apps fail by launching with twelve mediocre features instead of one that works.',
			},
			{
				title: '3. Build & test on real devices',
				body: 'Tested on actual mid-range Android hardware, not only a simulator, because that is what most of your users will be holding.',
			},
			{
				title: '4. Submit & support',
				body: 'Store submission, review responses and post-launch fixes, with the store accounts belonging to you.',
			},
		],
		stack: [
			'React Native',
			'TypeScript',
			'PostgreSQL',
			'Prisma',
			'Push notifications',
			'REST APIs',
		],
		faqs: [
			{
				q: 'Who develops mobile apps in Bhatkal?',
				a: 'I build Android and iOS apps from Bhatkal using React Native, for businesses and community organisations across coastal Karnataka and the Gulf. The apps share a backend with the web systems I build, so data stays in one place rather than split across disconnected systems.',
			},
			{
				q: 'Do I actually need an app, or is a website enough?',
				a: 'For most small businesses, a fast mobile website is enough and considerably cheaper. An app is worth building when you need push notifications, offline use, or device features like the camera or location. I would rather talk you out of an app than build one nobody opens.',
			},
			{
				q: 'Do you build separately for Android and iPhone?',
				a: 'No. I use React Native, so one codebase produces both apps. This keeps build and ongoing maintenance cost close to half that of two separate native apps, which for most projects at this scale is the sensible trade.',
			},
			{
				q: 'How much does a mobile app cost?',
				a: 'Meaningfully more than a website, and the honest answer depends on how many user roles and screens are involved. The biggest cost drivers are the number of distinct user types, whether it must work offline, and whether payments are handled inside the app.',
			},
		],
		relatedCaseStudies: ['bcj-cms'],
		relatedServices: ['web-development', 'erp-software'],
		primaryLocations: ['bhatkal', 'mangalore'],
	},
};

export const SERVICE_LIST = Object.values(SERVICES);
