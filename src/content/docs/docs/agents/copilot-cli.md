---
title: "GitHub Copilot CLI"
description: "How tokentop integrates with GitHub Copilot CLI."
sidebar:
  order: 5
---

tokentop supports GitHub Copilot CLI, tracking token usage from command-line Copilot interactions.

## How it works

The Copilot CLI agent plugin reads session data from GitHub Copilot's local storage. It extracts token usage, model details, and interaction metadata from each CLI session.

## Capabilities

- **Session parsing** — Reads completed Copilot CLI interaction data
- **Real-time tracking** — Monitors for new activity as it happens

## Setup

No configuration is required. If GitHub Copilot CLI is installed and has been used on your system, tokentop auto-discovers its session data automatically.
