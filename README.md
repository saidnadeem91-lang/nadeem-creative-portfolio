# NadeemCreative Portfolio

> Ultra luxury cinematic bilingual portfolio for **Nadeem Hussein** — Social Media Specialist, Media Buyer, Photographer & Visual Storyteller based in Dubai, UAE.

---

## ✨ Features

- 🎬 **Cinematic Loading Screen** with progress bar
- 🌐 **Fully Bilingual** — English / عربي with RTL support
- 🖱️ **Custom Cursor** (desktop)
- ✨ **Floating Particles** background
- 📱 **Fully Responsive** — mobile-first
- 🎯 **Scroll-triggered animations** on every section
- ⚡ **13 sections**: Hero · About · Timeline · Skills · Services · Portfolio · Before/After · Brands · Stats · Testimonials · Instagram · WhatsApp CTA · Contact
- 💛 **Glassmorphism** cards & luxury gold/blue palette
- 🔢 **Animated counters** in the Achievements section
- 🖼️ **Before / After slider** (drag to reveal)
- 💬 **Floating WhatsApp button** (RTL-aware)

---

## 🗂️ Project Structure

```
nadeem-creative-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── BeforeAfter.jsx
│   │   ├── Brands.jsx
│   │   ├── Contact.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Instagram.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Navbar.jsx
│   │   ├── Particles.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Services.jsx
│   │   ├── Skills.jsx
│   │   ├── Stats.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Timeline.jsx
│   │   └── WhatsAppCTA.jsx
│   ├── data/
│   │   └── content.js       ← All bilingual text
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── vercel.json
└── .gitignore
```

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 🏗️ Build for Production

```bash
npm run build
# Output → /dist
```

---

## 🔷 Deploy to Vercel

### Option A — Vercel CLI (recommended)

```bash
npm install -g vercel
vercel          # follow prompts
```

### Option B — GitHub Integration

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel auto-detects Vite — click **Deploy**
5. ✅ Done — live in ~60 seconds

> `vercel.json` is already configured with SPA rewrites and cache headers.

---

## 📦 Deploy to GitHub Pages (alternative)

```bash
npm run build
# Then push /dist to gh-pages branch
```

---

## 🎨 Customisation

### Change text / translations
Edit **`src/data/content.js`** — all English & Arabic strings live here.

### Add real portfolio images
Replace the emoji placeholders in `src/components/Portfolio.jsx`:
```jsx
// Replace this:
<span className="text-6xl">{item.emoji}</span>

// With:
<img src={item.image} alt={item.title} className="w-full h-full object-cover" />
```
Add `image: '/portfolio/project1.jpg'` fields to each item in `content.js`.

### Contact form integration
In `src/components/Contact.jsx`, replace the `handleSubmit` stub with:
- **EmailJS**: free, client-side email
- **Resend**: `https://resend.com`
- **Formspree**: `https://formspree.io`

### Domain setup on Vercel
1. Vercel Dashboard → Project → Settings → Domains
2. Add `nadeemcreative.com`
3. Follow DNS instructions

---

## 🛠️ Tech Stack

| Tool | Version |
|---|---|
| React | 18 |
| Vite | 5 |
| Tailwind CSS | 3 |
| Lucide React | latest |

---

## 📬 Contact

| | |
|---|---|
| Email | nh2247181@gmail.com |
| WhatsApp | +971 58 277 4519 |
| Instagram | [@nadim.creates](https://instagram.com/nadim.creates) |
| Photography | [@nadem.ph](https://instagram.com/nadem.ph) |

---

© 2024 NadeemCreative · Nadeem Hussein · All rights reserved
