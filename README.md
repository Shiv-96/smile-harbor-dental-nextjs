# Smile Harbor Dental Care

A fast, accessible and SEO-friendly website for a fictional dental clinic in Koregaon Park, Pune.
Built with Next.js (static export) and Tailwind CSS v4, and deployed on Netlify with Netlify Forms.

> Sample website for demonstration purposes. The clinic, doctors, prices and contact details are fictional.

**Live demo:** https://smile-harbor-dental-care.netlify.app

## Screenshots

| Desktop | Mobile |
| --- | --- |
| ![Desktop screenshot](docs/screenshot-desktop.png) | ![Mobile screenshot](docs/screenshot-mobile.png) |

## Features

- **Sections:** hero with trust indicators, services with starting prices, doctor profiles,
  why choose us, patient stories, pricing table and insurers, FAQ, appointment form, hours,
  emergency strip, contact details and map.
- **Appointment form (Netlify Forms):** client-side validation with clear error messages,
  Indian mobile number check, Sunday time-slot rule, honeypot spam protection and a thank-you page.
  Works without JavaScript too, using native browser validation.
- **Accessibility:** semantic landmarks, skip link, visible focus styles, WCAG AA colour contrast,
  labelled form fields with `aria-invalid` and `aria-describedby`, and a WAI-ARIA accordion
  with Arrow, Home and End key support.
- **Mobile first:** responsive layout, accessible mobile menu (closes on Escape) and a floating
  click-to-call button.
- **SEO:** page titles, meta description, canonical URL, Open Graph and Twitter tags, schema.org
  `Dentist` structured data, `sitemap.xml`, `robots.txt` and an SVG favicon.
- **Performance:** fully static HTML, responsive images resized by the Unsplash CDN with lazy loading,
  self-hosted fonts, tree-shaken icons and a lazy-loaded map.
- **Motion:** smooth scrolling and subtle reveal animations, both disabled for visitors who prefer
  reduced motion.
- **Extras:** sticky header, click-to-call and click-to-map links, custom 404 page.

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, `output: "export"`) |
| UI | React 19 |
| Styling | Tailwind CSS v4 |
| Icons | lucide-react |
| Fonts | Manrope and Source Sans 3 (self-hosted via Fontsource) |
| Forms | Netlify Forms |
| Hosting | Netlify |

**Why a static Next.js export?** Every page is pre-rendered to plain HTML at build time, so search
engines see the full content, the site loads fast, and Netlify serves it as static files with no
server functions. React components keep the code organised and easy to reuse across projects.

## Getting started

Requirements: Node.js 20.9 or newer.

```powershell
git clone https://github.com/Shiv-96/smile-harbor-dental-nextjs.git
cd smile-harbor-dental-nextjs
npm install
npm run dev
```

Open http://localhost:3000.

To build and preview the production export:

```powershell
npm run build
npm run preview
```

The static site is written to the `out` folder.

> Form submissions only work on Netlify. Locally the form validates, but sending shows an error
> message because there is no Netlify form handler.

## Configuration

| Setting | Where | Notes |
| --- | --- | --- |
| Site URL for SEO tags | `NEXT_PUBLIC_SITE_URL` environment variable | Optional. On Netlify the site URL is detected automatically |
| Clinic name, phone, address, hours | `data/clinic.js` | |
| Services, doctors, prices, FAQ, photos | `data/content.js` | |
| Form options and time slots | `data/appointment.js` | Keep field names in sync with `public/__forms.html` |
| Colours and fonts | `app/globals.css` (`@theme`) | |

## Deploying to Netlify

1. Push the project to a GitHub repository.
2. In Netlify, choose **Add new site > Import an existing project** and select the repository.
3. Netlify reads `netlify.toml`, so the settings are filled in automatically:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Optional: the site URL for SEO tags is read from Netlify automatically. If you add a custom
   domain, set `NEXT_PUBLIC_SITE_URL` under **Site configuration > Environment variables**.
5. Under **Forms**, enable form detection, then trigger a new deploy.
6. After the deploy, the `appointment` form appears in the Forms tab. Send a test submission.

### How the form works with Netlify

Netlify detects forms by scanning HTML at deploy time. The file `public/__forms.html` contains a hidden
copy of the appointment form with `data-netlify="true"` and `netlify-honeypot="bot-field"`.
The React form posts its data to `/__forms.html` with `fetch`, then redirects to `/thank-you/`.
No `_redirects` file is needed: Netlify serves `404.html` automatically for unknown URLs.

## Project structure

```
smile-harbor-dental-nextjs/
├── app/
│   ├── globals.css           # Tailwind import, design tokens, base styles
│   ├── icon.svg              # Favicon
│   ├── layout.js             # Root layout, fonts, metadata, page shell
│   ├── not-found.js          # 404 page
│   ├── page.js               # Home page and structured data
│   ├── robots.js             # robots.txt
│   ├── sitemap.js            # sitemap.xml
│   └── thank-you/page.js     # Form success page
├── components/
│   ├── forms/AppointmentForm.jsx
│   ├── layout/               # Header, Footer, FloatingCallButton
│   ├── sections/             # One component per home page section
│   └── ui/                   # Logo, SectionHeading, ToothIcon, RevealOnScroll
├── data/                     # Clinic details, page content, form options
├── lib/                      # Image loader, formatting helpers, shared button styles
├── public/__forms.html       # Static form definition for Netlify
├── netlify.toml
├── next.config.mjs
└── package.json
```

## Image credits

All photos are from [Unsplash](https://unsplash.com) and used under the
[Unsplash License](https://unsplash.com/license). People shown are models, not the fictional doctors.

| Used for | Photographer |
| --- | --- |
| Hero, treatment room | [Benyamin Bohlouli](https://unsplash.com/@benyamin_bohlouli) |
| Why choose us, blue dental chair | [Ozkan Guner](https://unsplash.com/@dentistozkanguner) |
| Doctor portrait (Dr. Ananya Rao) | [Vitaly Gariev](https://unsplash.com/@silverkblack) |
| Doctor portrait (Dr. Vikram Mehta) | [Caroline LM](https://unsplash.com/@carocaro1987) |
| Doctor portrait (Dr. Priya Nair) | [Alexandr Podvalny](https://unsplash.com/@freestockpro) |

## License

MIT. Created by Shiv Kumar as a portfolio project.
