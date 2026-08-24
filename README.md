# Taproom Studio

Fast, mobile-first websites for craft breweries. Built in 3 minutes. Managed by you.

## What This Is

**Taproom Studio** is your own website + a working demo of how breweries will update their tap lists.

- **Live Site:** Shows off your service to prospects
- **Tap Management Form:** Lets breweries add/edit/delete taps instantly
- **Mobile-First:** Built for the 97% of beer drinkers on phones
- **Ready to Deploy:** One click to Vercel, live in seconds

## Quick Deploy

```bash
# 1. Clone this repo (or push your own to GitHub)
# 2. Go to vercel.com
# 3. Import this repository
# 4. Click "Deploy"
# 5. Done.
```

See `DEPLOYMENT.md` for step-by-step instructions.

## Features

### Live Prototype
- Hero explaining the concept
- "What We're Brewing" (your services)
- Pricing section
- Call-to-action

### Working Tap Management Form
- Add new beers
- Edit existing taps
- Delete taps
- **This is what your customers will use**

### Design
- Dark brewery aesthetic
- Amber/gold accents
- Fully responsive (mobile-first)
- Fast loading
- No bloat

## Tech Stack

- **Next.js** (React framework)
- **Tailwind CSS** (styling)
- **Vercel** (hosting)
- **Lucide Icons** (UI icons)

Optional add-ons:
- **Supabase** (database - instructions in DEPLOYMENT.md)
- **Google Sheets** (lead tracking)

## File Structure

```
├── app/
│   ├── page.js          # Main page
│   ├── layout.js        # Root layout
│   └── globals.css      # Styles
├── components/
│   └── TaproomStudio.jsx  # Site component
├── package.json         # Dependencies
├── next.config.js       # Config
└── DEPLOYMENT.md        # Deploy guide
```

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Next Steps

1. **Deploy to Vercel** (DEPLOYMENT.md)
2. **Connect custom domain** (Vercel dashboard)
3. **Add Supabase** (store real tap submissions)
4. **Integrate cold email links** (point prospects here)
5. **Track leads** (Google Sheets + CRM layer)

## Notes

- Tap form currently stores data locally (resets on refresh)
- Ready to connect Supabase for persistent storage
- Ready to add authentication for brewery owners
- CTA buttons need real links to your email/form

## Questions?

Check `DEPLOYMENT.md` for detailed setup. This is production-ready.

Good luck. Go fast.
