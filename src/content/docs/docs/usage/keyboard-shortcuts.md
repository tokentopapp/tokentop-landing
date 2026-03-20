---
title: "Keyboard Shortcuts"
description: "How to navigate and control the tokentop terminal user interface."
---

tokentop is designed for power users who prefer keyboard navigation. Press `?` at any time to see the in-app help overlay.

## Global

These work from any view:

| Key | Action |
|-----|--------|
| `1` - `4` | Switch views (Dashboard, Providers, Trends, Projects) |
| `,` | Open Settings |
| `:` | Open command palette |
| `r` | Refresh data from all providers |
| `?` | Show help overlay |
| `q` | Quit |

## Dashboard (view 1)

The real-time dashboard with sessions, provider limits, and sidebar.

| Key | Action |
|-----|--------|
| `t` | Cycle time window (5m → 15m → 1h → 24h → 7d → 30d → all) |
| `/` or `f` | Filter sessions (by agent, model, project) |
| `s` | Cycle sort (cost, tokens) |
| `j` / `k` or `↑` / `↓` | Navigate sessions |
| `Enter` | Open session details |
| `Tab` / `Shift+Tab` | Cycle focus (sessions → limits → sidebar) |
| `i` | Toggle sidebar |
| `m` / `p` / `a` | Sidebar dimension (model / project / agent) |
| `b` | Cycle budget lock (sync with window, daily, weekly, monthly) |
| `l` | Jump to provider limits |
| `gg` / `G` | Jump to top / bottom |
| `Escape` | Clear filter or close details |

## Providers (view 2)

All configured providers with connection status and usage levels.

| Key | Action |
|-----|--------|
| `j` / `k` or `↑` / `↓` | Navigate providers |
| `/` or `f` | Filter providers |
| `s` | Cycle sort (status, usage, name) |
| `v` | Toggle view mode (cards / list) |
| `u` | Toggle unconfigured providers |
| `x` | Toggle at-risk focus |
| `Enter` | Expand provider details |
| `r` | Refresh selected provider |
| `R` | Refresh all providers |
| `Escape` | Clear filter or close expanded view |

## Trends (view 3)

Historical cost charts over time.

| Key | Action |
|-----|--------|
| `j` / `k` or `↑` / `↓` | Navigate vertically |
| `h` / `l` or `←` / `→` | Navigate horizontally |
| `b` | Cycle budget lock |
| `m` | Cycle metric (cost / tokens) |
| `c` | Toggle comparison mode |
| `i` | Toggle insight display |
| `Escape` | Clear selection |

## Projects (view 4)

Cost and token breakdown by local project/repo.

| Key | Action |
|-----|--------|
| `j` / `k` or `↑` / `↓` | Navigate projects |
| `t` | Cycle time window |
| `/` or `f` | Filter projects |
| `s` | Cycle sort |
| `v` | Toggle view mode |
| `Enter` | Open project details |
| `gg` / `G` | Jump to top / bottom |
| `Escape` | Close details or clear filter |

## Settings

Open with `,` (comma):

| Key | Action |
|-----|--------|
| `Tab` | Switch between categories and settings panes |
| `↑` / `↓` | Navigate between settings |
| `←` / `→` | Adjust values |
| `Enter` | Toggle options |
| `Esc` | Close settings |

## Debug and Frame Capture

Advanced shortcuts for developers and bug reports:

| Key | Action |
|-----|--------|
| `~` or `Shift+D` | Toggle debug panel |
| `Ctrl+P` | Capture a single frame snapshot |
| `Ctrl+Shift+P` | Start / stop burst recording (10 frames) |
