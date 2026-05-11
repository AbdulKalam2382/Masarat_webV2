import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://masaratkwt.com';
  
  // Static routes
  // Note: We include the 'en' prefix as it is the current only locale
  const routes = [
    '',
    '/about',
    '/career',
    '/clients',
    '/contact',
    '/insights',
    '/services',
    '/solutions',
    '/solutions/ai-data',
    '/solutions/ai-solutions',
    '/solutions/cybersecurity',
    '/solutions/digital-transformation',
    '/solutions/elv-smart-systems',
    '/solutions/mission-critical',
  ].map((route) => ({
    url: `${baseUrl}/en${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Add the root redirect if necessary
  routes.push({
    url: `${baseUrl}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  });

  return routes;
}
