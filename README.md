# Edify Elite — Next.js Website

A complete Next.js 15 clone of [edifyelite.com.pk](https://edifyelite.com.pk) with data from [edify.pk](https://edify.pk).

## 🚀 Deploy to Vercel (via Git)

### Step 1 — Push to GitHub
```bash
cd edify-elite
git init
git add .
git commit -m "Initial commit — Edify Elite website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/edify-elite.git
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repo `edify-elite`
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy** — done! ✅

---

## 🏗 Tech Stack
- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Lucide React** icons
- Fully static export (no database needed)

## 📁 Project Structure
```
src/
├── app/
│   ├── page.tsx                    ← Homepage
│   ├── about-us/page.tsx           ← About Us
│   ├── contact-us/page.tsx         ← Contact Us
│   ├── apply/page.tsx              ← Apply Online (multi-step form)
│   ├── blog/
│   │   ├── page.tsx                ← Blog listing
│   │   └── [slug]/page.tsx         ← Individual blog posts
│   ├── services/
│   │   ├── page.tsx                ← Services overview
│   │   ├── sat-preparation/        ← SAT Prep page
│   │   ├── common-app/             ← Common App page
│   │   ├── profile-building/       ← Profile Building page
│   │   └── ivy-universities/       ← IVY Universities page
│   ├── fwwmun/page.tsx             ← FWWMUN page
│   └── hmun/page.tsx               ← HMUN page
├── components/
│   ├── Navbar.tsx                  ← Sticky responsive navbar
│   ├── Footer.tsx                  ← Footer with links & socials
│   └── HoverCard.tsx               ← Reusable hover card component
└── app/globals.css                 ← Global styles & animations
```

## 🎨 Design System
- **Primary Gold:** `#C9A84C`
- **Gold Light:** `#E2C97E`
- **Dark Background:** `#0A0A0F`
- **Font Display:** Playfair Display (serif)
- **Font Body:** DM Sans

## 📦 Local Development
```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Production build
```

## 📄 Pages
| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, stats, services, blog, videos |
| `/about-us` | About Edify Elite, Why Choose Us |
| `/contact-us` | Contact form + Google Maps |
| `/apply` | 3-step application form |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog posts (6 articles) |
| `/services` | All services overview |
| `/services/sat-preparation` | SAT prep detail |
| `/services/common-app` | Common App detail |
| `/services/profile-building` | Profile building detail |
| `/services/ivy-universities` | IVY League detail |
| `/fwwmun` | FWWMUN page |
| `/hmun` | HMUN page |
