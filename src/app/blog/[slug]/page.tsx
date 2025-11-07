import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import { getPostBySlug, getRelatedPosts, getAllPostSlugs } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const blogPost = getPostBySlug(slug);

  if (!blogPost) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gray-900 py-12 text-white">
          <div className="container mx-auto px-4">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-2 text-gray-300 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Blog'a Dön
            </Link>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(blogPost.date)}</span>
              </div>
              <span>•</span>
              <span>{blogPost.author}</span>
            </div>
            <h1 className="mt-4 text-4xl font-bold lg:text-5xl">{blogPost.title}</h1>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-white">
          <div className="container mx-auto px-4">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={blogPost.image}
                alt={blogPost.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              {/* Tags */}
              <div className="mb-8 flex flex-wrap gap-2">
                {blogPost.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Article Content */}
              <article
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />

              {/* CTA */}
              <div className="mt-12 rounded-lg bg-primary/10 p-8 text-center">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  APEXX T4 PRO-X Hakkında Daha Fazla Bilgi?
                </h3>
                <p className="mb-6 text-gray-600">
                  Ürün hakkında detaylı bilgi almak ve fiyat teklifi için bizimle iletişime geçin
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild>
                    <Link href="/urunler/apexx/t4-pro-x">Ürün Detayları</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/iletisim">İletişime Geçin</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">İlgili Yazılar</h2>
              <div className="grid gap-8 md:grid-cols-3">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-xl"
                  >
                    <div className="relative mb-4 aspect-video overflow-hidden rounded-lg bg-gray-200">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mb-2 font-bold text-gray-900 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600">{formatDate(post.date)}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
