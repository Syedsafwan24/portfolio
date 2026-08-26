/**
 * Places served, grouped by the location hub page that covers them.
 *
 * Schema that claims a service area with no corroborating text on the page is
 * a thin-content signal, so every name here must appear in visible copy on its
 * hub page. Keeping the grouping explicit is what makes that checkable.
 */
export const AREAS_BY_HUB = {
	bhatkal: [
		'Bhatkal',
		'Manki',
		'Murdeshwar',
		'Shirali',
		'Jali',
		'Mundalli',
		'Belke',
	],
	karwar: ['Karwar', 'Ankola', 'Gokarna', 'Sirsi', 'Yellapur', 'Dandeli'],
	kumta: ['Kumta', 'Aversa', 'Mirjan'],
	honnavar: ['Honnavar', 'Gerusoppa', 'Haldipur'],
	udupi: ['Udupi', 'Manipal', 'Kaup', 'Malpe', 'Brahmavar', 'Kundapura', 'Byndoor'],
	mangalore: ['Mangalore', 'Surathkal', 'Moodbidri', 'Bantwal', 'Puttur', 'Karkala'],
} as const;

/** Flat list for the organisation-level areaServed. */
export const ALL_AREAS: string[] = Object.values(AREAS_BY_HUB).flatMap(
	(areas) => [...areas]
);
