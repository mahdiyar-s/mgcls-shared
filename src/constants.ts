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

/* ─── Brand / identity ──────────────────────────────────────────────── */

/** Customer-facing brand name — MUST match Google Business Profile exactly (NAP). */
export const BUSINESS_NAME = "LAX Car Service - MGCLS" as const;

/** Legal entity — use only for schema `legalName` / vendor forms. NOT "MGCLS Inc." */
export const LEGAL_NAME = "MGCLS Car Service LLC" as const;

/** Alternate brand forms — schema `alternateName` + natural body copy. */
export const ALTERNATE_NAMES = [
  "MGCLS LAX Car Service",
  "LAX Car Service – MGCLS",
  "MGCLS",
] as const;

export const PHONE_DISPLAY = "(855) 255-2557" as const;
export const PHONE_HREF = "tel:+18552552557" as const;
export const EMAIL = "info@mgcls.com" as const;

/** CPUC / TCP licensing (public-safe). */
export const LICENSE_TCP = "TCP #37478" as const;

export const SITE_DOMAIN = "laxcarservicemgcls.com" as const;
export const SITE_URL = "https://www.laxcarservicemgcls.com" as const;

/** Internal iframe-wrapper route for every "Book Now" CTA (never the booking subdomain). */
export const BOOKING_PATH = "/book" as const;

/* ─── Design tokens ─────────────────────────────────────────────────── */

export const BRAND = {
  /** Primary brand green — buttons, icons, accents. Never revert to old #2B6B45. */
  green: "#6a9c7e",
  /** Dark green hover state. */
  greenDark: "#4d7a62",
  /** Dark navy — footer background. */
  navy: "#00263B",
  /** Heading / dark text. */
  textDark: "#111827",
  /** Body text. */
  textBody: "#374151",
  /** Light section background. */
  bgLight: "#F4F4F4",
  white: "#FFFFFF",
} as const;

export const FONTS = {
  heading: "Playfair Display",
  body: "Inter",
} as const;

/* ─── Reviews / rating ──────────────────────────────────────────────── */

/** Google rating — 4.8★ / 168 reviews. Single source of truth across all apps. */
export const AGGREGATE_RATING = {
  "@type": "AggregateRating",
  ratingValue: "4.8",
  reviewCount: "168",
  bestRating: "5",
  worstRating: "1",
} as const;

/* ─── NAP / location ────────────────────────────────────────────────── */

export const POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "8703 S La Tijera Blvd., Suite #209",
  addressLocality: "Los Angeles",
  addressRegion: "CA",
  postalCode: "90045",
  addressCountry: "US",
} as const;

export const GEO_COORDINATES = {
  "@type": "GeoCoordinates",
  latitude: 33.9582473,
  longitude: -118.3935596,
} as const;

export const OPENING_HOURS_SPEC = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
] as const;

/** Legacy string form — only for pages not yet migrated to OPENING_HOURS_SPEC. */
export const OPENING_HOURS_24_7 = "Mo-Su 00:00-23:59" as const;

/* ─── Schema.org identity nodes ─────────────────────────────────────── */

export const SAME_AS = [
  "https://www.facebook.com/laxcarservicemgcls",
  "https://www.instagram.com/mgcls_car_service",
  "https://x.com/mgclslax",
  "https://www.yelp.com/biz/lax-car-service-mgcls-los-angeles-4",
  "https://maps.app.goo.gl/9CGZG5BY9vrkcQYD7",
] as const;

export const HAS_MAP = "https://maps.app.goo.gl/9CGZG5BY9vrkcQYD7" as const;

export const LOCAL_BUSINESS_ID = "https://www.laxcarservicemgcls.com/#localbusiness" as const;
export const ORGANIZATION_ID = "https://www.laxcarservicemgcls.com/#organization" as const;

/** Most specific Schema.org subtype for a CPUC TCP-licensed chauffeur fleet. */
export const LOCAL_BUSINESS_TYPE = ["LimousineService", "LocalBusiness"] as const;

export const LOCAL_BUSINESS_LOGO =
  "https://www.laxcarservicemgcls.com/images/logo-laxcarservice-200.png" as const;
