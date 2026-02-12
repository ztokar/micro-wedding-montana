# Deploying Montana Micro Weddings to Vercel

## Quick Deploy (Recommended)

### Method 1: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from project directory
cd micro-wedding-montana
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - What's your project's name? micro-wedding-montana
# - In which directory is your code located? ./
# - Want to override settings? N

# For production deployment:
vercel --prod
```

### Method 2: GitHub + Vercel Dashboard

1. **Push to GitHub**:
   ```bash
   cd micro-wedding-montana
   git init
   git add .
   git commit -m "Initial commit: Montana Micro Weddings landing page"
   git branch -M main
   git remote add origin https://github.com/yourusername/micro-wedding-montana.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Done! 🎉

### Method 3: Manual Upload

```bash
# Build the site
npm run build

# Go to vercel.com dashboard
# Create new project
# Upload the 'out' folder
```

## Custom Domain Setup

After deployment, add your custom domain:

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add `microweddingmontana.com`
4. Follow DNS configuration instructions from Vercel
5. Update your domain's DNS records:
   - For apex domain: Add A record pointing to Vercel's IP
   - For www: Add CNAME record pointing to `cname.vercel-dns.com`

## Environment Variables (Optional)

If you add backend integrations (email, CMS, etc.), set environment variables:

1. Go to Project Settings > Environment Variables
2. Add your variables (e.g., `SENDGRID_API_KEY`)
3. Redeploy for changes to take effect

## Post-Deployment Checklist

- [ ] Test the live site on mobile and desktop
- [ ] Verify all images load correctly
- [ ] Test the contact form submission
- [ ] Check SEO meta tags (View Source)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Test page speed with Lighthouse
- [ ] Verify custom domain DNS propagation

## Updating the Site

After making changes:

```bash
# For Vercel CLI:
vercel --prod

# For GitHub integration:
git add .
git commit -m "Update: description of changes"
git push
# Vercel automatically deploys on push to main
```

## Build Times

- Initial build: ~10-15 seconds
- Static export: Instant serving (no server required)
- Edge cache: Global CDN for fast loading worldwide

## Troubleshooting

**Build fails:**
- Check Node.js version (requires 18+)
- Run `npm install` to ensure dependencies are installed
- Check build logs for specific errors

**Images not loading:**
- Verify image URLs are correct
- Ensure images in `public/` folder are committed to git
- Check browser console for 404 errors

**Custom domain not working:**
- DNS changes can take 24-48 hours to propagate
- Verify DNS records match Vercel's instructions
- Check Vercel domain status in dashboard

## Support

Need help? Contact:
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
