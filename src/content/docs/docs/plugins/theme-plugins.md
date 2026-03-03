---
title: "Theme Plugins"
description: "How to create a custom color theme for tokentop."
---

Theme plugins are pure data — they define a color palette and optional component-level overrides. No runtime logic is required.

## Interface

```typescript
import type { ThemePlugin } from '@tokentop/plugin-sdk';

const myTheme: ThemePlugin = {
  id: 'my-theme',
  type: 'theme',
  name: 'My Theme',
  version: '1.0.0',
  apiVersion: 2,
  permissions: {},
  colorScheme: 'dark',
  family: 'custom',
  colors: {
    background: '#1a1b26',
    foreground: '#24283b',
    text: '#c0caf5',
    textMuted: '#737aa2',
    textSubtle: '#565f89',
    primary: '#7aa2f7',
    secondary: '#bb9af7',
    accent: '#7dcfff',
    success: '#9ece6a',
    warning: '#e0af68',
    error: '#f7768e',
    info: '#7aa2f7',
    border: '#414868',
    borderMuted: '#292e42',
    selection: '#33467c',
    highlight: '#2f3549',
    gaugeBackground: '#24283b',
    gaugeFill: '#7aa2f7',
    gaugeWarning: '#e0af68',
    gaugeDanger: '#f7768e',
  },
};

export default myTheme;
```

## Color scheme

Set `colorScheme` to `'dark'` or `'light'` to indicate whether the theme is designed for dark or light terminal backgrounds. This helps tokentop apply appropriate contrast adjustments.

## Component overrides

Optionally override styling for specific UI components:

```typescript
components: {
  header: {
    background: '#16161e',
    foreground: '#c0caf5',
    titleColor: '#7aa2f7',
    titleAccentColor: '#bb9af7',
  },
  statusBar: {
    background: '#1f2335',
    foreground: '#737aa2',
  },
  commandPalette: {
    background: '#1a1b26',
    border: '#414868',
  },
  gauge: {
    height: 1,
    borderRadius: 0,
  },
}
```

## Required colors

At minimum, a theme must define all fields in the `colors` object. All color properties are flat (not nested) — see the color reference table below. The component overrides are optional — tokentop derives sensible defaults from the base colors.

## Color reference

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

## Testing your theme

Load your theme locally during development:

```bash
ttop --plugin ./my-theme
```

Use demo mode to see how your theme looks with data:

```bash
ttop demo --plugin ./my-theme
```
