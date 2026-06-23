# @mgcls/shared

Public brand + schema constants (business name, phone, address, rating, colors,
fonts). Every value here already appears in the live website's public page schema.

Plain, dependency-free TypeScript — framework-agnostic.

## Install

Pinned to a release tarball (no registry, no auth, CI-safe):

```jsonc
// package.json
"dependencies": {
  "@mgcls/shared": "https://github.com/mahdiyar-s/mgcls-shared/archive/refs/tags/v0.3.0.tar.gz"
}
```

```ts
import { BUSINESS_NAME, PHONE_DISPLAY, BRAND, AGGREGATE_RATING } from "@mgcls/shared/constants";
```

## Rules

- **Public data only.** Never add private data (EIN, API keys, secrets) — this package ships to browsers.
- Change a value → `npm run build` → bump `version` → tag the release → update the tarball URL where it's used.
- Keep it dependency-free (plain TS constants only).
