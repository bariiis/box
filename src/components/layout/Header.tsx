"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Phone, Search, ShoppingCart } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-[]">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between bg-[]">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://ugc.same-assets.com/gBjZ50wYqjejFe0Aevojx-pTa7OWwloH.svg"
              alt="BOXX Türkiye"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Ana Sayfa
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Çözümler
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[850px] gap-3 p-6">
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
                            Sektörlere Göre
                          </h3>
                          <ul className="space-y-2">
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/cozumler/yapay-zeka"
                                  className="block rounded-md p-2 text-sm hover:bg-accent"
                                >
                                  Yapay Zeka ve Derin Öğrenme
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/cozumler/mimarlik-muhendislik"
                                  className="block rounded-md p-2 text-sm hover:bg-accent"
                                >
                                  Mimarlık, Mühendislik ve İnşaat
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/cozumler/imalat-tasarim"
                                  className="block rounded-md p-2 text-sm hover:bg-accent"
                                >
                                  İmalat ve Ürün Tasarımı
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/cozumler/medya-eglence"
                                  className="block rounded-md p-2 text-sm hover:bg-accent"
                                >
                                  Medya ve Eğlence
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/cozumler/kamu-egitim-saglik"
                                  className="block rounded-md p-2 text-sm hover:bg-accent"
                                >
                                  Kamu, Eğitim ve Sağlık
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/cozumler/veri-merkezi"
                                  className="block rounded-md p-2 text-sm hover:bg-accent"
                                >
                                  Veri Merkezi Çözümler
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
                            CAD & Tasarım
                          </h3>
                          <ul className="space-y-2">
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/cozumler/autocad"
                                  className="block rounded-md p-2 text-sm hover:bg-accent"
                                >
                                  AutoCAD
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/cozumler/solidworks"
                                  className="block rounded-md p-2 text-sm hover:bg-accent"
                                >
                                  SOLIDWORKS
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/cozumler/revit"
                                  className="block rounded-md p-2 text-sm hover:bg-accent"
                                >
                                  Revit
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/cozumler/civil-3d"
                                  className="block rounded-md p-2 text-sm hover:bg-accent"
                                >
                                  Civil 3D
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/cozumler/lumion"
                                  className="block rounded-md p-2 text-sm hover:bg-accent"
                                >
                                  Lumion
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
                            Medya & Simulasyon
                          </h3>
                          <ul className="space-y-2">
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/cozumler/3ds-max"
                                  className="block rounded-md p-2 text-sm hover:bg-accent"
                                >
                                  3ds Max
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/cozumler/cinema-4d"
                                  className="block rounded-md p-2 text-sm hover:bg-accent"
                                >
                                  Cinema 4D
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/cozumler/avid"
                                  className="block rounded-md p-2 text-sm hover:bg-accent"
                                >
                                  Avid Media Composer
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/cozumler/ansys"
                                  className="block rounded-md p-2 text-sm hover:bg-accent"
                                >
                                  ANSYS
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/cozumler/solidworks-simulation"
                                  className="block rounded-md p-2 text-sm hover:bg-accent"
                                >
                                  SOLIDWORKS Simulation
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Ürünler
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[700px] gap-3 p-6">
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
                            Masaüstü İş İstasyonları
                          </h3>
                          <ul className="space-y-2">
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/urunler/apexx"
                                  className="block rounded-md p-2 text-sm hover:bg-accent"
                                >
                                  APEXX Serisi
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
                            Creator PC
                          </h3>
                          <ul className="space-y-2">
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/urunler/creativ"
                                  className="block rounded-md p-2 text-sm hover:bg-accent"
                                >
                                  CREATIV Serisi
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="mb-3 text-sm font-semibold text-muted-foreground">
                            Sunucular & Veri Merkezi
                          </h3>
                          <ul className="space-y-2">
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/urunler/rackmount"
                                  className="block rounded-md p-2 text-sm hover:bg-accent"
                                >
                                  RAXX Rackmount İş İstasyonları
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/urunler/helixx"
                                  className="block rounded-md p-2 text-sm hover:bg-accent"
                                >
                                  HELIXX RTX PRO Sunucular
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/urunler/flexx"
                                  className="block rounded-md p-2 text-sm hover:bg-accent"
                                >
                                  FLEXX Veri Merkezi
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/neden-boxx" className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Neden BOXX?
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/blog" className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Blog
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/hakkimizda" className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Hakkımızda
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/destek" className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Destek
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/iletisim" className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      İletişim
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:08503032699"
              className="hidden items-center space-x-2 text-sm font-semibold text-primary lg:flex"
            >
              <Phone className="h-4 w-4" />
              <span>0850 303 26 99</span>
            </a>

            <Button asChild className="hidden lg:inline-flex">
              <Link href="/iletisim">Uzmanla Görüş</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-96">
                <SheetHeader>
                  <SheetTitle>
                    <Image
                      src="/logos/BOXX_Logo_BLUE.svg"
                      alt="BOXX Türkiye"
                      width={100}
                      height={33}
                      className="h-8 w-auto"
                    />
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col space-y-4">
                  <Link
                    href="/cozumler"
                    className="text-lg font-medium hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Çözümler
                  </Link>
                  <Link
                    href="/urunler"
                    className="text-lg font-medium hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Ürünler
                  </Link>
                  <Link
                    href="/neden-boxx"
                    className="text-lg font-medium hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Neden BOXX?
                  </Link>
                  <Link
                    href="/blog"
                    className="text-lg font-medium hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/hakkimizda"
                    className="text-lg font-medium hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Hakkımızda
                  </Link>
                  <Link
                    href="/destek"
                    className="text-lg font-medium hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Destek
                  </Link>
                  <div className="!mt-8 space-y-4">
                    <a
                      href="tel:08503032699"
                      className="flex items-center space-x-2 text-primary"
                    >
                      <Phone className="h-5 w-5" />
                      <span className="font-semibold">0850 303 26 99</span>
                    </a>
                    <Button asChild className="w-full">
                      <Link href="/iletisim" onClick={() => setIsOpen(false)}>
                        Uzmanla Görüş
                      </Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
