import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/lib/i18n/routing';
import '../../globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import CookieBanner from '@/components/ui/CookieBanner';
import Script from 'next/script';
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://jungvorteil.ch"),
  alternates: {
    canonical: "./",
    languages: {
      "de-CH": "/de",
      "fr-CH": "/fr",
      "it-CH": "/it",
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=3', sizes: '48x48' },
      { url: '/favicon-48x48.png?v=3', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-192x192.png?v=3', sizes: '192x192', type: 'image/png' },
      { url: '/icon.svg?v=3', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=3', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json?v=3',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}


export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as 'de' | 'fr' | 'it')) {
    notFound();
  }
  
  const messages = await getMessages();
  
  return (
    <html lang={locale} className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/favicon-48x48.png?v=3" sizes="48x48" type="image/png" />
        <link rel="icon" href="/favicon-192x192.png?v=3" sizes="192x192" type="image/png" />
        <link rel="icon" href="/icon.svg?v=3" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" />
        <link rel="manifest" href="/manifest.json?v=3" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <GoogleAnalytics />
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-5821896155002887"}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
          <Header locale={locale} />
          <main id="main-content">{children}</main>
          <Footer locale={locale} />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

