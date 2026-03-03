---
title: "CLI Reference"
description: "How to use the tokentop command line tool."
---

tokentop is primarily controlled from your terminal using the `ttop` command. This page outlines all the available subcommands, options, and flags.

## Main Command

The default command starts the TUI and begins monitoring your AI usage based on your configuration.

```bash
ttop [options]
```

### Options

- **-r, --refresh <ms>**: Set the refresh interval in milliseconds. This overrides the value in your `config.json`. The default is 60000ms (1 minute).
- **-p, --plugin <path>**: Load a plugin from a local path. This option can be repeated to load multiple plugins.
- **-d, --debug**: Start `ttop` in debug mode, which enables the debug console and detailed logging for troubleshooting.
- **-h, --help**: Display the help message and exit.
- **-v, --version**: Show the current version of tokentop.

## Demo Mode

Starts tokentop with synthetic data. This is useful for testing themes or exploring the UI without any real AI usage.

```bash
ttop demo [options]
```

### Demo Options

- **--seed <number>**: Provide a seed for the random number generator to produce deterministic synthetic data.
- **--preset <light|normal|heavy>**: Select a workload preset:
  - `light`: 2 active sessions, 60% idle time.
  - `normal` (default): 4 active sessions, 35% idle time.
  - `heavy`: 6 active sessions, 15% idle time.

## Subcommands

- **demo**: Runs `ttop` in demo mode with synthetic data.

## Examples

Start `ttop` with a 30-second refresh interval:
```bash
ttop --refresh 30000
```

Load a local agent plugin you are developing:
```bash
ttop --plugin ./my-agent-plugin.js
```

Run the heavy workload demo with a specific seed:
```bash
ttop demo --preset heavy --seed 42
```
