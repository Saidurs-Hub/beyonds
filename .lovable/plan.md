## Team photos + portfolio logos update

### Photo mapping (by user's stated order MB, TA, SS, MA, AY, then Lamia)
- `image.jpeg` → Mariya Brishti
- `image-2.jpeg` → Tasfia Ahmed
- `image-3.jpeg` → Salwa Tasnim Silma
- `image-4.jpeg` → Meraj Ahmed
- `image-5.jpeg` → Ahmed Jawad Yusuf (replaces current photo)
- `image-8.jpeg` → Lamia Hafiz (replaces current photo)

### Portfolio logos
- Replace generated BRTL logo with uploaded `image-6.jpeg` (real BRTL logo).
- Replace current Shomvob logo with uploaded `image-7.jpeg`.

### New team photo style (applied to every team member card)
- Card background box: solid powder blue `#C6DEF1`.
- Photo rendered in black & white (CSS `filter: grayscale(1)`).
- Head extends slightly above the top edge of the blue box (photo sits with `object-position: bottom` and its top ~10-15% overflows above the box using a negative top margin inside a container with `overflow: visible`).
- Applied uniformly to leadership + core team cards so styling is consistent.
- Preserve aspect ratio (`object-fit: contain` on the person cutout so they never stretch/distort).

### Files to change
- Upload 8 images via `lovable-assets` CLI → create `.asset.json` pointers in `src/assets/` (6 team photos + 2 logos).
- `src/pages/Team.tsx` — swap imports for the 6 members, restructure `MemberCard` photo container: outer wrapper `overflow-visible`, inner blue box with rounded corners + grayscale image that vertically overflows the top.
- `src/pages/Portfolio.tsx` — swap BRTL + Shomvob logo imports to the new asset pointers.
- Delete the old generated `brlt-logo.png` (and Shomvob asset pointer) once replaced.

### Out of scope
- No copy/text changes, no other pages, no changes to placeholder cards for members without photos beyond applying the same blue box style.
