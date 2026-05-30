/**
 * @mgcls/shared/types — shared cross-app TypeScript contracts.
 *
 * - Portal pricing API contract (R7 — FROZEN; new fields arrive only as optional
 *   siblings). Mirrors mgcls-portal `/api/v1/{rates,hourly-rates,config}`.
 * - UserRole — the canonical admin role union (matches the Neon `users` enum +
 *   mgcls-drivers + mgcls-portal). App code should reference this; the Postgres
 *   enum remains the source of truth for persistence.
 *
 * Types only — this module emits no runtime values.
 */

/* ─── Auth ─────────────────────────────────────────────────── */

/** Canonical admin role union — matches the live Neon `UserRole` enum exactly. */
export type UserRole =
  | "ADMIN"
  | "DISPATCHER"
  | "STAFF"
  | "PLATFORM_ADMIN"
  | "SUPER_ADMIN";

/* ─── Portal pricing API contract (R7 — FROZEN) ────────────── */

export interface PortalAppliedCampaign {
  id: string;
  name: string;
  bannerText: string | null;
  percentAdd: number;
}

export interface PortalHourlyRate {
  /** Customer-facing display name ("Sedan", "Premium Sedan", …). */
  vehicleType: string;
  /** Internal DB name ("Luxury Sedan", "New Mercedes Benz S Class", …). */
  vehicleTypeDbName: string;
  /** Pre-campaign rate. */
  baseRate: number;
  /** Post-campaign rate (what to display). */
  adjustedRate: number;
  minimumHours: number;
  appliedCampaigns: PortalAppliedCampaign[];
  totalCampaignPercent: number;
}

export interface PortalHourlyRatesResponse {
  count: number;
  rates: PortalHourlyRate[];
}

export interface PortalZoneRateFlat {
  city: string;
  vehicleType: string;
  vehicleTypeDbName: string;
  maxPassengers: number;
  price: number;
  direction: "FROM_LAX" | "TO_LAX";
}

export interface PortalZoneRatesFlatResponse {
  direction: "FROM_LAX" | "TO_LAX";
  count: number;
  data: PortalZoneRateFlat[];
}

export interface PortalConfigVehicleType {
  name: string;
  dbName: string;
  maxPassengers: number;
  sortOrder: number;
  hourlyRate: number;
  minimumHours: number;
}

export interface PortalConfigResponse {
  tax: { percent: number };
  tip: { options: number[]; defaultDisplay: number };
  afterMidnight: { fee: number; startHour: number };
  vehicleTypes: PortalConfigVehicleType[];
  /** Optional — set once the portal exposes meet_and_greet_fee on /api/v1/config. */
  meetAndGreetFee?: number;
}

/* ─── Library-side helpers ─────────────────────────────────── */

/** Hourly tier — what /hourly-rates renders per vehicle. */
export interface HourlyTier {
  /** DB name — stable key joining portal data to display rows. */
  dbName: string;
  /** Hourly rate in USD (already campaign-adjusted). */
  hourlyUsd: number;
  minimumHours: number;
}

/** Zone fare — LAX → city or city → LAX flat rate. */
export interface ZoneFare {
  city: string;
  vehicleTypeDbName: string;
  priceUsd: number;
}
