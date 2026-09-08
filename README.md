# Taara Toori Technologies — website

React + Vite + Tailwind CSS rebuild of the Taara Toori site, using the real
copy from the source Figma/PDF (index, products & services, events,
employees + employee detail, samples).

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # serve the built output locally
```

The build output lands in `dist/` — deploy that folder to any static host
(Vercel, Netlify, Cloudflare Pages, S3, etc.).

## Structure

- `src/data/content.js` — all site copy in one place, taken directly from
  the source PDF. Edit this file to change any text on the site.
- `src/pages/` — one file per page (Home, Products, Events, Employees,
  EmployeeDetail, Samples).
- `src/components/` — shared nav, footer, the numbered "panel rail" header
  used on every interior page, and the orbit-ring / time-ring SVG motifs.
- `tailwind.config.js` — the color and font tokens (`ink`, `panel`, `rule`,
  `gold`, `teal`, `paper`, `muted`; `font-display` = Fraunces, default sans
  = Sora).

## Note on the employee roster

The source design references "27 team members" and a searchable roster
with time-management rings, but no real employee data was included in the
supplied files. `src/data/content.js` ships with six representative
placeholder employees (consistent with the source file's own "Placeholder
content — internal draft build" notice) so the roster, search/filter, and
detail-page pattern are all fully working — swap in real names/roles/
achievements whenever you have them.
