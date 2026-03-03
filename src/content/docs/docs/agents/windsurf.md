---
title: "Windsurf"
description: "How tokentop integrates with the Windsurf IDE agent."
sidebar:
  order: 7
---

tokentop supports the Windsurf IDE coding agent, parsing local session data to track token usage and costs.

## How it works

The Windsurf agent plugin reads session data from Windsurf's local storage directory. It extracts token counts, model information, and session metadata from each coding interaction.

## Capabilities

- **Session parsing** — Reads completed session data from local files
- **Real-time tracking** — Monitors for new sessions as they occur
- **Multi-provider** — Tracks usage across different models used within Windsurf

## Setup

No configuration is required. If Windsurf is installed on your system, tokentop auto-discovers its data and begins tracking automatically.
