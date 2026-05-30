# @mgcls/shared

Single source of truth for **brand + schema constants** shared across the MGCLS apps.
Consumed as an npm **git-dependency** — no registry, no publish step:

```jsonc
// in a consuming app's package.json
"dependencies": {
  "@mgcls/shared": "github:mahdiyar-s/mgcls-shared#main"
}
```

```ts
import { BUSINESS_NAME, PHONE_DISPLAY, BRAND, AGGREGATE_RATING } from "@mgcls/shared/constants";
```

## Consumers

- ✅ `mgcls-portal`, `mgcls-drivers`, `mgcls-concierge`, `mgcls-booking`, `mgcls-seo-agent`
- ⏸️ The marketing **website** is intentionally **not** a consumer (its content is owned/changed
  separately). Values here are seeded from the site's `app/lib/jsonld.ts` so output stays identical.

## Rules

- **Never** put private data here (EIN, API keys, secrets) — this package ships to browsers.
- Change a value → bump `version` → `npm update @mgcls/shared` in each app.
- Keep it dependency-free and framework-agnostic (plain TS constants/types only).

## Roadmap

`constants` ships first. Next: `@mgcls/shared/types` (pricing contract, roles), `@mgcls/shared/utils`
(LA-timezone date format, status colors), `@mgcls/shared/env` (zod env validation).
