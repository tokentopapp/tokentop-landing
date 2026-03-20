---
title: "Configuration"
description: "How to configure tokentop's theme, plugins, and budget settings."
---

tokentop works out of the box with zero configuration. It auto-discovers your provider credentials from installed tools (OpenCode, Claude Code, Gemini CLI, etc.) and environment variables, so you can just run `ttop` and see your usage data immediately.

All settings can be adjusted directly inside the app by pressing `,` (comma) to open Settings. You never need to touch a config file unless you want to.

That said, if you prefer editing config files directly, tokentop stores its settings at `~/.config/tokentop/config.json`.

## Config location

- **macOS/Linux**: `~/.config/tokentop/config.json`
- **Windows**: `%APPDATA%\tokentop\config.json`

The file is created automatically the first time you change a setting in the app. You only need fields you want to override — everything else uses the defaults shown below.

## Full config.json reference

Here is the complete configuration file with every field set to its default value:

```json
{
  "configVersion": 1,
  "refresh": {
    "intervalMs": 60000,
    "pauseAutoRefresh": false,
    "staleThresholdMs": 300000
  },
  "display": {
    "defaultTimeWindow": "1h",
    "sidebarCollapsed": false,
    "timeFormat": "24h",
    "numberFormat": "compact",
    "sparkline": {
      "style": "braille",
      "orientation": "up",
      "showBaseline": true
    },
    "theme": "tokyo-night",
    "colorScheme": "auto"
  },
  "notifications": {
    "toastsEnabled": true,
    "soundEnabled": true
  },
  "budgets": {
    "daily": null,
    "weekly": null,
    "monthly": null,
    "currency": "USD"
  },
  "alerts": {
    "warningPercent": 80,
    "criticalPercent": 95
  },
  "providers": {
    "hideUnconfigured": false
  },
  "plugins": {
    "local": [],
    "npm": [],
    "disabled": []
  },
  "pluginConfig": {}
}
```

## Field reference

### `configVersion`

| | |
|---|---|
| **Type** | `number` |
| **Default** | `1` |

Internal schema version. Do not change this manually — tokentop uses it for future config migrations.

---

### `refresh`

Controls how often tokentop polls providers for new usage data.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `intervalMs` | `number` | `60000` | Milliseconds between provider polling cycles. |
| `pauseAutoRefresh` | `boolean` | `false` | When `true`, disables automatic polling. You can still refresh manually with `r`. |
| `staleThresholdMs` | `number` | `300000` | Milliseconds before data is considered stale and highlighted in the UI. |

---

### `display`

Controls the appearance and formatting of the TUI.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `defaultTimeWindow` | `"5m"` \| `"15m"` \| `"1h"` \| `"24h"` \| `"7d"` \| `"30d"` \| `"all"` | `"1h"` | The time window shown on the dashboard when tokentop starts. Cycle with `t` in the UI. |
| `sidebarCollapsed` | `boolean` | `false` | Whether the sidebar starts collapsed. Toggle with `b` in the UI. |
| `timeFormat` | `"12h"` \| `"24h"` | `"24h"` | Time display format for timestamps in the UI. |
| `numberFormat` | `"full"` \| `"compact"` | `"compact"` | Number display format. `"compact"` abbreviates large numbers (e.g., `1.2K`). |
| `theme` | `string` | `"tokyo-night"` | The ID of the active theme. Can be a built-in theme or one from a plugin. |
| `colorScheme` | `"auto"` \| `"light"` \| `"dark"` | `"auto"` | Color scheme preference. `"auto"` follows your terminal/system setting. |

#### `display.sparkline`

Controls the sparkline charts shown in provider cards.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `style` | `"braille"` \| `"block"` | `"braille"` | Rendering style. `"braille"` uses Unicode braille characters for higher resolution; `"block"` uses block characters. |
| `orientation` | `"up"` \| `"down"` | `"up"` | Direction the sparkline grows. `"up"` means higher values go up. |
| `showBaseline` | `boolean` | `true` | Whether to show a baseline at the bottom of the sparkline. |

---

### `notifications`

Controls in-app notification behavior.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `toastsEnabled` | `boolean` | `true` | Show toast notifications for events (budget warnings, provider errors, etc.). |
| `soundEnabled` | `boolean` | `true` | Play a system sound and desktop notification with alerts. Uses native sounds on macOS (`afplay`) and Linux (`canberra-gtk-play`), plus OSC 777/9 desktop notifications on supported terminals. |

---

### `budgets`

Set spending limits to receive warnings as you approach your targets.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `daily` | `number` \| `null` | `null` | Daily budget in the configured currency. `null` means no limit. |
| `weekly` | `number` \| `null` | `null` | Weekly budget. `null` means no limit. |
| `monthly` | `number` \| `null` | `null` | Monthly budget. `null` means no limit. |
| `currency` | `"USD"` \| `"EUR"` \| `"GBP"` | `"USD"` | Currency for budget amounts and cost display. |

---

### `alerts`

Controls when budget alerts are triggered, as a percentage of your budget limits.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `warningPercent` | `number` | `80` | Show a warning when spending reaches this percentage of a budget limit. |
| `criticalPercent` | `number` | `95` | Show a critical alert at this percentage. |

When `soundEnabled` is on, alerts also trigger a system sound and desktop notification. The built-in visual flash plugin briefly pulses the screen border with a severity-colored glow.

---

### `providers`

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `hideUnconfigured` | `boolean` | `false` | When `true`, providers without configured credentials are hidden from the dashboard instead of showing an "unconfigured" card. |

---

### `plugins`

Controls which plugins are loaded. See [Local Development](/docs/plugins/local-development) for a full guide on developing and testing plugins locally.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `local` | `string[]` | `[]` | File or directory paths to local plugins. Supports tilde expansion (`~/...`) and paths relative to the config directory. |
| `npm` | `string[]` | `[]` | npm package names to install and load. Must follow the [naming convention](/docs/plugins/publishing#naming-conventions). |
| `disabled` | `string[]` | `[]` | Plugin IDs to skip loading. This removes the plugin after all sources are loaded, so it works for built-in, local, and npm plugins alike. |

**Example — developing a local plugin:**

```json
{
  "plugins": {
    "local": ["~/development/my-tokentop-provider"],
    "npm": ["tokentop-provider-replicate"],
    "disabled": ["gemini-cli"]
  }
}
```

---

### `pluginConfig`

| | |
|---|---|
| **Type** | `Record<string, Record<string, unknown>>` |
| **Default** | `{}` |

Per-plugin configuration values, keyed by plugin ID. The available fields for each plugin are defined by that plugin's `configSchema`. These values are passed to the plugin via `ctx.config`.

```json
{
  "pluginConfig": {
    "slack-webhook": {
      "webhookUrl": "https://hooks.slack.com/services/T00/B00/xxx"
    },
    "my-provider": {
      "apiEndpoint": "https://api.custom.com",
      "requestTimeout": 15000
    }
  }
}
```

## Modifying settings

You have two options for changing settings:

1. **In-app Settings** (recommended) — Press `,` (comma) to open the Settings modal. Navigate categories with `Tab` and arrow keys, adjust values with `Left`/`Right`, and toggle options with `Enter`. Changes take effect immediately.
2. **Edit config file** — Open `~/.config/tokentop/config.json` in your text editor. Changes take effect the next time you start `ttop`.

You only need to include fields you want to override. Missing fields use the defaults shown above. tokentop deep-merges your config with the defaults, so partial objects work fine:

```json
{
  "budgets": { "daily": 25 },
  "display": { "theme": "dracula" }
}
```

This sets a daily budget and changes the theme while keeping everything else at defaults.
