import { abs, SITE } from '@/lib/site';
import type { Path } from '@/content/types';
import { ID } from './ids';
import { ref, type SchemaNode } from './graph';

export function webPageNode({
	path,
	title,
	description,
	primaryEntityId,
	updated,
}: {
	path: Path;
	title: string;
	description: string;
	/** The @id of whatever this page is chiefly about (a service, a place, a project). */
	primaryEntityId?: string;
	updated?: string;
}): SchemaNode {
	return {
		'@type': 'WebPage',
		'@id': ID.webpage(path),
		url: abs(path),
		name: title,
		description,
		inLanguage: SITE.lang,
		isPartOf: ref(ID.website()),
		breadcrumb: ref(ID.breadcrumb(path)),
		about: ref(primaryEntityId ?? ID.person()),
		...(primaryEntityId ? { mainEntity: ref(primaryEntityId) } : {}),
		...(updated ? { dateModified: updated } : {}),
	};
}

/** The home page is chiefly about the person, which ProfilePage states outright. */
export function profilePageNode({
	title,
	description,
}: {
	title: string;
	description: string;
}): SchemaNode {
	return {
		'@type': 'ProfilePage',
		'@id': ID.profilePage(),
		url: abs('/'),
		name: title,
		description,
		inLanguage: SITE.lang,
		isPartOf: ref(ID.website()),
		breadcrumb: ref(ID.breadcrumb('/')),
		mainEntity: ref(ID.person()),
	};
}

export function collectionPageNode({
	path,
	title,
	description,
	itemPaths,
}: {
	path: Path;
	title: string;
	description: string;
	itemPaths: readonly Path[];
}): SchemaNode {
	return {
		'@type': 'CollectionPage',
		'@id': ID.webpage(path),
		url: abs(path),
		name: title,
		description,
		inLanguage: SITE.lang,
		isPartOf: ref(ID.website()),
		breadcrumb: ref(ID.breadcrumb(path)),
		mainEntity: {
			'@type': 'ItemList',
			itemListElement: itemPaths.map((itemPath, i) => ({
				'@type': 'ListItem',
				position: i + 1,
				url: abs(itemPath),
			})),
		},
	};
}
