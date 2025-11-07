"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { type BlogPostMetadata } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

const categories = [
  { id: "all", name: "Tümü" },
  { id: "hardware", name: "Donanım" },
  { id: "ai", name: "Yapay Zeka" },
  { id: "software", name: "Yazılım" },
  { id: "trends", name: "Trendler" },
  { id: "news", name: "BOXX Haberleri" },
];

interface BlogListingProps {
  posts: BlogPostMetadata[];
}

export default function BlogListing({ posts }: BlogListingProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMGFjZTIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoMTR2MTRIMzZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-bold lg:text-6xl">BOXX Blog</h1>
            <p className="text-xl text-gray-200">
              Donanımımız ve yazılımınızla ilgili en son haberlerden, yeni teknolojilere,
              benchmark'lara ve daha fazlasına kadar, aradığınız bilgileri BOXX Blog'umuzda
              bulacaksınız.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="border-b bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-lg px-6 py-3 font-semibold transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-primary">
              {categories.find((c) => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-600">{filteredPosts.length} yazı bulundu</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-gray-600 line-clamp-3">{post.excerpt}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="link" className="group/btn p-0">
                    Devamını Oku
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="rounded-lg bg-white p-12 text-center">
              <p className="text-xl text-gray-600">
                Bu kategoride henüz yazı bulunmamaktadır.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
            En Son Haberlerden Haberdar Olun
          </h2>
          <p className="mb-8 text-xl text-gray-100">
            BOXX ürünleri, teknoloji trendleri ve sektör haberleri hakkında güncel kalın
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/iletisim">Bülten'e Abone Ol</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-primary"
            >
              <Link href="/neden-boxx">Neden BOXX?</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
