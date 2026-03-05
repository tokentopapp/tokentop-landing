---
title: "Local Development"
description: "How to develop and test tokentop plugins locally before publishing."
---

You don't need to publish to npm to use a plugin. tokentop can load plugins directly from your filesystem, which makes for a fast development loop while you're building.

## Three ways to load a local plugin

### 1. The `--plugin` CLI flag

The quickest way to test a plugin during development. Point tokentop at your plugin's directory or file:

```bash
ttop --plugin ./my-plugin
```

This loads the plugin for that run only. The flag is repeatable:

```bash
ttop --plugin ./my-provider --plugin ./my-theme.ts
```

Accepts relative paths, absolute paths, and tilde paths (`~/dev/my-plugin`).

### 2. The `plugins.local` config array

For plugins you're actively developing, add them to your config so they load on every `ttop` start:

```json
// ~/.config/tokentop/config.json
{
  "plugins": {
    "local": [
      "~/development/my-tokentop-provider",
      "~/development/my-tokentop-theme/src/index.ts"
    ]
  }
}
```

Each entry can be:
- A **directory** — tokentop resolves the entry point automatically (see [Entry point resolution](#entry-point-resolution) below)
- A **file path** — loaded directly (must be `.ts` or `.js`)

Paths support tilde expansion (`~/...`) and can be relative to the config directory (`~/.config/tokentop/`).

### 3. The plugins directory

Drop your plugin into the default plugins directory and tokentop discovers it automatically on startup:

```
~/.config/tokentop/plugins/
├── my-theme.ts              # Single-file plugin
└── my-provider/             # Directory-based plugin
    ├── package.json
    └── src/
        └── index.ts
```

Files must end in `.ts` or `.js`. Directories are resolved using the entry point rules below.

## Entry point resolution

When tokentop loads a directory-based plugin, it resolves the entry point in this order:

| Priority | What it checks |
|----------|----------------|
| 1 | `package.json` `main` field |
| 2 | `package.json` `exports["."]` (string, or `import`/`default` subfield) |
| 3 | `src/index.ts` |
| 4 | `src/index.js` |
| 5 | `index.ts` |
| 6 | `index.js` |
| 7 | `dist/index.js` |

For most plugins, having `"main": "src/index.ts"` in your `package.json` is sufficient.

## Plugin loading order

All three sources are merged together at startup. The full loading order is:

1. **Built-in plugins** — shipped with tokentop
2. **Auto-discovered plugins** — from `~/.config/tokentop/plugins/`
3. **Config local paths** — from `plugins.local` in your config
4. **CLI flag paths** — from `--plugin <path>` arguments
5. **npm plugins** — packages listed in `plugins.npm`

After all plugins are loaded, any IDs listed in `plugins.disabled` are removed.

## Development workflow

Here's a typical workflow for building and testing a new plugin:

```bash
# 1. Scaffold your plugin
mkdir tokentop-provider-replicate
cd tokentop-provider-replicate
bun init
bun add @tokentop/plugin-sdk

# 2. Write your plugin in src/index.ts
#    (See the Plugin SDK docs for examples of each plugin type)

# 3. Run unit tests with the SDK test harness
bun test

# 4. Load it in tokentop to verify end-to-end
ttop --plugin .

# 5. Or add it to your config for persistent loading
#    Add to plugins.local in ~/.config/tokentop/config.json

# 6. When everything works, publish to npm
npm publish
```

## Validation and debugging

When a local plugin fails to load, tokentop logs the specific reason to the console:

- **Missing required fields** — `id`, `type`, `name`, `version`, `permissions`
- **Invalid `apiVersion`** — the plugin's contract version doesn't match what tokentop expects
- **Missing type-specific methods** — e.g., a provider plugin without `fetchUsage()`, or an agent plugin without `parseSessions()`
- **No recognizable entry point** — the directory doesn't have a `package.json`, `src/index.ts`, or any of the other conventional entry points

If you need deeper debugging, start tokentop with the `--debug` flag:

```bash
ttop --debug --plugin ./my-plugin
```

This enables the debug console (`~` key) and detailed logging.

## Disabling a plugin without removing it

If you want to temporarily skip a plugin without removing it from `plugins.local` or the plugins directory, add its `id` to the disabled list:

```json
{
  "plugins": {
    "local": ["~/development/my-provider"],
    "disabled": ["my-provider"]
  }
}
```

The plugin won't be loaded until you remove it from `disabled`.

## What's next

- [Publishing Plugins](/docs/plugins/publishing) — Package and publish your plugin to npm
- [Configuration Reference](/docs/configuration) — Full config.json specification
