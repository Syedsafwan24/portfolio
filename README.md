# Syed Safwan Portfolio

Portfolio and local search hub for Syed Safwan Pirzade — full stack developer in
Bhatkal, Karnataka. Built with Next.js and exported as a fully static site.

Beyond the portfolio itself, the site targets local commercial search: service
pages, location hubs, case studies and an FAQ hub written for both search
engines and AI answer engines.

## Live Site

- https://syedsafwan.dev

## Tech Stack

- Next.js 16 (App Router, `output: 'export'`)
- React 19 + TypeScript
- Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`)
- Framer Motion

## Architecture

Page content lives in typed modules under `src/content/`. Each route is a thin
shell that pairs one content doc with one shared server template, so copy edits
never touch JSX:

```tsx
// src/app/services/erp-software/page.tsx
const doc = SERVICES['erp-software'];
export const metadata = buildMetadata({ path: doc.path, ...doc.seo });
export default function Page() { return <ServicePage doc={doc} />; }
```

```
src/
  content/          Typed page content + the route registry
    types.ts        Interfaces and slug unions
    services.ts     6 service pages
    locations.ts    6 location hubs
    caseStudies.ts  5 case studies
    answers.ts      FAQ hub content
    registry.ts     ROUTES — the single enumeration
  lib/
    site.ts         Single source of truth: domain, name, NAP, socials
    metadata.ts     buildMetadata() — every route's <head>
    schema/         Composable JSON-LD builders
    og/             Shared OG image factory
  components/
    ui/             Server components, zero client JS
    templates/      Server page templates
    animation/      Client-side motion helpers
```

`src/content/registry.ts` is the single enumeration of every indexable route.
The sitemap, footer link mesh and hub pages all read from it, so adding a doc to
a content module propagates everywhere at once.

### Conventions worth knowing before editing

- **Every route declares metadata through `buildMetadata()`.** Next merges
  metadata shallowly, so a page that omits `alternates` would inherit a
  canonical from the root layout and self-canonicalise to `/` — dropping itself
  from the index. `buildMetadata` always sets it.
- **The root layout deliberately sets no `openGraph.images`.** That key is
  inherited by every child route and would suppress each route's own
  `opengraph-image.tsx`.
- **Templates and `components/ui/` carry no `'use client'`.** Page copy must be
  present and visible in the static HTML — extractors that don't run JavaScript
  are a target audience here.
- **Reveal animations translate, never fade.** An `opacity: 0` initial state is
  serialised into the prerendered markup, and a scroll-driven animation holds
  whatever value its range maps to. Both put readable text at risk.
- **`Path` is typed `` `/${string}/` ``** so a missing trailing slash is a
  compile error rather than a redirect hop on every internal link.
- **Colours come only from the `--theme-*` custom properties** in
  `globals.css`, so light and dark both keep working.

## Local Development

```bash
npm install
cp .env.example .env.local   # optional; see Configuration
npm run dev                  # http://localhost:3000
```

## Production Build

```bash
npm run build   # emits ./out
npx serve out   # trailingSlash: true → out/<path>/index.html
```

## Configuration

All configuration is `NEXT_PUBLIC_*`, so values end up in the static HTML. That
is correct for these four — a GA measurement ID and verification tokens are
public by design. Never put a real secret behind a `NEXT_PUBLIC_` name.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin. Drives every canonical, OG tag, sitemap entry and schema `@id`. Defaults to `https://syedsafwan.dev`. |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID. Unset → no analytics script is emitted. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console HTML-tag token. Unnecessary if verifying by DNS TXT. |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Bing Webmaster Tools token. |

Locally these go in `.env.local`. For the live build they are set as GitHub
repository **Variables** (Settings → Secrets and variables → Actions →
Variables) and passed through by the build workflow. Each feature omits itself
entirely when its value is unset, so no placeholder ever ships.

## Deployment

Pushes to `main` build and deploy to GitHub Pages via
[.github/workflows/nextjs.yml](.github/workflows/nextjs.yml).

`public/CNAME` is committed on purpose and must stay. Actions-based deploys
upload a fresh `out/` each run; if it lacks a `CNAME`, GitHub silently unsets
the custom domain and the apex starts 404ing minutes after every push.

Full steps: [DEPLOY_GITHUB_PAGES.md](DEPLOY_GITHUB_PAGES.md)

## SEO Checks

Worth re-running after content changes:

```bash
npm run build

# Canonicals: unique, absolute, trailing-slashed. Any page pointing at "/"
# means the layout inheritance trap bit.
grep -rhoE 'rel="canonical" href="[^"]+"' out --include=index.html | sort | uniq -d

# No prose should ship hidden from non-JS extractors.
grep -rl 'opacity:0' out --include=index.html

# Sitemap must be byte-stable across two builds — lastModified comes from each
# doc's `updated` date, not build time, so a diff means real content changed.
```

Also worth doing by hand: Google's Rich Results Test on one page of each type
(service, location, case study, FAQ, home), and Lighthouse mobile on `/` plus
one content page.

## Author

Syed Safwan Pirzade — Bhatkal, Karnataka
[syedsafwan.dev](https://syedsafwan.dev) ·
[GitHub](https://github.com/Syedsafwan24) ·
[LinkedIn](https://linkedin.com/in/syedsafwanpirzade)
