"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-5xl font-bold lg:text-6xl">İletişime Geçin</h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-100">
              Profesyonel iş istasyonu ihtiyaçlarınız için uzmanlarımızla görüşün.
              Size en uygun çözümü bulmak için buradayız.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex items-center justify-center gap-4 rounded-lg bg-primary/10 p-6">
                <Phone className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-sm font-semibold text-gray-600">Telefon</div>
                  <a href="tel:08503032699" className="text-xl font-bold text-primary hover:underline">
                    0850 303 26 99
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 rounded-lg bg-primary/10 p-6">
                <Mail className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-sm font-semibold text-gray-600">E-posta</div>
                  <a
                    href="mailto:info@boxxturkiye.com"
                    className="text-lg font-bold text-primary hover:underline"
                  >
                    info@boxxturkiye.com
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 rounded-lg bg-primary/10 p-6">
                <Clock className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-sm font-semibold text-gray-600">Çalışma Saatleri</div>
                  <div className="font-bold text-gray-900">Pzt-Cum: 09:00 - 18:00</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Offices */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900">Mesaj Gönderin</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700">
                        Adınız Soyadınız *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Adınız Soyadınız"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
                        E-posta *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ornek@email.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-700">
                        Telefon
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0555 123 45 67"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-semibold text-gray-700">
                        Şirket
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Şirket Adı"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-gray-700">
                      Konu *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Mesajınızın konusu"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-700">
                      Mesajınız *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mesajınızı buraya yazın..."
                      rows={6}
                      className="w-full"
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="rounded-lg bg-green-50 p-4 text-green-800">
                      ✓ Mesajınız başarıyla gönderildi! En kısa sürede size geri dönüş yapacağız.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="rounded-lg bg-red-50 p-4 text-red-800">
                      ✗ Bir hata oluştu. Lütfen tekrar deneyin veya telefon ile iletişime geçin.
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      "Gönderiliyor..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Gönder
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Office Locations */}
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900">Ofislerimiz</h2>
                <div className="space-y-6">
                  {/* Ankara Office */}
                  <div className="rounded-lg bg-white p-6 shadow-lg">
                    <div className="mb-4 flex items-start gap-3">
                      <MapPin className="h-6 w-6 flex-shrink-0 text-primary" />
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">Ankara Merkez Ofis</h3>
                        <div className="space-y-1 text-gray-600">
                          <p>Prof. Dr. Ahmet Taner Kışlalı Mahallesi</p>
                          <p>27/76, Sokak 9/C</p>
                          <p>Çankaya / ANKARA</p>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-primary" />
                            <a href="tel:08503032699" className="text-primary hover:underline">
                              0850 303 26 99
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-primary" />
                            <a href="mailto:info@boxxturkiye.com" className="text-primary hover:underline">
                              info@boxxturkiye.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Istanbul Office */}
                  <div className="rounded-lg bg-white p-6 shadow-lg">
                    <div className="mb-4 flex items-start gap-3">
                      <MapPin className="h-6 w-6 flex-shrink-0 text-primary" />
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">İstanbul Ofis</h3>
                        <div className="space-y-1 text-gray-600">
                          <p>Çubuklu Mahallesi</p>
                          <p>Engürübağ Caddesi No: 29/2</p>
                          <p>Beykoz / İSTANBUL</p>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-primary" />
                            <a href="tel:08503032699" className="text-primary hover:underline">
                              0850 303 26 99
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-primary" />
                            <a href="mailto:info@boxxturkiye.com" className="text-primary hover:underline">
                              info@boxxturkiye.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="rounded-lg bg-primary/10 p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <h3 className="font-bold text-gray-900">Çalışma Saatlerimiz</h3>
                    </div>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>Pazartesi - Cuma:</span>
                        <span className="font-semibold">09:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cumartesi - Pazar:</span>
                        <span className="font-semibold">Kapalı</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
              Acil Destek mi Lazım?
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              Teknik destek için hemen arayın
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="tel:08503032699">
                <Phone className="mr-2 h-5 w-5" />
                0850 303 26 99
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
