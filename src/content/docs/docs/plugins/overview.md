---
title: "Plugin System Overview"
description: "How tokentop's plugin architecture works and how to extend it."
---

tokentop is built on a plugin architecture with four distinct plugin types. Everything from provider integrations to color themes is a plugin, making the system highly extensible.

## Plugin types

| Type | Purpose | Examples |
|------|---------|----------|
| **Provider** | Fetch usage data from AI model APIs | Anthropic, OpenAI, Google |
| **Agent** | Parse coding agent sessions | Claude Code, Cursor, OpenCode |
| **Theme** | Visual color schemes for the TUI | Tokyo Night, Dracula, Nord |
| **Notification** | Alert delivery mechanisms | Terminal bell, visual flash |

## Plugin loading order

Plugins are loaded from three sources, in order:

1. **Built-in plugins** — Shipped with tokentop in the core package
2. **Local plugins** — Discovered from `~/.config/tokentop/plugins/` and paths specified via `--plugin` flag or `config.plugins.local`
3. **npm plugins** — Packages listed in `config.plugins.npm`

Plugins listed in `config.plugins.disabled` are removed after loading.

## Plugin discovery

tokentop discovers local plugins from several sources:

- **Default directory**: `~/.config/tokentop/plugins/` (files and directories)
- **CLI flag**: `ttop --plugin <path>` loads a plugin for that run (repeatable)
- **Config file**: `config.plugins.local` array in `~/.config/tokentop/config.json`

For directory-based plugins, the loader resolves entry points by checking `package.json` main/exports, then `src/index.ts`, `index.ts`, `dist/index.js`.

## Permission sandboxing

All plugins must declare their required permissions:

```typescript
permissions: {
  network?: { enabled: boolean; allowedDomains?: string[] };
  filesystem?: { read?: boolean; write?: boolean; paths?: string[] };
  env?: { read?: boolean; vars?: string[] };
  system?: { notifications?: boolean; clipboard?: boolean };
}
```

tokentop enforces these permissions at runtime, preventing plugins from accessing resources they haven't declared.

## npm naming conventions

| Tier | Pattern | Example |
|------|---------|---------|
| Official | `@tokentop/{type}-<name>` | `@tokentop/agent-opencode` |
| Community | `tokentop-{type}-<name>` | `tokentop-provider-replicate` |
| Scoped | `@scope/tokentop-{type}-<name>` | `@myname/tokentop-theme-catppuccin` |

The `@tokentop/*` scope is reserved for official plugins.

## Getting started

- [Provider Plugins](/docs/plugins/provider-plugins) — Build a provider integration
- [Agent Plugins](/docs/plugins/agent-plugins) — Build an agent integration
- [Theme Plugins](/docs/plugins/theme-plugins) — Create a custom theme
- [Notification Plugins](/docs/plugins/notification-plugins) — Create a notification hook
- [Publishing](/docs/plugins/publishing) — Publish your plugin to npm
