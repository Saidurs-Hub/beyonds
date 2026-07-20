Make each portfolio company logo clickable so it opens the company website in a new tab.

Changes to `src/pages/Portfolio.tsx`:
- Add a `website` URL to every entry in the `investments` array using the links provided (Relaxy, Shikho, Cholpori, Shomvob, BRLT).
- Import the existing `openExternalLink` utility from `@/lib/openExternalLink`.
- Wrap each logo image in a clickable element that calls `openExternalLink(inv.website)`.
- Add `cursor-pointer` and a subtle hover opacity effect so users know the logos are interactive.
- Preserve the current layout and styling; no other page changes are needed.

After the edit, verify the build passes and confirm each logo opens the correct external site.