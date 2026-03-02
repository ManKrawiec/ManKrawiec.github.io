# ManKrawiec.github.io

Personal portfolio and community hub for **ManKrawiec**.
The website is focused on gaming + creator content, with a custom visual style and zero frameworks.

## Live Website
- GitHub Pages: <https://mankrawiec.github.io/>

## What This Project Includes
- Responsive multi-page portfolio (`Home`, `About`, `Content`, `Community`)
- Custom animated UI (gradient background, reveal animations, hover interactions)
- Gaming/content sections with image cards and project highlights
- Social/community links (Twitch, Discord, GitHub)
- Image error fallback in JavaScript (broken image -> generated SVG placeholder)

## Tech Stack
- `HTML5`
- `CSS3` (custom styling and animations)
- `Vanilla JavaScript`
- `GitHub Pages` for hosting

## Project Structure
```text
.
├── index.html        # Home page
├── about.html        # About page
├── content.html      # Games/content/projects
├── contact.html      # Community / social links
├── style.css         # Global styles + responsive layout
├── stript.js         # Scroll reveal, sticky header state, image fallback
└── img/              # Local images used across pages
```

## Run Locally
```bash
git clone https://github.com/ManKrawiec/ManKrawiec.github.io.git
cd ManKrawiec.github.io
```
Then open `index.html` in your browser.

## Customization Notes
- Update texts directly in `*.html` files.
- Global design tokens and sections are in `style.css`.
- Frontend interactions are in `stript.js`.
- To replace visuals, drop new assets into `img/` and update `src` paths in HTML.

## Recent Improvements
- Better visual polish (typography, hover motion, background depth)
- Performance/UX image attributes (`loading`, `decoding`, `fetchpriority`)
- Safer external links (`rel="noopener noreferrer"`)
- Placeholder class consistency fix (`maxis`)
- Fallback image renderer in JS for unavailable images

## Roadmap
- Add dedicated projects page with filters
- Add stream schedule section
- Add Polish + English language switch
- Add simple contact form (static form endpoint)

## Author
- GitHub: <https://github.com/ManKrawiec>
- Twitch: <https://www.twitch.tv/mankrawiec>
- Discord: <https://discord.gg/8MzyPqCg6n>

## License
This repository currently has no explicit license file.
If you want, I can add a license (`MIT` is the common default) in a next commit.
