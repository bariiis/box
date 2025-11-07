import { getAllPosts } from "@/lib/blog";
import BlogListing from "./BlogListing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function BlogPage() {
  const allPosts = getAllPosts();

  return (
    <>
      <Header />
      <main>
        <BlogListing posts={allPosts} />
      </main>
      <Footer />
    </>
  );
}

export const metadata = {
  title: "Blog",
  description:
    "BOXX iş istasyonları, teknoloji trendleri, donanım haberleri ve profesyonel kullanıcılar için ipuçları. En son güncellemeler için BOXX Blog'u takip edin.",
  keywords: ["boxx blog", "iş istasyonu haberleri", "donanım", "teknoloji", "AMD", "NVIDIA", "Intel", "workstation news"],
  openGraph: {
    title: "Blog | BOXX Türkiye",
    description: "BOXX iş istasyonları, teknoloji trendleri, donanım haberleri ve profesyonel kullanıcılar için ipuçları.",
    type: "website",
    images: [
      {
        url: "https://ext.same-assets.com/3886351630/3519237665.png",
        width: 1200,
        height: 630,
        alt: "BOXX Türkiye Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | BOXX Türkiye",
    description: "BOXX iş istasyonları, teknoloji trendleri, donanım haberleri ve profesyonel kullanıcılar için ipuçları.",
  },
};
