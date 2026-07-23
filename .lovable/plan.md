## Goal

Apply one consistent headshot style across every team member on the Team page, matching the reference: **solid light-blue square box, black & white photo, subject's head popping out above the top edge of the box, no distortion or stretching.**

## Current state (verified)

- `src/pages/Team.tsx` currently uses a square blue box with `overflow-hidden` and `object-cover object-top`, so heads are cropped flush at the top edge instead of rising above it.
- All 11 team member photos are already uploaded as CDN assets from the earlier round (Muhymin, A.K. Salam, Sarah, Samiul, Saddam, Kashfia, Lamia, Jawad, Mariya, Tasfia, Salwa, Meraj). Hridoy still uses the old `team-hridoy.png`. Shehzad has no photo (initials fallback).
- No new photos are attached in this message, so this plan reuses the existing asset set.

## Changes — `src/pages/Team.tsx`, `MemberCard` component only

1. Add top padding to the photo wrapper (`pt-6 sm:pt-10`) so the head has room to overflow above the blue box.
2. Blue box: keep `aspect-square`, `#C6DEF1` background, `rounded-xl`, but switch back to `overflow-visible` so the head can rise past the top edge.
3. `<img>`:
   - Absolutely positioned, anchored to the **bottom** of the box (`bottom-0`, `left-0`, `right-0`).
   - Height set to ~118% of the box so the top of the head extends above the box.
   - `object-contain object-bottom` — this preserves the photo's aspect ratio (no stretching) while keeping shoulders flush to the bottom of the box.
   - Keep `filter: grayscale(1)` for B&W, `loading="eager"`, `decoding="async"`, `fetchpriority="high"`.
4. Initials fallback (for members without a photo, e.g. Shehzad) stays centered inside the box using `inset-0`.
5. Bio-reveal overlay: keep the current click-to-open behavior; constrain the overlay to `inset-0` on the blue box (not the padded wrapper) so it doesn't cover the overflowing head area awkwardly.

No changes to member data, ordering, imports, section split (Leadership / Core Team), grid layout, or any other page.

## Out of scope

- No copy or role edits.
- No new team members added or removed.
- No re-uploading of existing photos — the current CDN assets are reused as-is. If a specific photo still looks off after this style change, address it in a follow-up with the replacement image attached.
