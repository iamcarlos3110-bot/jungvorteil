'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    // Check consent on mount and setup listeners if needed
    const checkConsent = () => {
      const consent = localStorage.getItem('jv_analytics_consent') === 'true';
      if (consent && gaId) {
        window.gtag?.('consent', 'update', {
          analytics_storage: 'granted'
        });
      }
    };
    
    checkConsent();
    window.addEventListener('storage', checkConsent);
    return () => window.removeEventListener('storage', checkConsent);
  }, [gaId]);

  if (!gaId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied'
          });
          
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
