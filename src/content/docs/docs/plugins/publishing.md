---
title: "Publishing Plugins"
description: "How to package and publish a tokentop plugin to npm."
---

Once your plugin is ready, you can publish it to npm so other tokentop users can install it.

## Prerequisites

Your plugin should:

1. Depend on `@tokentop/plugin-sdk` for types and helpers
2. Export a default plugin object matching one of the plugin interfaces
3. Include a clear `package.json` with proper metadata

## Package setup

```json
{
  "name": "tokentop-provider-my-service",
  "version": "1.0.0",
  "description": "tokentop provider plugin for My Service",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "keywords": ["tokentop", "tokentop-plugin", "tokentop-provider"],
  "peerDependencies": {
    "@tokentop/plugin-sdk": ">=1.0.0"
  }
}
```

## Naming conventions

Follow the naming conventions so tokentop and its users can discover your plugin:

| Tier | Pattern | Example |
|------|---------|---------|
| Community | `tokentop-{type}-<name>` | `tokentop-provider-replicate` |
| Scoped | `@scope/tokentop-{type}-<name>` | `@myname/tokentop-theme-catppuccin` |

The `@tokentop/*` scope is reserved for official plugins.

Replace `{type}` with one of: `provider`, `agent`, `theme`, `notification`.

## Testing before publishing

Use the plugin SDK's test harness to validate your plugin works correctly:

```typescript
import { createTestHarness } from '@tokentop/plugin-sdk/testing';
import myPlugin from './index';

const harness = createTestHarness(myPlugin);
// Run assertions against harness methods
```

You can also test locally by loading your plugin with the `--plugin` flag:

```bash
ttop --plugin ./path-to-your-plugin
```

## Publishing

```bash
npm publish
```

Once published, users install your plugin by adding it to their config:

```json
{
  "plugins": {
    "npm": ["tokentop-provider-my-service"]
  }
}
```

## Keywords

Include these keywords in your `package.json` so users can find your plugin:

- `tokentop`
- `tokentop-plugin`
- `tokentop-{type}` (e.g., `tokentop-provider`, `tokentop-theme`)
