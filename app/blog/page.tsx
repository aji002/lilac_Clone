import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import Subscribe from "@/components/blog/Subscribe";
import Connect from "@/components/Connect";

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <BlogHero />
        <BlogGrid />
        <Subscribe />
        <Connect/>
      </main>
      <Footer />
    </>
  );
}
