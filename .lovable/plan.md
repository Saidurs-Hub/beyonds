
# Uniform Team Portraits — Match Reference Exactly

## Why CSS alone can't do this

Every current headshot has a different framing (some tight face crops, some full torso, some off-center). CSS `object-cover` can only shift a crop window inside the source image — it can't move the subject or resize the head relative to the shoulders. So no matter how we tune the CSS, eyes and head sizes will keep landing at different heights across cards.

To hit the reference exactly (identical head size, identical eye line, identical shoulder position, head popping ~10–15% above a light-blue square), each photo has to be re-rendered to that composition once, then dropped into a plain container.

## Plan

### 1. Re-render every team photo to the reference composition

For each team member with a photo, run an AI image edit that:
- Isolates the person (head + shoulders + upper chest).
- Places them on a solid light-blue square background matching the current `BOX_BLUE` (`#C6DEF1`).
- Positions them so the top of the head extends slightly above the top edge of the square (matching the attached reference).
- Converts the subject to black & white.
- Preserves original aspect ratio of the face — no stretching.
- Outputs a 1:1 square PNG at consistent resolution (1024×1024).

Photos to reprocess (13 total):
- Muhymin, A.K. Faizan Salam, Sarah Iqbal, Hridoy Islam, Samiul Haque, Saddam Khan Sumit, Lamia Hafiz, Kashfia Mahmud, Ahmed Jawad Yusuf, Meraj Ahmed, Mariya Brishti, Salwa Tasnim Silma, Tasfia Ahmed.

Each result saved as `src/assets/team-<name>-styled.png` and imported directly (not via `.asset.json`) so it ships as a normal image.

### 2. Simplify `MemberCard` in `src/pages/Team.tsx`

Since the blue square and head-overflow are now baked into the image itself:
- Remove the wrapper padding, the blue background color, the `overflow-visible`, and the absolute-positioned `<img>` with negative top / 112% height.
- Replace with a simple square container: `<img className="w-full aspect-square object-contain">`.
- Keep the click-to-reveal bio overlay and LinkedIn button as-is.
- Keep the initials fallback for members without a photo (Shehzad Munim).

### 3. Verify

- Screenshot the `/team` route via Playwright to confirm every card looks uniform and matches the reference.

## Notes / trade-offs

- AI-rendered portraits will be very close to the reference but won't be pixel-identical between members (AI variance). If any single card comes out off, we re-run that one photo with a tighter prompt.
- This replaces the current CSS-based approach entirely — the previous `pt-`, `top: -12%`, `height: 112%` hacks all get removed.
- Original uploaded photos remain in the repo untouched; only new `-styled.png` files are added and imported.
