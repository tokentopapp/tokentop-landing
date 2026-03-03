---
title: "AI Agents Overview"
description: "Learn about the AI coding agents supported by tokentop."
sidebar:
  order: 1
---

tokentop supports 7 popular AI coding agents out of the box. Each agent integration is powered by a plugin that parses local session data and tracks token usage in real-time.

## Supported Agents

- **Claude Code**: Anthropic's CLI-based coding assistant.
- **Cursor**: The AI-powered code editor with built-in agent capabilities.
- **OpenCode**: The primary integration, using OpenCode's OAuth credentials.
- **Windsurf**: The IDE from Codeium with its own agent sessions.
- **GitHub Copilot CLI**: Command-line interface for GitHub Copilot.
- **Gemini CLI**: Google's CLI tool for interacting with Gemini models.
- **Antigravity**: Integration for the Antigravity agent system.

## Auto-Discovery

When you start tokentop, it automatically scans your system for installed agents. If it finds a supported agent (e.g., by detecting its configuration directory), it will begin monitoring its activity without any manual setup.

## How it Works

Agent plugins in tokentop work by parsing local session files (like JSONL or SQLite databases) and watching for changes. This allows tokentop to show you exactly which files your agent is editing and how many tokens are being consumed for each turn of the conversation.
