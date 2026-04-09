

## Plan: Add LinkedIn popup animation for Zahida's card

### What changes
1. **Add `linkedin` field to `TeamMember` interface** — optional string for LinkedIn URL
2. **Add LinkedIn URL to Zahida's data** — `linkedin: "https://www.linkedin.com/in/zahida-fizza-kabir-02456b8b/"`
3. **Update `MemberCard` component** — Add click handler and animated popup:
   - When a member with a LinkedIn URL is clicked, show an animated tooltip/popup with a LinkedIn icon and "View on LinkedIn" link
   - Use React state (`useState`) to toggle visibility
   - Popup animates in with scale + fade (using existing animation classes)
   - Clicking the popup link opens LinkedIn in a new tab
   - Clicking outside or clicking again dismisses the popup
4. **Add LinkedIn icon** — Use `lucide-react`'s `Linkedin` icon in the popup

### Technical details
- File: `src/pages/Team.tsx`
- Add `useState` for tracking which member's popup is open
- The popup appears over/below the card with a smooth scale-in animation
- Style: dark card with LinkedIn blue accent, icon + text "LinkedIn Profile"
- `cursor-pointer` on cards that have a LinkedIn URL

