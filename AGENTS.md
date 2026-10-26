# Architecture rules

- Keep Nava copy in its page-level content object and its styles scoped to `.nava`, imported only by Nava.tsx, so removal cannot affect existing pages.
- Use PageLayout's optional bare mode only for custom full-width page content and footer; its default rendering must preserve existing pages and shared BSV navigation.
- Define Investments bridge styling with semantic global tokens because the Nava-only stylesheet must not load on other pages.
- Blog posts live in `src/data/blogPosts.ts` and are rendered by the shared `BlogCard` on Insights and BlogPost, so adding a post is one data entry and card rendering stays consistent.
- Resolve optional blog photos with BlogImage's eager asset glob and skip absent section photos; cover placeholders prevent broken images before uploads.
- PageLayout's optional titlePrefix places post navigation and tags before the heading without changing existing page headers.
- A post's optional `feature` config switches BlogPost to BlogPostFeature's full-width hero layout via PageLayout's bareContent mode (shared nav and footer kept), so posts without it keep the standard article layout.