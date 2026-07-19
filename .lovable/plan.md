## Plan: Content updates across Portfolio, Team, Services, About, Contact

### Portfolio (`src/pages/Portfolio.tsx`)
- Add two rows: **Shomvob** (Debt) and **BRLT** (Debt) — sector left blank or "—" (unknown).
- Remove the **Amount** column entirely (header + cell), leaving Company / Sector / Instrument.

### Team (`src/pages/Team.tsx`)
- Remove Zahida Fizza Kabir from leadership; replace with **Shehzad Munim** as Chairperson. No photo/expertise/LinkedIn yet — use existing card with a neutral placeholder background and empty expertise list (photo shows initials or empty tile).
- Change **M. Samiul Haque** role → "Head — Advisory and Research".
- Change **Sarah Iqbal** role → "Portfolio Manager".
- Add to Core Team (no photos, no expertise, no LinkedIn): **Meraj Ahmed**, **Mariya Brishti**, **Salwa Tasnim Silma**, **Tasfia Ahmed**. Cards render with placeholder tile and just the name + "Team Member" placeholder role — or role blank.

Note: since no photos/roles were provided, new members will show a blank photo tile (bg-accent/10) with just their names. This will look sparse until you send photos/roles.

### Services (`src/pages/Services.tsx`)
- Rename `Orange Corners` → `Orange Corners Bangladesh`.
- Merge `B/DESHI Bangladesh` and `Catalyst` into a single `B/DESHI Catalyst` pill.
- Venture Building: replace `Climate Innovation Fund` pill with `Climate Innovation Fund (CIF)`, and `BRIDDHI` → `BINIYOG BRIDDHI (B-BRIDDHI)`.
- Venture Building stat: `5,200+ Farmers supported` → `10,000+ Farmers impacted`.
- Venture Building partners: remove `ATEC°`; change `Prime Bank` → `Prime Bank PLC.`.

### About (`src/pages/About.tsx`)
- Uganda detail: `2-unit offices with expansion underway` → `8 offices`.

### Contact (`src/pages/Contact.tsx`)
- Add general email `reach@beyonds.ventures` — shown as a new card or a general contact row above the individual team contacts.