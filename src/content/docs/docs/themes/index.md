---
title: "Themes"
description: "Customize tokentop's appearance with built-in or custom themes."
---

tokentop ships with 15 built-in themes covering both dark and light terminal backgrounds. You can also create your own theme as a plugin.

## Setting a theme

### Via config file

Set the `theme` field in `~/.config/tokentop/config.json`:

```json
{
  "theme": "tokyo-night"
}
```

### Via Settings view

Press `,` (comma) to open Settings, navigate to the Display category, and select your preferred theme from the list.

## Color scheme

The `colorScheme` setting controls light/dark mode:

- `"auto"` — Follows your terminal's preference (default)
- `"light"` — Forces light mode
- `"dark"` — Forces dark mode

```json
{
  "colorScheme": "auto"
}
```

## Available themes

See [Built-in Themes](/docs/themes/built-in) for the full list of themes included with tokentop.

## Creating custom themes

If none of the built-in themes fit your terminal aesthetic, you can create your own as a theme plugin. See [Custom Themes](/docs/themes/custom-themes) for details.
