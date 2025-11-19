export default function sitemap() {
  const baseUrl = 'https://rahmetlabs.com';
  const currentDate = new Date().toISOString();

  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/?lang=en`,
          ru: `${baseUrl}/?lang=ru`,
          kk: `${baseUrl}/?lang=kk`,
        },
      },
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/services?lang=en`,
          ru: `${baseUrl}/services?lang=ru`,
          kk: `${baseUrl}/services?lang=kk`,
        },
      },
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/portfolio?lang=en`,
          ru: `${baseUrl}/portfolio?lang=ru`,
          kk: `${baseUrl}/portfolio?lang=kk`,
        },
      },
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/about?lang=en`,
          ru: `${baseUrl}/about?lang=ru`,
          kk: `${baseUrl}/about?lang=kk`,
        },
      },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/contact?lang=en`,
          ru: `${baseUrl}/contact?lang=ru`,
          kk: `${baseUrl}/contact?lang=kk`,
        },
      },
    },
  ];

  return routes;
}

