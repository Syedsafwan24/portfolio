import { ImageResponse } from 'next/og';

/**
 * The root opengraph-image layout, lifted into a function so every route can
 * reuse it with different text.
 *
 * Composition, colours and type are deliberately unchanged from the original —
 * this is a text swap, not a redesign, so share cards stay recognisably the
 * same card across the whole site.
 *
 * Note: `alt`, `size` and `contentType` must be declared inline in each
 * metadata route file. Next statically analyses those exports and does not
 * reliably follow a re-export.
 */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

export function renderOgImage({
	title,
	subtitle,
	pills,
	footer = 'syedsafwan.dev',
}: {
	title: string;
	subtitle: string;
	pills?: { top: string; bottom: string }[];
	footer?: string;
}) {
	return new ImageResponse(
		(
			<div
				style={{
					background: '#0D0D0D',
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					padding: '90px 100px',
					fontFamily: 'sans-serif',
				}}
			>
				{/* Top section: title and role */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						marginBottom: '60px',
					}}
				>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						{/* Accent line */}
						<div
							style={{
								width: '4px',
								height: '56px',
								background: '#F0562E',
								marginRight: '24px',
							}}
						/>
						<h1
							style={{
								fontSize: title.length > 26 ? '58px' : '84px',
								color: '#FFFFFF',
								margin: 0,
								fontWeight: 800,
								lineHeight: 1.05,
								maxWidth: '900px',
							}}
						>
							{title}
						</h1>
					</div>

					<p
						style={{
							fontSize: '32px',
							color: '#8A8A8A',
							margin: '20px 0 0 28px',
							fontWeight: 500,
							maxWidth: '900px',
						}}
					>
						{subtitle}
					</p>
				</div>

				<div
					style={{
						height: '1px',
						width: '100%',
						background: '#222222',
						marginBottom: '60px',
					}}
				/>

				{/* Stat pills */}
				<div style={{ display: 'flex', gap: '20px', marginBottom: 'auto' }}>
					{(pills ?? []).map((stat, i) => (
						<div
							key={i}
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								background: '#18181A',
								padding: '24px 32px',
								borderRadius: '16px',
								minWidth: '220px',
							}}
						>
							<span
								style={{
									color: '#FFFFFF',
									fontSize: '28px',
									fontWeight: 600,
									marginBottom: '6px',
								}}
							>
								{stat.top}
							</span>
							<span
								style={{ color: '#8A8A8A', fontSize: '20px', fontWeight: 500 }}
							>
								{stat.bottom}
							</span>
						</div>
					))}
				</div>

				{/* Bottom section */}
				<div
					style={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}
				>
					<div
						style={{
							width: '10px',
							height: '10px',
							background: '#F0562E',
							borderRadius: '50%',
							marginRight: '16px',
						}}
					/>
					<span style={{ color: '#8A8A8A', fontSize: '22px', fontWeight: 500 }}>
						{footer}
					</span>
				</div>
			</div>
		),
		{ ...OG_SIZE }
	);
}
