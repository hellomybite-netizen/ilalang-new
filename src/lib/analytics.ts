const GOOGLE_ADS_WHATSAPP_CONVERSION = 'AW-17725475846/cahoCNq-uKIdEIaYlYRC';

type TrackingWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
  fbq?: (
    command: 'track',
    eventName: 'Lead' | 'PageView',
    parameters?: Record<string, unknown>,
  ) => void;
  gtag?: (
    command: 'event',
    eventName: string,
    parameters?: Record<string, unknown>,
  ) => void;
};

function trackingWindow() {
  return window as TrackingWindow;
}

export function trackMetaPageView() {
  trackingWindow().fbq?.('track', 'PageView');
}

export function trackWhatsAppLead({
  landingPage,
  ctaPosition,
  includeGoogleAdsConversion = false,
}: {
  landingPage: string;
  ctaPosition: string;
  includeGoogleAdsConversion?: boolean;
}) {
  const browserWindow = trackingWindow();

  browserWindow.dataLayer?.push({
    event: 'generate_lead',
    lead_method: 'whatsapp',
    landing_page: landingPage,
    cta_position: ctaPosition,
  });

  browserWindow.fbq?.('track', 'Lead', {
    content_name: 'WhatsApp Consultation',
    content_category: 'Architecture Consultation',
    landing_page: landingPage,
    cta_position: ctaPosition,
  });

  if (includeGoogleAdsConversion) {
    browserWindow.gtag?.('event', 'conversion', {
      send_to: GOOGLE_ADS_WHATSAPP_CONVERSION,
    });
  }
}
