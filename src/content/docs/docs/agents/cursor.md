---
title: "Cursor"
description: "How tokentop monitors Cursor AI usage."
sidebar:
  order: 3
---

Cursor is an AI-powered code editor with its own built-in coding agent. tokentop includes a dedicated agent plugin for Cursor that monitors its activity and token usage.

## How it Works

The Cursor agent plugin reads session data from Cursor's local SQLite state database. On macOS and Linux systems, this database is usually located at `~/.cursor/`.

- **State Reading**: tokentop periodically queries the Cursor SQLite database for information about recent AI interactions, model usage, and file edits.
- **CSV Enrichment**: To ensure the most accurate data, Cursor's local usage logs can be enriched with CSV exports from Cursor's server-side data, providing more precise token and cost information.
- **Configurable Refresh**: You can adjust the polling interval in your `config.json` to control how frequently tokentop reads from Cursor's local database.

## Configuration

The Cursor agent plugin is enabled by default. If you need to disable it or change its behavior, you can do so in your `config.json` file.

```json
{
  "plugins": {
    "disabled": ["cursor"]
  }
}
```

## Troubleshooting

If your Cursor sessions aren't appearing in tokentop, make sure that:
1. You have Cursor installed and are using its AI features (like Chat or Composer).
2. The `~/.cursor/` directory exists and contains the required SQLite state files.
3. tokentop has the necessary permissions to read these files.
