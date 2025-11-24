# wesley-developer-portfolio

Static portfolio site for wesleywright.dev. Built with vanilla HTML/CSS/JS (no build step) so it can be served anywhere, including Render's static hosting.

## Quick start
- Open `index.html` in a browser to preview locally.
- Or serve the folder: `npx serve .` then visit the printed URL.
- Deploy the root directory as a static site (no build command needed).

## Editing content
- Projects, skills, work history, and education live in `assets/main.js`. Update the arrays (`projects`, `skills`, `workHistory`, `education`, `profile`) with your real data and links.
- The "Live site" buttons are disabled when `live` is `null`. Add a URL to enable them.
- Modal screenshots can use local assets or hosted URLs.

## Structure
- `index.html` – sections for Home, Projects (with modal), About, Skills, Work, and Contact.
- `assets/styles.css` – layout, typography, and theme variables.
- `assets/main.js` – data-driven rendering and interactions (nav highlighting, modal, contact-form message).

## Deployment on Render
- Create a new Static Site on Render.
- Set the publish directory to the repo root.
- Leave "Build Command" empty; set "Publish Directory" to `.`.

## Notes
- Google Fonts are pulled from the CDN; remove the links in `index.html` if you prefer self-hosting.
- Replace placeholder GitHub and demo URLs with the real repositories and live links when they're ready.
