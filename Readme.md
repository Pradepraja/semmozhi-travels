# Semmozhi Tours & Travels

Force Urbania luxury van rental service web application built with **React 19**, **Vite**, **TypeScript**, **Tailwind CSS v4**, and **Watermelon UI** component architecture.

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build
```

---

## 🌐 Deploying to Vercel with GitHub

### Option 1: Automatic GitHub Integration (Recommended)

1. Push this repository to **GitHub**:
   ```bash
   git add .
   git commit -m "Rebuild with React, Vite, Tailwind CSS and Watermelon UI"
   git push origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your GitHub repository (`semmozhi-travels`).
4. Vercel will automatically detect **Vite** with the included [`vercel.json`](vercel.json):
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

Every push to `main` will automatically trigger a new production deployment.

---

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login and deploy
vercel
```
