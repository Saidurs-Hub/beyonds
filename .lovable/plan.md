

## Plan: Add Rocket Launch Video to Acceleration Section

### Overview
Embed a real NASA rocket launch video (from Pixabay, free license) as a cinematic background/banner in the "Acceleration & Investment Readiness" section on the Services page.

### Video Source
- **Pixabay Video #3** by NASA-Imagery — real Space Shuttle launch footage (SD, 2:23)
- Direct MP4: `https://cdn.pixabay.com/video/2015/08/07/3-135655112_large.mp4`
- Free for commercial use, no attribution required

### Technical Changes

**File: `src/pages/Services.tsx`**

1. Add a `video` field to the first service object (Acceleration) with the Pixabay MP4 URL
2. Between the category header and sub-service pills, render a `<video>` element for the Acceleration section:
   - Autoplay, muted, loop, playsInline for seamless background playback
   - Aspect ratio 21:9 cinematic crop with `rounded-xl overflow-hidden`
   - `object-cover` to fill the container
   - Dark gradient overlay on bottom for cohesion with the dark theme
   - Only renders for the first service (Acceleration); other sections remain unchanged

### Visual Treatment
- Cinematic 21:9 aspect ratio container with rounded corners
- Video autoplays silently on loop
- Subtle `bg-gradient-to-t from-background/60` overlay for depth
- Matches the existing card/image styling pattern

