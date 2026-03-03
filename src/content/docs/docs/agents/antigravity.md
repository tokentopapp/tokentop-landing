---
title: "Antigravity"
description: "How tokentop integrates with the Antigravity agent."
sidebar:
  order: 4
---

tokentop supports the Antigravity coding agent, reading account and session data to track token usage and costs.

## How it works

The Antigravity agent plugin reads from `~/.config/opencode/antigravity-accounts.json` to discover configured accounts, then parses local session data to extract token counts and cost information.

## Capabilities

- **Session parsing** — Reads session data from Antigravity's local files
- **Real-time tracking** — Watches for new activity as it happens
- **Caching** — Maintains a local cache for efficient re-reads

## Data locations

| Platform | Path |
|----------|------|
| macOS | `~/.config/opencode/antigravity-accounts.json` |
| Linux | `~/.config/opencode/antigravity-accounts.json` |

## Setup

No configuration is required. If Antigravity is installed, tokentop auto-discovers its account data and begins tracking.
