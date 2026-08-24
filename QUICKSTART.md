# Taproom Studio - Quick Start

## What You Got

A complete, production-ready React website for Taproom Studio with:
- ✅ Full landing page (hero, services, pricing, CTA)
- ✅ Working tap management form (add/edit/delete taps)
- ✅ Mobile-first responsive design
- ✅ Brewery aesthetic (dark + amber)
- ✅ Ready to deploy

## Get It Live (3 Steps)

### 1. Create GitHub Repo
```bash
cd /home/claude
git init
git add .
git commit -m "Taproom Studio v1"
git remote add origin https://github.com/YOUR_USERNAME/taproom-studio.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel
- Go to vercel.com
- Click "New Project"
- Select your GitHub repo
- Click "Deploy"
- **Wait 60 seconds. You're live.**

### 3. Share the Link
Your site is now at: `https://taproom-studio.vercel.app`

(Or custom domain via Vercel settings)

---

## What Happens Next

### Immediate (This Week)
1. Test the tap form
2. Customize pricing & copy
3. Add your email to CTA buttons
4. Share link in cold emails

### Soon (Next Week)
1. Connect Supabase (optional but recommended)
2. Set up Google Sheets lead tracking
3. Connect form submissions → Sheets

### Later (Scaling)
1. Add brewery authentication
2. Real database for breweries
3. Automation pipeline

---

## File Locations

Everything is in `/home/claude/`:
- `app/` = pages & layout
- `components/` = React components
- `package.json` = dependencies
- `DEPLOYMENT.md` = detailed setup
- `README.md` = project overview

---

## Customize Before Deploying

### Change Pricing
Edit `components/TaproomStudio.jsx`, find:
```javascript
<span className="text-5xl font-bold text-amber-400">$X</span>
<span className="text-slate-300 text-lg"> + $X/month</span>
```

### Change CTA Email/Link
Find all `Request Prototype` buttons and add your email/form URL

### Change Branding
- Search `Taproom Studio` for site name
- Search `amber-500` for color theme
- Search `🍺` for emoji

---

## Local Testing (Optional)

```bash
cd /home/claude
npm install
npm run dev
```

Then visit `http://localhost:3000`

---

## Deployment Status

- **Code:** ✅ Ready
- **Hosting:** Vercel (free tier works)
- **Database:** Optional (Supabase ready)
- **Domain:** Custom domain via Vercel

---

## Next: Supabase Setup (Optional)

If you want to save tap submissions permanently:

1. Create Supabase account (supabase.com)
2. Create table for submissions
3. Add Supabase keys to Vercel env vars
4. Update component to use Supabase client

(Instructions in DEPLOYMENT.md)

---

**You're ready to deploy. Do it now.**
