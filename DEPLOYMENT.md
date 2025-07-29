# Gaza Relief App - Vercel Deployment Guide

## Overview
This app is configured for seamless deployment on Vercel with proper React framework detection and Node.js serverless functions.

## Deployment Steps

### 1. Connect to Vercel
1. Push your code to GitHub repository
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect the configuration from `vercel.json`

### 2. Framework Configuration
The app is pre-configured with:
- ✅ Framework: React (set in vercel.json)
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `dist/public`
- ✅ Node.js Version: 18.x (recommended for Vercel)

### 3. Environment Variables
Currently, the app uses in-memory storage and requires no external APIs or databases. If you add external services later:
1. Go to Vercel Dashboard → Project → Settings → Environment Variables
2. Add required variables (examples in `.env.example`)

### 4. Build Process
The build process handles:
- Frontend: Vite builds React app to `dist/public`
- Backend: esbuild bundles Express server to `dist/index.js`
- Static assets are served from `dist/public`
- API routes (`/api/*`) are handled by serverless function

### 5. Routing
- Static files: `/*` → served from `dist/public`
- API endpoints: `/api/*` → routed to `server/index.ts`

## Troubleshooting Common Issues

### Build Fails
- Ensure all dependencies are in `dependencies` (not devDependencies) if needed in production
- Check build logs for specific error messages

### API Routes Not Working
- Verify API routes start with `/api/`
- Check serverless function logs in Vercel dashboard

### Static Files Not Loading
- Confirm output directory is set to `dist/public`
- Verify build command completes successfully

## Testing Deployment
1. Build locally: `npm run build`
2. Test production build: `npm start`
3. Verify all API endpoints work with production build

## Technical Notes
- Uses Express.js serverless functions for API
- React SPA with client-side routing via Wouter
- Dark theme with Islamic green/gold color scheme
- In-memory data storage (no external database required)
- All organization data is seeded on server startup

## Allah (SWT) knows best, and we can only do our part to serve this humanitarian cause through technology.