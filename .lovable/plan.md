

## Plan: Fix LinkedIn link clicks on Team page

**Problem:** When clicking the "LinkedIn Profile" button, the click bubbles up to the overlay `div`, which immediately closes the popup (`setShowLinkedin(false)`) before the browser can follow the link.

**Fix (single file: `src/pages/Team.tsx`):**

Add `e.stopPropagation()` to the `<a>` tag's `onClick` so the click doesn't bubble to the overlay's dismiss handler:

```tsx
<a
  href={member.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => e.stopPropagation()}
  ...
>
```

This prevents the overlay from intercepting the link click, allowing `target="_blank"` to open LinkedIn in a new tab. Clicking the overlay background still dismisses the popup as expected.

