

## Plan: Add Stock Images to Services Page

### Overview
Add high-quality Unsplash stock images to each of the three service categories on the Services page, placed between the category header and the sub-service pills. Each image will be a wide, cinematic banner with rounded corners and subtle styling to match the dark minimal aesthetic.

### Image Selection
Using Unsplash direct URLs (free, no attribution required for web use):

1. **Acceleration & Investment Readiness** — Entrepreneurs in a workshop/pitch setting
   - `https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80` (diverse team collaborating)

2. **Venture Building & Impact-Linked Financing** — Agricultural/climate resilience imagery
   - `https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80` (rice paddy / farming)

3. **Investment Management** — Professional finance/data imagery
   - `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80` (analytics dashboard)

### Technical Changes

**File: `src/pages/Services.tsx`**
- Add an `image` field to each service object in the `services` array with the Unsplash URL
- Render a `<div>` with `<img>` after the category header block and before sub-service pills
- Styling: `rounded-xl overflow-hidden aspect-[21/9]` for a cinematic crop, `object-cover`, with a subtle dark overlay gradient at the bottom for depth
- Add `loading="lazy"` for performance

### Visual Treatment
- Aspect ratio: 21:9 (cinematic wide)
- Rounded corners matching existing card style
- Subtle `bg-gradient-to-t from-background/40` overlay for cohesion with dark theme
- Positioned between the header/description and the sub-service pills

