# Cambridge Tango Labs — Version 4

This is a static HTML website ready for GitHub Pages or Cloudflare Pages.

## Structure

- `index.html` — Home, with Sunday Practica link
- `about-us.html` — About Us, photos, and **Private and Small Group Classes**
- `why-tango.html` — Why Tango?
- `practica.html` — Ayna's five-section Sunday Practica description
- `other-events.html` — Friday milongas, local event/learning links, 2023 Festivalito archive
- `festivalito-2023.html` — historical event details
- `classes.html` — redirect for old internal bookmarks (no longer a navigation tab)

All navigation uses explicit `.html` files, which work when opened locally.

## Images

Add your own three local image files inside `assets/`:

- `radusylwiasummervibes.jpg`
- `radusylwiaporec` (with or without a common image extension)
- `tangolabsbackground` (with or without a common image extension)

`site.js` looks for these asset basenames and tries common image extensions.
The images are **not** included here, because they weren't attached in this chat.

## Date note

The most recent Friday milonga date supplied by Ayna was **2 October 2026**.
Because that date has already passed, the site labels this as a previously
advertised event. Replace that event card with the next confirmed event when
its details are available; avoid labelling it as an upcoming event.

The Sunday Practica copy includes the new first-and-third-Sunday schedule,
2–6pm, with instructions to confirm actual dates on Facebook.

## Publishing

Put the *contents* of this folder in the root of your GitHub Pages repository.
No build step or server-side software is required. Hyperlinks to external sites
are ordinary URLs; links between site pages use relative `.html` paths.
