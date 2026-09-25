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
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <GoogleAnalytics />
          {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
            <Script
              async
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
              crossOrigin="anonymous"
              strategy="afterInteractive"
            />
          )}
          <Header locale={locale} />
          <main id="main-content">{children}</main>
          <Footer locale={locale} />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

