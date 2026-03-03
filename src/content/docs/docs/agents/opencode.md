---
title: "OpenCode"
description: "How tokentop integrates with the OpenCode coding agent."
sidebar:
  order: 3
---

OpenCode is the primary integration target for tokentop. When OpenCode is installed, tokentop reuses its OAuth credentials to access provider usage tracking APIs directly, giving you the most accurate cost data possible.

## How it works

tokentop reads OpenCode's auth store at `~/.local/share/opencode/auth.json`, which contains OAuth tokens for providers like Anthropic, OpenAI, and Google. These OAuth tokens enable access to usage tracking APIs that return actual billing data rather than estimates.

## Capabilities

- **Session parsing** — Extracts token counts, model usage, and session metadata from OpenCode's local data
- **Auth reading** — Reuses OpenCode's OAuth credentials for direct provider API access
- **Real-time tracking** — Watches for new activity as it happens
- **Multi-provider** — Tracks usage across all providers configured in OpenCode

## Data locations

| Platform | Path |
|----------|------|
| macOS | `~/.local/share/opencode/` |
| Linux | `~/.local/share/opencode/` |
| Windows | `%APPDATA%/opencode/` |

## Why OpenCode credentials are checked first

Usage tracking APIs (like Anthropic's `/api/oauth/usage`) require OAuth tokens, not API keys. OpenCode stores OAuth tokens from its authentication flow. Environment variables typically contain API keys, which don't work for usage tracking endpoints. This is why tokentop always checks OpenCode's auth store before falling back to environment variables.
