import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin
        const today = new Date().toISOString().split('T')[0]
        const pages = [
          { path: '/', priority: '1.0' },
          { path: '/about', priority: '0.8' },
          { path: '/products', priority: '0.9' },
          { path: '/certifications', priority: '0.6' },
          { path: '/contact', priority: '0.7' },
        ]
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...pages.flatMap((page) => [
            '  <url>',
            `    <loc>${origin}${page.path}</loc>`,
            `    <lastmod>${today}</lastmod>`,
            '    <changefreq>weekly</changefreq>',
            `    <priority>${page.priority}</priority>`,
            '  </url>',
          ]),
          '</urlset>',
        ].join('\n')
        return new Response(xml, {
          headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
          },
        })
      },
    },
  },
})
