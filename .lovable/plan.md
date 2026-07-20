## Team page: click-to-reveal bio + faster image loads

### Behavior change
- Hide each member's expertise/bio text by default. Only name + role remain visible under the photo.
- Clicking the photo toggles an overlay on the image showing that member's bio (the expertise list, joined). Click again (or click outside/X) to close.
- Keep the existing LinkedIn behavior but move it into the same overlay: overlay shows bio text + a "LinkedIn Profile" button when a linkedin URL exists. Members without a linkedin still get the click-to-reveal bio.
- Members with no expertise entries (Shehzad Munim, Meraj Ahmed, Mariya Brishti, Salwa Tasnim Silma, Tasfia Ahmed) simply won't show bio text in the overlay — only name/role/LinkedIn if present.

### Faster image loading
- Add `loading="eager"` + `fetchpriority="high"` to team photos (they're all above/near the fold on the Team page) and `decoding="async"`.
- Remove the `initial opacity:0 scale:1.05` + 0.8s fade-in on `AnimatedImage` for team photos so they appear immediately instead of waiting for the scroll-reveal transition. Simplest path: render a plain `<img>` for team photos on the Team page rather than `AnimatedImage`, keeping `AnimatedImage` untouched for other pages.
- Drop the staggered `ScrollReveal delay={index * 0.08}` on member cards so later cards don't wait ~0.7s before their images start animating in. Use `delay={0}` for all.

### Files to change
- `src/pages/Team.tsx` — swap `AnimatedImage` for a plain `<img>` with eager loading, remove per-index stagger delay, restructure `MemberCard` so the expertise paragraph is removed from the always-visible layout and instead rendered inside the click overlay alongside the LinkedIn button.

### Out of scope
- No changes to other pages, no changes to image assets themselves, no changes to `AnimatedImage` component.