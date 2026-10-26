import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";
import BlogImage from "@/components/BlogImage";

const BlogCard = ({ post }: { post: BlogPost }) => (
  <Link
    to={`/insights/${post.slug}`}
    className="group relative h-full flex flex-col bg-card/40 border border-border/20 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_40px_-15px_hsl(var(--accent)/0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    aria-label={`Read post: ${post.title}`}
  >
    <BlogImage path={post.cover} alt={`${post.title} cover`} cover tint={post.coverTint !== false} wordmark={post.slug === "shondhibazar" ? "Shondhibazar" : post.title} />
    <div className="flex flex-col flex-1 gap-3 p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[10px] tracking-[0.2em] uppercase text-accent font-medium" style={{ fontFamily: "var(--font-body)" }}>
          {post.tag}
        </span>
        <span className="text-[10px] tracking-[0.15em] uppercase text-foreground/45 bg-secondary/60 px-2 py-0.5 rounded-full border border-border/20" style={{ fontFamily: "var(--font-body)" }}>
          OCBIF supported
        </span>
      </div>
      <h3 className="text-foreground text-xl leading-snug" style={{ fontFamily: "var(--font-display)" }}>
        {post.title}
      </h3>
      <p className="text-foreground/60 text-sm leading-relaxed line-clamp-3" style={{ fontFamily: "var(--font-body)" }}>
        {post.summary}
      </p>
      <span className="mt-auto inline-flex items-center gap-1.5 text-sm text-accent font-medium group-hover:gap-2.5 transition-all" style={{ fontFamily: "var(--font-body)" }}>
        Read post <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
      </span>
    </div>
  </Link>
);

export default BlogCard;
