import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://boxx-turkiye.netlify.app'

  // Ana sayfalar
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/neden-boxx`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/destek`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  // Ürün sayfaları
  const productPages = [
    'apexx',
    'creativ',
    'rackmount',
    'helixx',
    'flexx',
  ].map((product) => ({
    url: `${baseUrl}/urunler/${product}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Çözüm sayfaları - Sektörlere göre
  const solutionPages = [
    'yapay-zeka',
    'mimarlik-muhendislik',
    'imalat-tasarim',
    'kamu-egitim-saglik',
    'veri-merkezi',
  ].map((solution) => ({
    url: `${baseUrl}/cozumler/${solution}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Çözüm sayfaları - Yazılıma göre
  const softwareSolutions = [
    'autocad',
    'solidworks',
    'revit',
    'civil-3d',
    '3ds-max',
    'cinema-4d',
    'avid',
    'ansys',
  ].map((software) => ({
    url: `${baseUrl}/cozumler/${software}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Blog sayfaları
  const blogPosts = [
    'apexx-t4-pro-x-lansman',
    'windows-10-destek-sonu',
    'amd-threadripper-9000-inceleme',
    'creativ-nvidia-geforce-rtx-50',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...productPages,
    ...solutionPages,
    ...softwareSolutions,
    ...blogPosts,
  ]
}
