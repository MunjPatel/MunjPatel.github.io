# Munj Patel — Portfolio Website

A responsive, multi-page portfolio website showcasing quantitative research, valuation projects, and Medium articles.

## Structure

- **index.html** — Home with hero, education, experience, projects by focus area, and articles
- **projects/** — Detail pages for apps (live demo + code) and valuation projects (Google Drive links)
- **css/style.css** — Dark theme, timeline layout, category blocks, responsive
- **js/main.js** — Navigation, smooth scroll, card interactions
- **assets/images/** — Project screenshots and GIFs

## Sections

- **Education** — NYU Tandon, VIT, Gujarat University
- **Experience** — AppAvengers, Freelance, iamneo.ai (data/analytics foundations)
- **Projects** — Organized by: Risk, Portfolio, Derivatives, Fixed Income, NLP, Time Series
- **Valuation Course** — Basket Options, CDO, Merton, SPX Options, Yield Curve (Google Drive)
- **Medium Articles** — 7 articles on SDEs, VaR, portfolio optimization, statistical inference, etc.

## Local Development

1. Open `index.html` in a browser, or
2. Use a local server: `python -m http.server 8000` then visit http://localhost:8000

## Deployment

Static HTML/CSS/JS. Deploy to GitHub Pages, Netlify, or Vercel.

## Deployment

See **[DEPLOYMENT.md](DEPLOYMENT.md)** for step-by-step instructions to host on GitHub Pages.

## Customization

- **Hide Experience** — Remove or comment out the `#experience` section in `index.html` if not needed
- **Valuation project titles** — Update `projects/valuation-additional.html` if the 6th Drive folder has a specific name
- **GitHub links** — Edit `projects/*.html` if repo URLs differ
- **Skills rotation** — Edit the `skills` array in `js/main.js` to change rotating skill sets
