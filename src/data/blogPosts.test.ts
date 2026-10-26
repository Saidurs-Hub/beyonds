import { describe, expect, it } from "vitest";
import { blogPosts, getBlogPost } from "./blogPosts";

describe("blog post availability", () => {
  it("starts with only the Shondhibazar post", () => {
    expect(blogPosts.map((post) => post.slug)).toEqual(["shondhibazar"]);
  });

  it("returns no post for an unknown slug", () => {
    expect(getBlogPost("does-not-exist")).toBeUndefined();
  });

  it("reserves the requested cover and section photos", () => {
    const post = getBlogPost("shondhibazar");
    expect(post?.cover).toBe("src/assets/blog/shondhibazar-cover.jpg");
    expect(post?.sections.find((section) => section.heading === "Building Trust in Food")?.image).toBe("src/assets/blog/shondhibazar-products.jpg");
    expect(post?.sections.find((section) => section.heading === "Building the Next Chapter with OCBIF")?.image).toBe("src/assets/blog/shondhibazar-facility.jpg");
  });
});