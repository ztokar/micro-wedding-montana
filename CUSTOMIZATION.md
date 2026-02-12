# Customizing Your Montana Micro Weddings Site

## Quick Customization Guide

### 1. Replace Images

#### Hero Section
**File**: `components/Hero.tsx`

Replace line with your Montana landscape:
```tsx
src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4..."
// Change to:
src="/images/hero-montana.jpg"
```

#### Vision Section
**File**: `components/Vision.tsx`

Two main images to replace:
```tsx
// Image 1 (couple in landscape)
src="https://images.unsplash.com/photo-1519741497674-611481863552..."

// Image 2 (ranch sunset)
src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3..."
```

#### Gallery Section
**File**: `components/Gallery.tsx`

Replace the `images` array with your photos:
```tsx
const images = [
  {
    src: '/images/gallery-1.jpg',
    alt: 'Your description',
    span: 'col-span-2 row-span-2', // Keep for layout
  },
  // ... more images
];
```

**Recommended Gallery Layout:**
- 6-12 images total
- Mix of landscape (col-span-2) and portrait (col-span-1)
- Include: ceremony sites, venue details, couples, Montana landscapes

### 2. Update Contact Information

**File**: `components/Contact.tsx`

```tsx
// Email
<a href="mailto:hello@microweddingmontana.com">
  hello@microweddingmontana.com
</a>

// Phone
<a href="tel:+14065551234">
  (406) 555-1234
</a>

// Location
<p className="text-sage-200">
  Montana's Pristine Wilderness<br />
  Exact location shared upon booking
</p>
```

### 3. Customize Packages & Pricing

**File**: `components/Packages.tsx`

Update the `packages` array:

```tsx
const packages = [
  {
    name: 'Your Package Name',
    tagline: 'Short description',
    price: '$X,XXX',
    duration: 'Half Day / Full Day',
    guests: 'Up to XX',
    features: [
      'Feature 1',
      'Feature 2',
      // ... add your features
    ],
    highlight: false, // Set to true for "Most Popular" tag
  },
];
```

**Tips:**
- Keep 3 packages for visual balance
- Set `highlight: true` on the middle package (most popular)
- List 5-8 features per package
- Use action verbs: "Includes", "Choice of", "Professional"

### 4. Edit Copy & Messaging

#### Hero Headline
**File**: `components/Hero.tsx`

```tsx
<h1 className="text-5xl...">
  Montana
  <span className="block...">Micro Weddings</span>
</h1>

<p className="text-lg...">
  Your tagline here—make it emotional and compelling.
</p>
```

#### Vision Section
**File**: `components/Vision.tsx`

Three text blocks to customize:
1. **Love, Naturally**: Your venue philosophy
2. **Intimate By Design**: The experience you offer
3. **Quote**: A memorable brand statement

### 5. Update Meta Tags (SEO)

**File**: `app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: "Your Title | Keywords",
  description: "Your compelling description (155 characters max)",
  keywords: "keyword1, keyword2, keyword3",
  openGraph: {
    title: "Your Title",
    description: "Your description",
    type: "website",
    url: "https://yourdomain.com",
  },
};
```

### 6. Change Color Scheme

**File**: `app/globals.css`

Update colors in the `@theme` block:

```css
@theme {
  /* Your custom colors */
  --color-primary-50: #yourcolor;
  --color-primary-100: #yourcolor;
  /* ... continue pattern */
}
```

**Current Palette:**
- **Sage**: Muted green tones (nature, calm)
- **Earth**: Warm browns (rustic, grounded)
- **Cream**: Background (elegant, soft)
- **Terracotta**: Accent (warm, inviting)

**To change palette:**
1. Use a color generator: [Tailwind Shades](https://www.tailwindshades.com/)
2. Generate 50-900 shades for each color
3. Replace in `@theme` block
4. Test contrast for accessibility

### 7. Customize Forms

**File**: `components/Contact.tsx`

#### Add/Remove Form Fields

```tsx
<div>
  <label htmlFor="yourfield">Your Label *</label>
  <input
    type="text"
    id="yourfield"
    name="yourfield"
    required
    value={formData.yourfield}
    onChange={handleChange}
    className="w-full..."
  />
</div>
```

#### Integrate Form Backend

Replace the `handleSubmit` function:

**Option 1: Formspree**
```tsx
<form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
>
```

**Option 2: Custom API**
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};
```

### 8. Add More Sections

Create a new component:

```tsx
// components/YourSection.tsx
'use client';
import { motion } from 'framer-motion';

export default function YourSection() {
  return (
    <section id="your-section" className="py-24 bg-white">
      {/* Your content */}
    </section>
  );
}
```

Add to `app/page.tsx`:

```tsx
import YourSection from '@/components/YourSection';

export default function Home() {
  return (
    <main>
      {/* ... existing sections */}
      <YourSection />
      {/* ... */}
    </main>
  );
}
```

### 9. Update Social Media Links

**File**: `components/Footer.tsx`

```tsx
<a href="https://instagram.com/yourusername">
  <Instagram className="w-5 h-5" />
</a>
<a href="https://facebook.com/yourpage">
  <Facebook className="w-5 h-5" />
</a>
```

### 10. Customize Animations

**File**: `app/globals.css`

Adjust animation speeds:

```css
@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(60px); /* Increase for more dramatic entrance */
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

Or in components:

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1.2,  // Slower = more dramatic
    delay: 0.3,     // Stagger animations
    ease: "easeOut" // Animation curve
  }}
>
```

## File Structure Quick Reference

```
micro-wedding-montana/
├── app/
│   ├── layout.tsx          → Meta tags, fonts
│   ├── page.tsx            → Main page structure
│   └── globals.css         → Colors, theme, animations
├── components/
│   ├── Hero.tsx            → Hero section
│   ├── Vision.tsx          → About/vision
│   ├── Packages.tsx        → Pricing packages
│   ├── Gallery.tsx         → Photo gallery
│   ├── Contact.tsx         → Contact form
│   └── Footer.tsx          → Footer
├── public/
│   └── images/             → Add your images here
├── package.json            → Dependencies
├── next.config.js          → Next.js config
└── vercel.json             → Vercel config
```

## Testing Changes

```bash
# Start dev server
npm run dev

# View at http://localhost:3000

# Make changes → save → auto-refresh

# When satisfied:
npm run build
```

## Getting Help

**Common Issues:**
- **Styling not working?** Check class names match Tailwind v4 syntax
- **Images not loading?** Ensure they're in `public/images/` folder
- **Build errors?** Read error message carefully, check syntax

**Resources:**
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

Need specific customization help? Reference this guide and the component files!
