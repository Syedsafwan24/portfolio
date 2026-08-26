import { buildGraph, type SchemaNode } from './graph';

/** Server component. Renders one <script type="application/ld+json"> per page. */
export function JsonLd({ nodes }: { nodes: SchemaNode[] }) {
	// Escaping '<' prevents a string inside the data from closing the script tag.
	const json = JSON.stringify(buildGraph(nodes)).replace(/</g, '\u003c');

	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{ __html: json }}
		/>
	);
}
