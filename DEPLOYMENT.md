# 🚀 Deployment Guide for PredictX

This guide will help you deploy PredictX to production.

## 📦 Option 1: Deploy to Vercel (Recommended)

Vercel is the easiest and best option for Next.js applications.

### Step 1: Prepare Your Repository

1. Make sure all your code is committed and pushed to GitHub:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

### Step 2: Sign Up / Sign In to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Click **"Sign Up"** and choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account

### Step 3: Import Your Project

1. Click **"Add New Project"** or **"Import Project"**
2. Select your repository: `swarajladke/PredictX`
3. Click **"Import"**

### Step 4: Configure Project Settings

Vercel will auto-detect Next.js. Keep these settings:
- **Framework Preset**: Next.js
- **Root Directory**: `./`
- **Build Command**: `npm run build` (or `next build`)
- **Output Directory**: `.next` (default)
- **Install Command**: `npm install`

### Step 5: Add Environment Variables

**⚠️ IMPORTANT**: Add ALL these environment variables in Vercel's dashboard:

1. In the project settings, go to **"Environment Variables"**
2. Add each variable one by one:

```env
NODE_ENV=production
NEXT_PUBLIC_BASE_URL=https://your-app-name.vercel.app
NEXT_PUBLIC_NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_key
FINNHUB_BASE_URL=https://finnhub.io/api/v1
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=https://your-app-name.vercel.app
GEMINI_API_KEY=your_gemini_api_key
RESEND_API_KEY=your_resend_api_key
```

**Important Notes:**
- Replace `https://your-app-name.vercel.app` with your actual Vercel URL (you'll get this after first deployment)
- Make sure `NEXT_PUBLIC_BASE_URL` and `BETTER_AUTH_URL` match your production URL
- Select **"Production"**, **"Preview"**, and **"Development"** for each variable (or just Production if you prefer)

### Step 6: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (usually 2-3 minutes)
3. Once deployed, you'll get a URL like: `https://predictx-xyz.vercel.app`

### Step 7: Update Environment Variables (if needed)

After first deployment, if your URL changed:
1. Go to **Settings** → **Environment Variables**
2. Update `NEXT_PUBLIC_BASE_URL` and `BETTER_AUTH_URL` with your actual Vercel URL
3. Redeploy (Vercel will auto-redeploy on next push, or click "Redeploy")

---

## 🔄 Option 2: Deploy via Vercel CLI

If you prefer command line:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (from your project directory)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No (first time) or Yes (if exists)
# - Project name? PredictX
# - Directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

---

## 🔧 Setting Up Inngest (Background Jobs)

PredictX uses Inngest for background jobs (emails, AI summaries). You need to set this up separately:

### Step 1: Sign Up for Inngest

1. Go to [https://www.inngest.com](https://www.inngest.com)
2. Sign up for a free account
3. Create a new app

### Step 2: Get Your Inngest Credentials

1. In Inngest dashboard, go to **"Apps"** → **"Keys"**
2. Copy your **Signing Key** and **Event Key**

### Step 3: Add Inngest Environment Variables to Vercel

Add these to your Vercel environment variables:
```env
INNGEST_SIGNING_KEY=your_inngest_signing_key
INNGEST_EVENT_KEY=your_inngest_event_key
```

### Step 4: Deploy Inngest Functions

Inngest functions are deployed automatically when you deploy to Vercel (they're part of your Next.js API routes).

### Step 5: Configure Inngest Webhook

1. In Inngest dashboard, go to **"Apps"** → Your app → **"Sync"**
2. Add your Vercel URL: `https://your-app.vercel.app/api/inngest`
3. Save

---

## 🗄️ MongoDB Atlas Setup (Production)

### Step 1: Create Production Database

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (or use existing)
3. Go to **"Database Access"** → Create a database user
4. Go to **"Network Access"** → Add IP Address:
   - Click **"Add IP Address"**
   - Click **"Allow Access from Anywhere"** (or add Vercel's IP ranges)
   - Save

### Step 2: Get Connection String

1. Go to **"Database"** → **"Connect"**
2. Choose **"Connect your application"**
3. Copy the connection string
4. Replace `<password>` with your database user password
5. Add this to Vercel as `MONGODB_URI`

---

## ✅ Post-Deployment Checklist

After deployment, verify:

- [ ] App loads at your Vercel URL
- [ ] Sign up / Sign in works
- [ ] Dashboard displays correctly
- [ ] Stock data loads (check Finnhub API key)
- [ ] Database connection works (try creating a watchlist)
- [ ] Email sending works (test sign up email)
- [ ] Inngest functions are synced

---

## 🔍 Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Common issues:
   - Missing environment variables
   - TypeScript errors
   - Missing dependencies

### Environment Variables Not Working

1. Make sure variables are added for **"Production"** environment
2. Redeploy after adding new variables
3. Check variable names match exactly (case-sensitive)

### Database Connection Issues

1. Verify MongoDB Atlas allows connections from anywhere (or Vercel IPs)
2. Check connection string format
3. Verify database user credentials

### Inngest Not Working

1. Check Inngest dashboard for sync status
2. Verify webhook URL is correct
3. Check Inngest environment variables are set

---

## 🌐 Custom Domain (Optional)

1. In Vercel dashboard, go to **"Settings"** → **"Domains"**
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update `NEXT_PUBLIC_BASE_URL` and `BETTER_AUTH_URL` to your custom domain
5. Redeploy

---

## 📊 Monitoring & Analytics

- **Vercel Analytics**: Enable in Vercel dashboard for performance monitoring
- **Error Tracking**: Consider adding Sentry or similar
- **Logs**: View real-time logs in Vercel dashboard

---

## 🔄 Continuous Deployment

Vercel automatically deploys on every push to `main` branch:
1. Push to GitHub
2. Vercel detects changes
3. Builds and deploys automatically
4. You get a preview URL for each commit

---

## 💰 Cost Estimates

**Free Tier (Hobby Plan):**
- Vercel: Free (100GB bandwidth/month)
- MongoDB Atlas: Free (512MB storage)
- Inngest: Free (limited functions)
- Resend: Free (3,000 emails/month)
- Finnhub: Free tier available
- Gemini: Free tier available

**Total: $0/month** for small to medium usage!

---

## 🆘 Need Help?

- Vercel Docs: [https://vercel.com/docs](https://vercel.com/docs)
- Next.js Deployment: [https://nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- Inngest Docs: [https://www.inngest.com/docs](https://www.inngest.com/docs)

---

**Happy Deploying! 🚀**
