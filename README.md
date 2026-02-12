# Montana Micro Weddings

A stunning one-page landing site for intimate Montana wedding venue, built with Next.js and optimized for Vercel deployment.

## 🎨 Design Features

- **Rustic Luxury Aesthetic**: Editorial ranch romance style inspired by high-end wedding venues
- **Dramatic Full-Width Imagery**: Cinematic Montana landscapes and intimate wedding moments
- **Sophisticated Typography**: Custom Google Fonts (Cormorant Garamond + Inter)
- **Earth Tone Color Palette**: Sage greens, warm browns, cream, and terracotta
- **Smooth Animations**: Framer Motion for elegant page transitions and reveals
- **Fully Responsive**: Mobile-first design that looks stunning on all devices
- **Converting Layout**: Strategic CTAs and booking form for lead generation

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create static export
npm run build
```

This generates an `out/` directory with all static files ready for deployment.

## 📦 Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Import your repository in [Vercel Dashboard](https://vercel.com/new)
3. Vercel will automatically detect Next.js and deploy

### Option 3: Manual Upload

1. Run `npm run build`
2. Upload the `out/` folder to Vercel via the dashboard

## 🎯 Sections

1. **Hero** - Full-screen Montana landscape with compelling headline
2. **Vision** - Alternating image/text sections explaining the micro wedding experience
3. **Packages** - Three tiered packages (Elopement, Intimate Gathering, Micro Wedding)
4. **Gallery** - Masonry grid of stunning wedding photography
5. **Contact** - Booking inquiry form with venue contact info
6. **Footer** - Brand info, quick links, and social media

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Google Fonts (Cormorant Garamond, Inter)
- **Deployment**: Vercel (Static Export)

## 📝 Customization

### Update Images

Replace the Unsplash URLs in components with your own images:
- `components/Hero.tsx` - Hero background
- `components/Vision.tsx` - Vision section images
- `components/Gallery.tsx` - Gallery images

Recommended: Add images to `public/images/` and reference them as `/images/your-image.jpg`

### Update Content

- **Contact Info**: Edit `components/Contact.tsx` for email, phone, location
- **Packages**: Modify pricing and features in `components/Packages.tsx`
- **Meta Tags**: Update SEO metadata in `app/layout.tsx`

### Update Colors

Edit the color palette in `tailwind.config.ts`:
- `sage` - Green tones
- `earth` - Brown tones
- `cream` - Background
- `terracotta` - Accent

### Form Integration

The contact form in `components/Contact.tsx` currently logs to console. Integrate with:
- **Email Service**: SendGrid, Mailgun, Resend
- **Form Service**: Formspree, Basin, Netlify Forms
- **Backend**: Your own API endpoint

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML
- ARIA labels for interactive elements
- Keyboard navigation support
- Alt text for all images (update as needed)

## 🔧 Configuration

The site is configured for static export in `next.config.js`:

```js
output: 'export'
images: { unoptimized: true }
```

This ensures compatibility with static hosting like Vercel, Netlify, or any CDN.

## 📄 License

All rights reserved © 2026 Montana Micro Weddings

---

**Need Help?** Contact us at hello@microweddingmontana.com
