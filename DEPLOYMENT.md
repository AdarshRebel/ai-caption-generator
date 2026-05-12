# Deployment Guide

## Deploy on Vercel (Recommended)

1. Go to [Vercel.com](https://vercel.com)
2. Sign up or login with GitHub
3. Click **"New Project"**
4. Select **AdarshRebel/ai-caption-generator**
5. Vercel will auto-detect it's a Next.js app
6. **Environment Variables**: Add `GROQ_API_KEY`
   - Get your key from [https://console.groq.com/keys](https://console.groq.com/keys)
7. Click **Deploy** ✅

Your app will be live at: `https://your-project.vercel.app`

## Deploy on Netlify

1. Go to [Netlify.com](https://netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect GitHub and select this repo
4. Add environment variable `GROQ_API_KEY`
5. Deploy

## Deploy on Railway

1. Go to [Railway.app](https://railway.app)
2. Click **"New Project"** → **"Deploy from GitHub"**
3. Select this repo
4. Add `GROQ_API_KEY` environment variable
5. Deploy
