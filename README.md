# GoAddress

GoAddress is a Next.js 14 marketing site for a UK postcode and address lookup API SaaS.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Environment Variables

None are required for this static landing site.

## Deployment

You can deploy with `vercel deploy` or use a Netlify drag-and-drop deployment.

## Folder Structure

```text
app/
	layout.tsx
	page.tsx
	globals.css
components/
	ui/
		Badge.tsx
		BackToTop.tsx
		Button.tsx
		CodeBlock.tsx
		SectionWrapper.tsx
	sections/
		Navbar.tsx
		Hero.tsx
		TrustedBy.tsx
		HowItWorks.tsx
		StatsBar.tsx
		Features.tsx
		CodeDemo.tsx
		Pricing.tsx
		Integrations.tsx
		Testimonials.tsx
		Enterprise.tsx
		CTABanner.tsx
		FAQ.tsx
		Footer.tsx
hooks/
	useScrollAnimation.ts
lib/
	constants.ts
public/
	assets/
	og-image.svg
```

## Notes

- A placeholder social preview image can be added later as `public/og-image.png` if needed for external sharing flows.
