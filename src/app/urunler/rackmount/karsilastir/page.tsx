"use client";

export const dynamic = "force-dynamic";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const raxxProducts = [
  { id: "raxx-t4", name: "RAXX T4", processor: "AMD Threadripper", cores: "64", memory: "512GB", graphics: "2x NVIDIA RTX" },
  { id: "raxx-w4", name: "RAXX W4", processor: "Intel Xeon W", cores: "56", memory: "2TB", graphics: "4x NVIDIA RTX" },
];

function RaxxKarsilastirPageContent() {
  const searchParams = useSearchParams();
  const ids = searchParams.get("ids")?.split(",") || [];
  const products = ids.map(id => raxxProducts.find(p => p.id === id)).filter((p): p is typeof raxxProducts[0] => p !== undefined);

  if (products.length === 0) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-3xl font-bold">Ürün Karşılaştırma</h1>
            <p className="mb-8 text-gray-600">Karşılaştırmak için ürün seçmediniz.</p>
            <Button asChild>
              <Link href="/urunler/rackmount"><ArrowLeft className="mr-2 h-4 w-4" />Ürünlere Dön</Link>
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
              <Link href="/urunler/rackmount"><ArrowLeft className="mr-2 h-4 w-4" />Ürünlere Dön</Link>
            </Button>
          </div>

          <h1 className="mb-8 text-center text-4xl font-bold">RAXX Karşılaştırma</h1>

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

export default function RaxxKarsilastirPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-32 w-32 animate-spin rounded-full border-b-2 border-primary"></div>
          <p className="mt-4 text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    }>
      <RaxxKarsilastirPageContent />
    </Suspense>
  );
}
