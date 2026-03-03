---
title: "Claude Code"
description: "How tokentop monitors Claude Code sessions."
sidebar:
  order: 2
---

Claude Code is Anthropic's CLI-based AI coding assistant. tokentop includes a built-in agent plugin that allows you to monitor your Claude Code activity in real-time.

## How it Works

The Claude Code agent plugin in tokentop parses JSONL session files from your local system. By default, it looks in the `~/.claude/projects/` directory for active project sessions.

- **Real-time Activity**: tokentop watches for changes to these JSONL files, allowing it to display new messages and token usage as they occur.
- **Session Parsing**: The plugin extracts metadata like the project name, current file list, and specific model versions being used.
- **Multi-provider Usage**: Although Claude Code primarily uses Anthropic's Claude models, tokentop's agent plugin is designed to handle future updates to multi-provider usage if they become available.

## Configuration

The Claude Code agent plugin is enabled by default. If you need to disable it or change its behavior, you can do so in your `config.json` file.

```json
{
  "plugins": {
    "disabled": ["claude-code"]
  }
}
```

## Troubleshooting

If you don't see your Claude Code sessions appearing in tokentop, make sure that:
1. You have Claude Code installed and have started at least one session.
2. The session files are located in the standard `~/.claude/projects/` directory.
3. Your user account has read permissions for these files.
