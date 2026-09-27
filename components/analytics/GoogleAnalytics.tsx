'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    // Check and update consent based on user preferences in localStorage
    const checkConsent = () => {
      const analyticsConsent = localStorage.getItem('jv_analytics_consent') === 'true';
      const advertisingConsent = localStorage.getItem('jv_advertising_consent') === 'true';

      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: analyticsConsent ? 'granted' : 'denied',
          ad_storage: advertisingConsent ? 'granted' : 'denied',
          ad_user_data: advertisingConsent ? 'granted' : 'denied',
          ad_personalization: advertisingConsent ? 'granted' : 'denied',
        });
      }
    };
    
    checkConsent();
    window.addEventListener('storage', checkConsent);
    window.addEventListener('jv_consent_updated', checkConsent);

    return () => {
      window.removeEventListener('storage', checkConsent);
      window.removeEventListener('jv_consent_updated', checkConsent);
    };
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
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied'
          });
          
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}

