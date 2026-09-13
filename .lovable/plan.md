# Distinct Brand Gradients by Page

## Scope
- Add semantic gradient styles built only from deep maroon, burgundy, plum, and blue-purple tones.
- Apply a different gradient to About, Services, Investments, Contact, and Team exactly as specified.
- Give Insights its own restrained burgundy-to-plum treatment so it no longer shares the default flat surface.
- Keep the Home page’s existing brand artwork and imagery unchanged; it already has a distinct, non-flat identity.
- Preserve all text, cards, spacing, imagery, interactions, and page structure.

## Implementation
- Extend the shared page wrapper with a typed page-gradient option and map each option to a semantic CSS class.
- Define all gradient colors centrally in the global design system, with a solid maroon fallback.
- Pass the matching option from each internal page while retaining the existing image overlays and readable contrast.

## Verification and Release
- Check all affected pages at desktop and mobile widths for gradient visibility, text contrast, and unchanged layout.
- Run the existing validation checks, then publish the project live.
