---
title: "Gemini CLI"
description: "How tokentop integrates with Google's Gemini CLI."
sidebar:
  order: 6
---

tokentop supports Google's Gemini CLI agent, parsing local session data to track Gemini model usage and costs.

## How it works

The Gemini CLI agent plugin reads session data from `~/.gemini/`, extracting token counts, model information, and session metadata from each interaction.

## Capabilities

- **Session parsing** — Reads Gemini CLI session files for token and cost data
- **Real-time tracking** — Watches for new sessions and activity
- **Caching** — Maintains a local cache to avoid re-parsing unchanged session files

## Data locations

| Platform | Path |
|----------|------|
| macOS | `~/.gemini/` |
| Linux | `~/.gemini/` |

## Setup

No configuration is required. If Gemini CLI is installed and has been used, tokentop auto-discovers its session data automatically.
