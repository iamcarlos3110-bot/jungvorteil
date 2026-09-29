import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'JungVorteil',
    short_name: 'JungVorteil',
    description: 'Schweizer Vorteilsportal für Jugendliche und Studierende',
    start_url: '/de',
    display: 'standalone',
    background_color: '#3F5E39',
    theme_color: '#3F5E39',
    icons: [
      {
        src: '/favicon-48x48.png?v=3',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/favicon-96x96.png?v=3',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/favicon-192x192.png?v=3',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-512x512.png?v=3',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon.svg?v=3',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
