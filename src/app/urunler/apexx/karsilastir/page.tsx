"use client";

export const dynamic = "force-dynamic";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";

const apexxProducts = [
  // T PRO-Class
  { id: "t4-pro-x", name: "APEXX T4 PRO-X", processor: "AMD Threadripper PRO 7000WX", cores: "96", memory: "2TB DDR5 ECC", graphics: "4x RTX", class: "T PRO", features: ["AI", "GPU Rendering", "8K Video", "CFD"] },
  { id: "t4-pro", name: "APEXX T4 PRO", processor: "AMD Threadripper PRO 5000WX", cores: "64", memory: "512GB DDR4 ECC", graphics: "3x RTX", class: "T PRO", features: ["3D", "Video", "CAD/CAM", "Veri Analizi"] },
  // T-Class
  { id: "t4", name: "APEXX T4", processor: "AMD Threadripper 7000", cores: "64", memory: "256GB DDR5", graphics: "3x RTX", class: "T", features: ["3D Animasyon", "Video", "Rendering", "Simülasyon"] },
  { id: "t3", name: "APEXX T3", processor: "AMD Threadripper 7000", cores: "32", memory: "128GB DDR5", graphics: "2x RTX", class: "T", features: ["Video", "3D", "Rendering", "Motion"] },
  // W-Class
  { id: "w4", name: "APEXX W4", processor: "Intel Xeon W-3400", cores: "56", memory: "2TB DDR5 ECC", graphics: "4x RTX", class: "W", features: ["GPU Rendering", "AI", "Simülasyon", "Veri"] },
  { id: "w3", name: "APEXX W3", processor: "Intel Xeon W-2400", cores: "24", memory: "512GB DDR5 ECC", graphics: "2x RTX", class: "W", features: ["CAD/CAM", "3D", "Video", "Bilimsel"] },
  // S-Class
  { id: "s4", name: "APEXX S4", processor: "Intel Core Ultra 9", cores: "24", memory: "192GB DDR5", graphics: "2x RTX", class: "S", features: ["CAD", "3D", "Video", "Rendering"] },
  { id: "s3", name: "APEXX S3", processor: "Intel Core Ultra 7", cores: "20", memory: "96GB DDR5", graphics: "RTX", class: "S", features: ["CAD", "Video", "3D", "Adobe CC"] },
  // E-Class
  { id: "e3", name: "APEXX E3", processor: "Intel Core Ultra 5", cores: "14", memory: "64GB DDR5", graphics: "RTX", class: "E", features: ["CAD", "Video", "Grafik", "3D"] },
  // A-Class
  { id: "a4", name: "APEXX A4", processor: "AMD Ryzen 9 9950X", cores: "16", memory: "192GB DDR5", graphics: "2x RTX", class: "A", features: ["3D Rendering", "Video", "Simülasyon", "Motion"] },
  { id: "a3", name: "APEXX A3", processor: "AMD Ryzen 9 9900X", cores: "12", memory: "128GB DDR5", graphics: "RTX", class: "A", features: ["Video", "3D", "Rendering", "Grafik"] },
];

function KarsilastirPageContent() {
  const searchParams = useSearchParams();
  const ids = searchParams.get("ids")?.split(",") || [];
  const products = ids.map(id => apexxProducts.find(p => p.id === id)).filter((p): p is typeof apexxProducts[0] => p !== undefined);

  if (products.length === 0) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-3xl font-bold">Ürün Karşılaştırma</h1>
            <p className="mb-8 text-gray-600">Karşılaştırmak için ürün seçmediniz.</p>
            <Button asChild>
              <Link href="/urunler/apexx"><ArrowLeft className="mr-2 h-4 w-4" />Ürünlere Dön</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button asChild variant="outline">
              <Link href="/urunler/apexx"><ArrowLeft className="mr-2 h-4 w-4" />Ürünlere Dön</Link>
            </Button>
          </div>

          <h1 className="mb-8 text-center text-4xl font-bold">APEXX Karşılaştırma</h1>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="sticky left-0 bg-primary p-4 text-left">Özellik</th>
                  {products.map(p => <th key={p.id} className="p-4">{p.name}</th>)}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="sticky left-0 bg-gray-50 p-4 font-semibold">İşlemci</td>{products.map(p => <td key={p.id} className="p-4 text-sm">{p.processor}</td>)}</tr>
                <tr className="border-b bg-gray-50/50"><td className="sticky left-0 bg-gray-50 p-4 font-semibold">Çekirdek</td>{products.map(p => <td key={p.id} className="p-4 text-sm">{p.cores}</td>)}</tr>
                <tr className="border-b"><td className="sticky left-0 bg-gray-50 p-4 font-semibold">Bellek</td>{products.map(p => <td key={p.id} className="p-4 text-sm">{p.memory}</td>)}</tr>
                <tr className="border-b bg-gray-50/50"><td className="sticky left-0 bg-gray-50 p-4 font-semibold">Grafik</td>{products.map(p => <td key={p.id} className="p-4 text-sm">{p.graphics}</td>)}</tr>
                <tr><td className="sticky left-0 bg-gray-50 p-4 font-semibold">İşlemler</td>{products.map(p => <td key={p.id} className="p-4"><Button asChild size="sm" className="w-full"><Link href="/iletisim">Teklif Al</Link></Button></td>)}</tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function KarsilastirPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-32 w-32 animate-spin rounded-full border-b-2 border-primary"></div>
          <p className="mt-4 text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    }>
      <KarsilastirPageContent />
    </Suspense>
  );
}
