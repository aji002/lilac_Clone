import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    slug: "blog-post-one",
    title: "Blog Post One",
    date: "3/11/25",
    image: "/intro1.webp",
  },
  {
    slug: "blog-post-two",
    title: "Blog Post Two",
    date: "3/11/25",
    image: "/faq.jpg",
  },
  {
    slug: "blog-post-three",
    title: "Blog Post Three",
    date: "3/11/25",
    image: "/suppo.jpg",
  },
  {
    slug: "blog-post-four",
    title: "Blog Post Four",
    date: "3/11/25",
    image: "/about1.jpg",
  },
];

export default function BlogGrid() {
  return (
    <section className="section">
      <div className="container-main grid md:grid-cols-2 gap-main">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <article className="space-y-4">

              
              <div className="relative w-full h-[360px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              
              <p className="body text-[var(--color-green)]/70">
                {post.date}
              </p>

              
              <h2 className="h2">{post.title}</h2>

              
              <span className="btn-text border-b border-[var(--color-green)] pb-1 inline-block">
                Read More
              </span>

            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
