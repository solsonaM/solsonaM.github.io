# Angelo Solsona — Portfolio

Single-page developer portfolio for [Angelo Solsona](https://github.com/solsonaM).

**Live site:** https://solsonaM.github.io

## Structure

```text
.
├── index.html      # Entire site (one page)
├── css/styles.css
├── js/main.js
├── assets/         # Optional photo / favicon
└── README.md
```

No build step. Plain HTML, CSS, and JavaScript.

## Local preview

Open `index.html` in a browser, or from this folder:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy on GitHub Pages

This repo is named `solsonaM.github.io` so GitHub serves it as a user site from the default branch.

1. Push to `main` on https://github.com/solsonaM/solsonaM.github.io
2. Settings → Pages → Source: **Deploy from a branch** → `main` / `/ (root)`
3. After a minute, open https://solsonaM.github.io

## Customize

| Item | Where |
|------|--------|
| Email | Already set to `angelosolsona.work@gmail.com` |
| LinkedIn | `#contact` placeholder in `index.html` |
| COO impact bullets | Leadership section in `index.html` |
| Photo | Add under `assets/` and link from hero if desired |
| Theme default | `data-theme` on `<html>` + `localStorage` key `theme` |

## Privacy

- Private projects appear only as high-level blurbs (no file names, code, or internals).
- No API keys or secrets in this repo.
