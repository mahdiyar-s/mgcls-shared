"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOCAL_BUSINESS_LOGO = exports.LOCAL_BUSINESS_TYPE = exports.ORGANIZATION_ID = exports.LOCAL_BUSINESS_ID = exports.HAS_MAP = exports.SAME_AS = exports.OPENING_HOURS_24_7 = exports.OPENING_HOURS_SPEC = exports.GEO_COORDINATES = exports.POSTAL_ADDRESS = exports.AGGREGATE_RATING = exports.FONTS = exports.BRAND = exports.BOOKING_PATH = exports.SITE_URL = exports.SITE_DOMAIN = exports.LICENSE_TCP = exports.EMAIL = exports.PHONE_HREF = exports.PHONE_DISPLAY = exports.ALTERNATE_NAMES = exports.LEGAL_NAME = exports.BUSINESS_NAME = void 0;
/* ─── Brand / identity ──────────────────────────────────────────────── */
/** Customer-facing brand name — MUST match Google Business Profile exactly (NAP). */
exports.BUSINESS_NAME = "LAX Car Service - MGCLS";
/** Legal entity — use only for schema `legalName` / vendor forms. NOT "MGCLS Inc." */
exports.LEGAL_NAME = "MGCLS Car Service LLC";
/** Alternate brand forms — schema `alternateName` + natural body copy. */
exports.ALTERNATE_NAMES = [
    "MGCLS LAX Car Service",
    "LAX Car Service – MGCLS",
    "MGCLS",
];
exports.PHONE_DISPLAY = "(855) 255-2557";
exports.PHONE_HREF = "tel:+18552552557";
exports.EMAIL = "info@mgcls.com";
/** CPUC / TCP licensing (public-safe). */
exports.LICENSE_TCP = "TCP #37478";
exports.SITE_DOMAIN = "laxcarservicemgcls.com";
exports.SITE_URL = "https://www.laxcarservicemgcls.com";
/** Internal iframe-wrapper route for every "Book Now" CTA (never the booking subdomain). */
exports.BOOKING_PATH = "/book";
/* ─── Design tokens ─────────────────────────────────────────────────── */
exports.BRAND = {
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
};
exports.FONTS = {
    heading: "Playfair Display",
    body: "Inter",
};
/* ─── Reviews / rating ──────────────────────────────────────────────── */
/** Google rating — 4.8★ / 168 reviews. Single source of truth across all apps. */
exports.AGGREGATE_RATING = {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "168",
    bestRating: "5",
    worstRating: "1",
};
/* ─── NAP / location ────────────────────────────────────────────────── */
exports.POSTAL_ADDRESS = {
    "@type": "PostalAddress",
    streetAddress: "8703 S La Tijera Blvd., Suite #209",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    postalCode: "90045",
    addressCountry: "US",
};
exports.GEO_COORDINATES = {
    "@type": "GeoCoordinates",
    latitude: 33.9582473,
    longitude: -118.3935596,
};
exports.OPENING_HOURS_SPEC = [
    {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
    },
];
/** Legacy string form — only for pages not yet migrated to OPENING_HOURS_SPEC. */
exports.OPENING_HOURS_24_7 = "Mo-Su 00:00-23:59";
/* ─── Schema.org identity nodes ─────────────────────────────────────── */
exports.SAME_AS = [
    "https://www.facebook.com/laxcarservicemgcls",
    "https://www.instagram.com/mgcls_car_service",
    "https://x.com/mgclslax",
    "https://www.yelp.com/biz/lax-car-service-mgcls-los-angeles-4",
    "https://maps.app.goo.gl/9CGZG5BY9vrkcQYD7",
];
exports.HAS_MAP = "https://maps.app.goo.gl/9CGZG5BY9vrkcQYD7";
exports.LOCAL_BUSINESS_ID = "https://www.laxcarservicemgcls.com/#localbusiness";
exports.ORGANIZATION_ID = "https://www.laxcarservicemgcls.com/#organization";
/** Most specific Schema.org subtype for a CPUC TCP-licensed chauffeur fleet. */
exports.LOCAL_BUSINESS_TYPE = ["LimousineService", "LocalBusiness"];
exports.LOCAL_BUSINESS_LOGO = "https://www.laxcarservicemgcls.com/images/logo-laxcarservice-200.png";
