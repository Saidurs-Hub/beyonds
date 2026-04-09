

## Plan: Add white underline to active nav links

The reference image shows navigation links with a thin white/light line underneath the active page link. Currently, the nav links only change text opacity/color for the active state.

### Changes (single file: `src/components/PageLayout.tsx`)

**1. Hero nav links (line 75-76):** Add `border-b-2 border-white pb-1` to the active state class, so the active link gets a white underline.

**2. Non-hero nav links (line 149-150):** Add `border-b-2 border-foreground pb-1` to the active state class.

**3. Also apply to `src/pages/Index.tsx` nav links (line 30-31):** Add the same underline treatment to the homepage navigation for consistency.

All three nav instances will show a subtle bottom border under the currently active page link.

