# M&B Rentals

Marketing website for M&B Rentals — fluid logistics, roll off dumpster rentals, portable
toilets, restroom trailers, and septic services across West Texas.

Built with **React + TypeScript + Vite**, backed by **Firebase** (Firestore for quote
requests, Google Analytics, and Firebase Hosting).

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
```

## Production build

```bash
npm run build      # outputs static site to dist/
npm run preview    # serve the production build locally
```

## Deploying to Firebase Hosting

One-time setup (requires the [Firebase CLI](https://firebase.google.com/docs/cli)):

```bash
npm install -g firebase-tools
firebase login
```

Then deploy (builds first, then pushes hosting + Firestore rules):

```bash
npm run deploy
```

The site is served from Firebase Hosting's global CDN, so it comfortably handles
thousands of concurrent visitors — static assets are cached at the edge and the only
dynamic operation (quote form submission) writes directly to Firestore, which scales
automatically.

## Project structure

```
src/
  components/   Header, Footer, CTA banner, icons
  data/         Company info, services, locations, testimonials
  pages/        Home, About, service pages, location pages, contact
  firebase.ts   Firebase app, Analytics, Firestore quote submission
firestore.rules Create-only access for quote requests
firebase.json   Hosting + Firestore deploy config
```

## Quote requests

The **Get a Quote** form (`/contact`) validates Name, Email, and Phone, then writes to
the `quoteRequests` collection in Firestore. View submissions in the
[Firebase console](https://console.firebase.google.com/project/san-angelo-waste-management/firestore).

Security rules allow visitors to *create* quote requests only — nobody can read,
modify, or delete them from the public site.

## Placeholder content

Phone numbers, the street address, email, testimonials, and service-area copy are
filler — replace them in `src/data/site.ts` when the real business details are ready.
