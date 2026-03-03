---
title: "Custom Themes"
description: "How to create and use a custom theme in tokentop."
---

If the built-in themes don't match your terminal setup, you can create a custom theme as a plugin.

## Quick start

Create a new directory for your theme:

```bash
mkdir my-tokentop-theme
cd my-tokentop-theme
```

Create an `index.ts` (or `index.js`) file with your theme definition:

```typescript
import type { ThemePlugin } from '@tokentop/plugin-sdk';

const theme: ThemePlugin = {
  id: 'my-custom-theme',
  type: 'theme',
  name: 'My Custom Theme',
  version: '1.0.0',
  apiVersion: 2,
  permissions: {},
  colorScheme: 'dark',
  family: 'custom',
  colors: {
    background: '#1e1e2e',
    foreground: '#313244',
    text: '#cdd6f4',
    textMuted: '#6c7086',
    textSubtle: '#585b70',
    primary: '#89b4fa',
    secondary: '#cba6f7',
    accent: '#94e2d5',
    success: '#a6e3a1',
    warning: '#f9e2af',
    error: '#f38ba8',
    info: '#89b4fa',
    border: '#45475a',
    borderMuted: '#313244',
    selection: '#45475a',
    highlight: '#313244',
    gaugeBackground: '#313244',
    gaugeFill: '#89b4fa',
    gaugeWarning: '#f9e2af',
    gaugeDanger: '#f38ba8',
  },
};

export default theme;
```

## Testing locally

Load your theme with the `--plugin` flag:

```bash
ttop --plugin ./my-tokentop-theme
```

Combine with demo mode to see your theme with data:

```bash
ttop demo --plugin ./my-tokentop-theme
```

## Color reference

Your theme must define all colors in the `colors` object. All properties are flat strings (not nested objects):

| Color | Purpose |
|-------|---------|
| `background` | Main background color |
| `foreground` | Secondary background (cards, panels) |
| `text` | Primary text color |
| `textMuted` | Secondary text (labels, descriptions) |
| `textSubtle` | Tertiary text (hints, inactive items) |
| `primary` | Primary accent (selected items, links) |
| `secondary` | Secondary accent (highlights, badges) |
| `accent` | Tertiary accent (special indicators) |
| `success` | Positive indicators (under budget, healthy) |
| `warning` | Caution indicators (approaching limits) |
| `error` | Alert indicators (over budget, errors) |
| `info` | Informational indicators |
| `border` | Primary borders and dividers |
| `borderMuted` | Subtle borders and separators |
| `selection` | Selected/highlighted rows |
| `highlight` | Hover or focus indicators |
| `gaugeBackground` | Gauge track (unfilled portion) |
| `gaugeFill` | Gauge fill at normal usage |
| `gaugeWarning` | Gauge fill approaching limits |
| `gaugeDanger` | Gauge fill at critical usage |

## Publishing

Once your theme looks good, consider [publishing it to npm](/docs/plugins/publishing) so others can use it too. Follow the `tokentop-theme-<name>` naming convention.
