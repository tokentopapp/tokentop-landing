---
title: "Getting Started"
description: "Learn what tokentop is and how to start monitoring your AI costs."
---

tokentop is a terminal user interface (TUI) designed to be the "htop" for AI costs. As developers increasingly rely on AI coding agents, monitoring token usage and spending across different providers becomes essential. tokentop provides a real-time, unified view of your AI activity, helping you track budgets and avoid unexpected bills.

## Key Features

- **Real-time Monitoring**: Watch token usage as it happens across multiple AI providers.
- **Agent Integration**: Automatic discovery and parsing of sessions from popular coding agents like Claude Code, Cursor, and OpenCode.
- **Cost Tracking**: Calculate actual spending based on provider pricing models.
- **Budget Alerts**: Set limits and receive notifications before you exceed your spending targets.
- **Customizable Themes**: Choose from 15 built-in themes or create your own to match your terminal setup.

## Quick Start

Install with Homebrew (macOS and Linux):

```bash
brew install tokentopapp/tap/tokentop
```

Then run it:

```bash
ttop
```

That's it. tokentop auto-discovers your provider credentials and starts displaying real-time usage data.

If you want to see how the interface looks without connecting any real providers, you can start it in demo mode:

```bash
ttop demo
```

## Who is it for?

tokentop is built for developers who use AI-assisted coding tools and want to:
1. Understand their daily and monthly AI spending.
2. Identify which agents or projects are consuming the most tokens.
3. Compare usage across different LLM providers (Anthropic, OpenAI, Google, etc.).
4. Stay within strict budget limits for personal or professional projects.
