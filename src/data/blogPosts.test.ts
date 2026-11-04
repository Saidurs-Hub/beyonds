import { describe, expect, it } from "vitest";
import { blogPosts, getBlogPost } from "./blogPosts";

describe("blog post availability", () => {
  it("restores all five posts in their original order", () => {
    expect(blogPosts.map((post) => post.slug)).toEqual(["shikho", "shomvob", "shondhibazar", "aqualink", "eudika"]);
  });

  it("returns no post for an unknown slug", () => {
    expect(getBlogPost("does-not-exist")).toBeUndefined();
  });

  it("uses the original Shondhibazar cover until the reserved photo exists", () => {
    const photos = import.meta.glob("/src/assets/blog/shondhibazar-cover.jpg", { eager: true, query: "?url", import: "default" });
    const originals = import.meta.glob("/src/assets/blog-covers/shondhibazar.png", { eager: true, query: "?url", import: "default" });
    expect(getBlogPost("shondhibazar")?.cover).toBe(photos["/src/assets/blog/shondhibazar-cover.jpg"] ?? originals["/src/assets/blog-covers/shondhibazar.png"]);
  });

  it("uses the untinted group photo only for Shondhibazar cards", () => {
    const photos = import.meta.glob("/src/assets/blog/shondhibazar-hero.jpg", { eager: true, query: "?url", import: "default" });
    const post = getBlogPost("shondhibazar");
    expect(post?.cardCover).toBe(photos["/src/assets/blog/shondhibazar-hero.jpg"] ?? post?.cover);
    expect(post?.coverTint).toBe(false);
    expect(blogPosts.filter((entry) => entry.slug !== "shondhibazar").every((entry) => entry.cardCover === undefined)).toBe(true);
  });

  it.each([
    ["shikho", [
      { value: "4M+", label: "learners on the platform" },
      { value: "64", label: "districts reached" },
      { value: "65 lakh+", label: "monthly logins" },
      { value: "1.5M", label: "monthly learners targeted by 2029" },
    ], "A student's future should never be limited by the place they happen to be born."],
    ["shomvob", [
      { value: "2.5M+", label: "job seekers registered" },
      { value: "32,000+", label: "formal job placements" },
      { value: "85%", label: "of Bangladesh's workers are informal" },
      { value: "10M+", label: "registered workers targeted by 2028" },
    ], "A more direct path to work can give people more than a job. It can give them a foundation to build from."],
    ["aqualink", [
      { value: "1,150+", label: "customers across 16 districts" },
      { value: "20.93%", label: "electricity saved at the Shwapno pilot outlet" },
      { value: "80,000+ kWh", label: "saved every month" },
      { value: "1,000+", label: "farmers and technicians trained" },
    ], "Technology can be designed around real-world needs."],
    ["eudika", [
      { value: "2,000+", label: "tutors found opportunities" },
      { value: "2,900", label: "customers and beneficiaries" },
      { value: "BDT 1.5 crore", label: "revenue generated" },
      { value: "17,000", label: "monthly active users" },
    ], "Sometimes, finding the right tutor is about more than improving a grade. It is about finding someone who helps a student believe in their ability to learn."],
  ])("configures %s with exact feature data and no image columns", (slug, stats, pullQuote) => {
    const post = getBlogPost(slug as string);
    expect(post?.feature?.stats).toEqual(stats);
    expect(post?.feature?.pullQuote).toBe(pullQuote);
    expect(post?.feature?.twoColumn).toEqual([]);
    expect(post?.feature?.heroImage).toBe(post?.cover);
  });

  it("retains the reserved section photos", () => {
    const post = getBlogPost("shondhibazar");
    expect(post?.feature?.twoColumn.find((column) => column.heading === "Building Trust in Food")?.image).toBe("src/assets/blog/shondhibazar-products.jpg");
    expect(post?.sections.find((section) => section.heading === "Building the Next Chapter with OCBIF")?.image).toBe("src/assets/blog/shondhibazar-facility.jpg");
  });

  it("adds the second stat row under Growing the Connection", () => {
    const row = getBlogPost("shondhibazar")?.feature?.inlineStats?.find(
      (entry) => entry.heading === "Growing the Connection",
    );
    expect(row?.stats).toEqual([
      { value: "228,000+", label: "meals served at Safe Food Experience Centers" },
      { value: "200,000+", label: "eco-friendly packaging units produced" },
      { value: "22,000+", label: "glass jars collected for reuse" },
      { value: "47", label: "product samples approved for the UK and UAE" },
    ]);
  });
});