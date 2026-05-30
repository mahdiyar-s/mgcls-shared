"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
