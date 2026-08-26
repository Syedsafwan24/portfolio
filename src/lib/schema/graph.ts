/**
 * Minimal JSON-LD graph plumbing.
 *
 * Nodes are plain objects built by the helpers in this directory. Every page
 * emits the same three global entities (person, organization, website) with
 * identical @ids, which is what lets search engines reconcile them into a
 * single entity across the whole site rather than treating each page as a
 * separate claim.
 */
export type SchemaNode = Record<string, unknown> & {
	'@type': string | string[];
	'@id'?: string;
};

/** A reference to another node by @id, rather than repeating it inline. */
export const ref = (id: string) => ({ '@id': id });

export function buildGraph(nodes: SchemaNode[]) {
	const seen = new Set<string>();
	const graph = nodes.filter((node) => {
		const id = node['@id'];
		if (typeof id !== 'string') return true;
		if (seen.has(id)) return false;
		seen.add(id);
		return true;
	});

	return { '@context': 'https://schema.org', '@graph': graph };
}
