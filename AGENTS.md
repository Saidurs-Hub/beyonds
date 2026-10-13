# Architecture rules

- Keep Nava copy in its page-level content object and its styles scoped to `.nava`, imported only by Nava.tsx, so removal cannot affect existing pages.
- Use PageLayout's optional bare mode only for custom full-width page content and footer; its default rendering must preserve existing pages and shared BSV navigation.
- Define Investments bridge styling with semantic global tokens because the Nava-only stylesheet must not load on other pages.