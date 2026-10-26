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

  it("retains the reserved section photos", () => {
    const post = getBlogPost("shondhibazar");
    expect(post?.feature?.twoColumn.find((column) => column.heading === "Building Trust in Food")?.image).toBe("src/assets/blog/shondhibazar-products.jpg");
    expect(post?.sections.find((section) => section.heading === "Building the Next Chapter with OCBIF")?.image).toBe("src/assets/blog/shondhibazar-facility.jpg");
  });
});