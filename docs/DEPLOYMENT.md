# 🚀 Deployment Guide

This guide covers deploying your portfolio to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, make sure you have:

- [ ] Updated all content in `src/data/` files
- [ ] Replaced placeholder images with real ones
- [ ] Updated `seoData` in `profile.js`
- [ ] Updated meta tags in `index.html`
- [ ] Added your `og-image.jpg` (1200x630px)
- [ ] Added your resume PDF
- [ ] Tested locally with `npm run build && npm run preview`

## 🔧 Build Your Site

```bash
# Create production build
npm run build

# Preview the build locally
npm run preview
```

The build output is in the `dist/` folder.

---

## 🐙 GitHub Pages (Recommended)

### Method 1: GitHub Actions (Automatic)

1. **Create workflow file**: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"

3. **Push to main branch** - deployment happens automatically!

### Method 2: gh-pages Branch

1. **Install gh-pages**:
```bash
npm install -D gh-pages
```

2. **Add deploy script** to `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. **Deploy**:
```bash
npm run deploy
```

4. **Configure GitHub Pages**:
   - Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages` / `root`

### Custom Domain (Optional)

1. Add a `CNAME` file in `public/` folder:
```
yourdomain.com
```

2. Configure DNS:
   - Add A records pointing to GitHub's IPs
   - Or add CNAME record for `www`

---

## ▲ Vercel

### Automatic Deployment

1. **Import project**: [vercel.com/import](https://vercel.com/import)
2. **Connect GitHub repo**
3. **Configure**:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Deploy** - automatic on every push!

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## 🔷 Netlify

### Automatic Deployment

1. **Import project**: [app.netlify.com](https://app.netlify.com)
2. **Connect GitHub repo**
3. **Configure**:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Deploy**

### Manual Deployment

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### Drag & Drop

1. Run `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist` folder

---

## ☁️ Cloudflare Pages

1. **Connect repository**: [dash.cloudflare.com](https://dash.cloudflare.com)
2. **Create project** → Pages → Connect to Git
3. **Configure**:
   - Build command: `npm run build`
   - Build output: `dist`
4. **Deploy**

---

## 🌐 Custom Server (VPS)

### Using Nginx

1. **Build locally**:
```bash
npm run build
```

2. **Upload `dist/` folder** to your server

3. **Nginx configuration**:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/portfolio/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

4. **SSL with Certbot**:
```bash
sudo certbot --nginx -d yourdomain.com
```

---

## 🔄 Client-Side Routing Fix

For single-page apps, you need to handle client-side routing:

### Netlify

Create `public/_redirects`:
```
/*    /index.html   200
```

### Vercel

Create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Apache

Create `public/.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🔍 Post-Deployment Checklist

After deploying:

- [ ] Test all pages load correctly
- [ ] Check images are displaying
- [ ] Test navigation links
- [ ] Verify resume download works
- [ ] Check social sharing (Open Graph)
- [ ] Test mobile responsiveness
- [ ] Verify SEO meta tags (use browser dev tools)
- [ ] Submit sitemap to Google Search Console

## 🐛 Common Issues

### Images Not Loading

- Check paths start with `/` (e.g., `/images/avatar.jpg`)
- Ensure images are in `public/` folder
- Verify case sensitivity (Linux servers are case-sensitive)

### 404 on Page Refresh

- Implement client-side routing fix (see above)
- Check your hosting platform's SPA configuration

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### GitHub Actions Permissions

If deployment fails with permission errors:
1. Settings → Actions → General
2. Workflow permissions → "Read and write permissions"

---

## 📊 Performance Optimization

### Lighthouse Score

Aim for 90+ on all metrics:
- Performance
- Accessibility
- Best Practices
- SEO

### Tips

1. **Compress images**: Use TinyPNG or Squoosh
2. **Use WebP format**: Better compression than JPG/PNG
3. **Lazy load images**: Already implemented in components
4. **Minimize bundle**: Vite handles this automatically

---

Next: [🎨 Customization Guide](./CUSTOMIZATION.md)
