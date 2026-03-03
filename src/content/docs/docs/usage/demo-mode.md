---
title: "Demo Mode"
description: "How to use tokentop's synthetic data generator for testing."
---

tokentop includes a robust demo mode that allows you to explore the application without any real AI usage. This is perfect for trying out themes, testing your configuration, or demonstrating the app's capabilities to others.

## Running Demo Mode

To start tokentop in demo mode, use the following command:

```bash
ttop demo
```

The app will start and populate itself with synthetic usage data, sessions, and providers.

## Workload Presets

By default, demo mode starts with a "normal" workload. You can customize this using the `--preset` flag.

- **light**: 2 active sessions, 60% idle time.
- **normal** (default): 4 active sessions, 35% idle time.
- **heavy**: 6 active sessions, 15% idle time.

For example, to test how the UI handles a heavy workload:
```bash
ttop demo --preset heavy
```

## Seeded Randomness

Demo mode uses a random number generator to create synthetic usage. If you want to see the same data every time you start the app, you can provide a seed using the `--seed` flag.

```bash
ttop demo --seed 42
```

This is particularly useful for debugging or when you want a consistent environment for screenshots and documentation.

## How it Works

When in demo mode:
1. All data is generated in memory and is never written to a local database.
2. No real AI provider APIs are called, so no costs are incurred.
3. The app simulates real-time activity, so you'll see token usage increment as if you were actively using an AI agent.
4. Your existing `config.json` is still loaded for things like themes and color schemes, but provider settings are ignored.
