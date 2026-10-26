import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import BlogImage from "@/components/BlogImage";
import BlogCard from "@/components/BlogCard";
import { blogPosts, getBlogPost } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!post) return <Navigate to="/insights" replace />;

  const morePosts = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <PageLayout gradient="insights" title={post.title} subtitle={post.summary} titlePrefix={
        <div className="space-y-6 mb-6">
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-foreground/90 transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} /> Back to Insights
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] tracking-[0.2em] uppercase text-accent font-medium" style={{ fontFamily: "var(--font-body)" }}>
              {post.tag}
            </span>
            <span className="text-[10px] tracking-[0.15em] uppercase text-foreground/45 bg-secondary/60 px-2 py-0.5 rounded-full border border-border/20" style={{ fontFamily: "var(--font-body)" }}>
              OCBIF supported
            </span>
          </div>
        </div>
    }>
      <div className="space-y-12">
        <BlogImage key={post.cover} path={post.cover} alt={`${post.title} cover`} cover wordmark={post.slug === "shondhibazar" ? "Shondhibazar" : post.title} />

        <article className="max-w-[720px] space-y-10">
          {post.sections.map((section, i) => (
            <section key={i} className="space-y-5">
              {section.image && <BlogImage path={section.image} alt={section.caption || section.heading || post.title} caption={section.caption} />}
              {section.heading && (
                <h2 className="text-foreground text-2xl md:text-3xl leading-snug" style={{ fontFamily: "var(--font-display)" }}>
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((paragraph, j) => (
                <p key={j} className="text-foreground/75 text-base md:text-lg leading-loose" style={{ fontFamily: "var(--font-body)" }}>
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </article>

        {morePosts.length > 0 && <section className="space-y-8 border-t border-border/20 pt-12">
          <h2 className="text-foreground/40 text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "var(--font-body)" }}>
            More posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-6">
            {morePosts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>}
      </div>
    </PageLayout>
  );
};

export default BlogPost;
