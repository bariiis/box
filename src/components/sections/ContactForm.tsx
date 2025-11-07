"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold text-gray-900">
        Teklif veya Danışma Talebi
      </h2>
      <p className="mb-8 text-gray-600">
        Aşağıdaki formu doldurun, uzman ekibimiz en kısa sürede size dönüş yapacaktır.
      </p>

      {submitStatus === "success" && (
        <div className="mb-6 rounded-lg bg-green-50 p-4 text-green-800">
          <p className="font-semibold">Mesajınız başarıyla gönderildi!</p>
          <p className="text-sm">En kısa sürede size dönüş yapacağız.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-2 block text-sm font-semibold text-gray-700">
              Ad *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="mb-2 block text-sm font-semibold text-gray-700">
              Soyad *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
              E-posta *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-700">
              Telefon *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-semibold text-gray-700">
            Şirket Adı
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-gray-700">
            Konu *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Konu seçiniz</option>
            <option value="teklif">Ürün Teklifi Talebi</option>
            <option value="danisma">Teknik Danışma</option>
            <option value="destek">Teknik Destek</option>
            <option value="kurumsal">Kurumsal Satış</option>
            <option value="diger">Diğer</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-700">
            Mesajınız *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="İhtiyaçlarınızı ve sorularınızı detaylı olarak açıklayın..."
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
        </Button>

        <p className="text-sm text-gray-500">
          * İşaretli alanlar zorunludur
        </p>
      </form>
    </div>
  );
}
