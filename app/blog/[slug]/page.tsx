import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Connect from "@/components/Connect";
import { posts } from "@/data/posts";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const index = posts.findIndex((p) => p.slug === slug);
  const post = posts[index];

  if (!post) {
    return <div className="pt-40 text-center">Post not found</div>;
  }

  const prev = posts[index - 1];
  const next = posts[index + 1];

  return (
    <>
      <Header />

      <main className="pt-32 pb-24 px-6 text-center">
        
        <p className="text-sm tracking-wide text-[var(--color-green)]">
          {post.date}
        </p>

        <h1 className="mt-4 text-5xl md:text-6xl font-semibold text-[var(--color-green)]">
          {post.title}
        </h1>

         
        <div className="max-w-2xl mx-auto mt-10 space-y-6 text-lg leading-relaxed text-[var(--color-green)]">
          {post.content.split("\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        
        <div className="mt-24 border-t border-[var(--color-green)]/30 pt-12 flex justify-between items-center text-3xl font-semibold text-[var(--color-green)]">
          {prev ? (
            <Link href={`/blog/${prev.slug}`} className="flex items-center gap-4">
              <span>‹</span>
              <span>{prev.title}</span>
            </Link>
          ) : <div />}

          {next ? (
            <Link href={`/blog/${next.slug}`} className="flex items-center gap-4">
              <span>{next.title}</span>
              <span>›</span>
            </Link>
          ) : <div />}
        </div>
      </main>

      <Connect />
      <Footer />
    </>
  );
}
