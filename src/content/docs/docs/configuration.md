---
title: "Configuration"
description: "How to configure tokentop's theme, plugins, and budget settings."
---

tokentop works out of the box with zero configuration. It auto-discovers your provider credentials from installed tools (OpenCode, Claude Code, Gemini CLI, etc.) and environment variables, so you can just run `ttop` and see your usage data immediately.

All settings can be adjusted directly inside the app by pressing `,` (comma) to open Settings. You never need to touch a config file unless you want to.

That said, if you prefer editing config files directly, tokentop stores its settings at `~/.config/tokentop/config.json`.

## Config Location

- **macOS/Linux**: `~/.config/tokentop/config.json`
- **Windows**: `%APPDATA%\tokentop\config.json`

## Key Settings

- **theme**: The ID of the theme you want to use. You can choose from built-in themes or your own custom themes.
- **colorScheme**: Set this to `auto`, `light`, or `dark`. By default, it follows your system's color scheme.
- **refreshInterval**: The time in milliseconds between polling providers for new usage data.
- **plugins**: A list of plugins you've installed, their local paths, or any you've disabled.
- **budgets**: Set daily, weekly, and monthly limits to receive warnings when you approach your spending targets.

## Example Configuration

Here is an example `config.json` showing how to customize your setup:

```json
{
  "theme": "tokyo-night",
  "colorScheme": "auto",
  "refresh": {
    "intervalMs": 300000,
    "pauseAutoRefresh": false
  },
  "plugins": {
    "local": ["~/dev/my-tokentop-plugin"],
    "npm": ["@tokentop/provider-openai"],
    "disabled": ["gemini-cli"]
  },
  "budgets": {
    "daily": 5.0,
    "weekly": 25.0,
    "monthly": 100.0,
    "currency": "USD"
  },
  "alerts": {
    "warningPercent": 80,
    "criticalPercent": 95
  }
}
```

## Budget Alerts

Budget alerts are fully configurable. When your spending reaches the `warningPercent` threshold, tokentop displays a visual warning. At `criticalPercent`, a critical alert is shown.

The defaults are:

- **warningPercent**: `80` — warning indicators appear at 80% of your budget
- **criticalPercent**: `95` — critical alerts at 95% of your budget

You can adjust these thresholds in the `alerts` section of your config, or via the in-app Settings. If you have notification plugins configured (like terminal bell or visual flash), alerts are also delivered through those channels.

## Modifying Settings

You have two options for changing settings:

1. **In-app Settings** (recommended) — Press `,` (comma) to open the Settings modal. Navigate categories with `Tab` and arrow keys, adjust values with `Left`/`Right`, and toggle options with `Enter`. Changes take effect immediately.
2. **Edit config file** — Open `~/.config/tokentop/config.json` in your text editor. Changes take effect the next time you start `ttop`.
