import { useState } from "react";

// Missing reserved photos are not requested, so the preview never shows broken images.
const photos = import.meta.glob("/src/assets/blog/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export const resolveBlogImage = (path: string) =>
  photos[path.startsWith("/") ? path : `/${path}`];

interface BlogImageProps {
  path: string;
  alt: string;
  cover?: boolean;
  wordmark?: string;
  caption?: string;
}

const BlogImage = ({ path, alt, cover = false, wordmark, caption }: BlogImageProps) => {
  const source = resolveBlogImage(path);
  const [failedSource, setFailedSource] = useState<string>();
  const available = source && source !== failedSource;
  if (!available && !cover) return null;

  return (
    <figure>
      <div className={`relative overflow-hidden rounded-lg ${cover ? "aspect-video" : ""}`}>
        {available ? (
          <>
            <img src={source} alt={alt} loading="lazy" className={`w-full ${cover ? "h-full object-cover" : "h-auto"}`} onError={() => setFailedSource(source)} />
            {cover && <div aria-hidden="true" className="absolute inset-0 bg-[hsl(var(--page-maroon))]/15 pointer-events-none" />}
          </>
        ) : (
          <div className="blog-cover-placeholder absolute inset-0 flex items-center justify-center p-6">
            <span className="font-display text-3xl sm:text-4xl text-foreground">{wordmark}</span>
          </div>
        )}
      </div>
      {available && caption && <figcaption className="mt-3 text-sm text-foreground/50 leading-relaxed">{caption}</figcaption>}
    </figure>
  );
};

export default BlogImage;