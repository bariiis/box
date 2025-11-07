"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold">BOXX Türkiye Hakkında</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hakkimizda" className="text-sm hover:text-primary">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/musteri-hikayeleri" className="text-sm hover:text-primary">
                  Müşteri Hikayeleri
                </Link>
              </li>
              <li>
                <Link href="/gizlilik-politikasi" className="text-sm hover:text-primary">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cozumler" className="text-sm hover:text-primary">
                  Çözümler
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="text-sm hover:text-primary">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link href="/destek" className="text-sm hover:text-primary">
                  Teknik Destek
                </Link>
              </li>
              <li>
                <Link href="/garanti" className="text-sm hover:text-primary">
                  Garanti
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Bültenimize Katılın</h3>
            <p className="mb-4 text-sm text-gray-400">
              BOXX Türkiye'den en son haberler ve güncellemeler için kaydolun.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="E-posta adresiniz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
                disabled={status === "loading"}
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Kaydediliyor..." : "Kaydol"}
              </Button>
              {status === "success" && (
                <p className="text-xs text-green-400">✓ Başarıyla kaydoldunuz!</p>
              )}
              {status === "error" && (
                <p className="text-xs text-red-400">✗ Bir hata oluştu. Tekrar deneyin.</p>
              )}
            </form>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold">İletişim</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="mb-2 font-semibold text-primary">Ankara Merkez Ofis:</p>
                <p className="text-gray-400">
                  Prof. Dr. Ahmet Taner Kışlalı Mahallesi<br />
                  2776. Sokak 9/C<br />
                  Çankaya / ANKARA
                </p>
              </div>
              <div>
                <p className="mb-2 font-semibold text-primary">İstanbul Ofis:</p>
                <p className="text-gray-400">
                  Çubuklu Mahallesi<br />
                  Engürübağı Caddesi No: 29/2<br />
                  Beykoz / İSTANBUL
                </p>
              </div>
              <div>
                <a
                  href="tel:08503032699"
                  className="block font-bold text-primary hover:underline"
                >
                  0850 303 26 99
                </a>
              </div>
              <div>
                <Button asChild variant="outline" className="w-full border-white text-white bg-transparent hover:bg-white hover:text-black">
                  <Link href="/iletisim">İletişim</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Partnerships */}
        <div className="my-12 border-t border-gray-800 pt-8">
          <h3 className="mb-6 text-center text-lg font-bold">Stratejik Ortaklıklar</h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-gray-400">
              <span className="text-4xl font-bold">INTEL</span>
            </div>
            <div className="text-gray-400">
              <span className="text-4xl font-bold">AMD</span>
            </div>
            <div className="text-gray-400">
              <span className="text-2xl font-bold">NVIDIA</span>
            </div>
            <div className="text-gray-400">
              <span className="text-2xl">SAMSUNG</span>
            </div>
            <div className="text-gray-400">
              <span className="text-2xl">AUTODESK</span>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <p className="text-center text-sm text-gray-400">
              Copyright © BOXX Bilgisayar Sistemleri San. Tic. Ltd. Şti. {new Date().getFullYear()} | Tüm Hakları Saklıdır
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
