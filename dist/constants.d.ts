/**
 * @mgcls/shared — canonical brand + schema constants for all MGCLS apps.
 *
 * SINGLE SOURCE OF TRUTH. Do not hardcode these values in app code — import them.
 * Values are seeded verbatim from the marketing site's `app/lib/jsonld.ts` (the
 * historical source of truth) so every consuming app renders identical output.
 * The marketing website itself is NOT a consumer yet — its content is owned and
 * changed separately. The 5 other apps import from here.
 *
 * NEVER add private data (EIN, API keys, secrets) — this package ships to browsers.
 */
/** Customer-facing brand name — MUST match Google Business Profile exactly (NAP). */
export declare const BUSINESS_NAME: "LAX Car Service - MGCLS";
/** Legal entity — use only for schema `legalName` / vendor forms. NOT "MGCLS Inc." */
export declare const LEGAL_NAME: "MGCLS Car Service LLC";
/** Alternate brand forms — schema `alternateName` + natural body copy. */
export declare const ALTERNATE_NAMES: readonly ["MGCLS LAX Car Service", "LAX Car Service – MGCLS", "MGCLS"];
export declare const PHONE_DISPLAY: "(855) 255-2557";
export declare const PHONE_HREF: "tel:+18552552557";
export declare const EMAIL: "info@mgcls.com";
/** CPUC / TCP licensing (public-safe). */
export declare const LICENSE_TCP: "TCP #37478";
export declare const SITE_DOMAIN: "laxcarservicemgcls.com";
export declare const SITE_URL: "https://www.laxcarservicemgcls.com";
/** Internal iframe-wrapper route for every "Book Now" CTA (never the booking subdomain). */
export declare const BOOKING_PATH: "/book";
export declare const BRAND: {
    /** Primary brand green — buttons, icons, accents. Never revert to old #2B6B45. */
    readonly green: "#6a9c7e";
    /** Dark green hover state. */
    readonly greenDark: "#4d7a62";
    /** Dark navy — footer background. */
    readonly navy: "#00263B";
    /** Heading / dark text. */
    readonly textDark: "#111827";
    /** Body text. */
    readonly textBody: "#374151";
    /** Light section background. */
    readonly bgLight: "#F4F4F4";
    readonly white: "#FFFFFF";
};
export declare const FONTS: {
    readonly heading: "Playfair Display";
    readonly body: "Inter";
};
/** Google rating — 4.8★ / 168 reviews. Single source of truth across all apps. */
export declare const AGGREGATE_RATING: {
    readonly "@type": "AggregateRating";
    readonly ratingValue: "4.8";
    readonly reviewCount: "168";
    readonly bestRating: "5";
    readonly worstRating: "1";
};
export declare const POSTAL_ADDRESS: {
    readonly "@type": "PostalAddress";
    readonly streetAddress: "8703 S La Tijera Blvd., Suite #209";
    readonly addressLocality: "Los Angeles";
    readonly addressRegion: "CA";
    readonly postalCode: "90045";
    readonly addressCountry: "US";
};
export declare const GEO_COORDINATES: {
    readonly "@type": "GeoCoordinates";
    readonly latitude: 33.9582473;
    readonly longitude: -118.3935596;
};
export declare const OPENING_HOURS_SPEC: readonly [{
    readonly "@type": "OpeningHoursSpecification";
    readonly dayOfWeek: readonly ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    readonly opens: "00:00";
    readonly closes: "23:59";
}];
/** Legacy string form — only for pages not yet migrated to OPENING_HOURS_SPEC. */
export declare const OPENING_HOURS_24_7: "Mo-Su 00:00-23:59";
export declare const SAME_AS: readonly ["https://www.facebook.com/laxcarservicemgcls", "https://www.instagram.com/mgcls_car_service", "https://x.com/mgclslax", "https://www.yelp.com/biz/lax-car-service-mgcls-los-angeles-4", "https://maps.app.goo.gl/9CGZG5BY9vrkcQYD7"];
export declare const HAS_MAP: "https://maps.app.goo.gl/9CGZG5BY9vrkcQYD7";
export declare const LOCAL_BUSINESS_ID: "https://www.laxcarservicemgcls.com/#localbusiness";
export declare const ORGANIZATION_ID: "https://www.laxcarservicemgcls.com/#organization";
/** Most specific Schema.org subtype for a CPUC TCP-licensed chauffeur fleet. */
export declare const LOCAL_BUSINESS_TYPE: readonly ["LimousineService", "LocalBusiness"];
export declare const LOCAL_BUSINESS_LOGO: "https://www.laxcarservicemgcls.com/images/logo-laxcarservice-200.png";
