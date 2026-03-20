---
title: "Notification Plugins"
description: "How to create a notification plugin for custom alert delivery."
---

Notification plugins deliver alerts when spending thresholds are crossed or rate limits are hit. They can send notifications via any channel — Slack, Discord, email, desktop notifications, or anything else.

## Interface

```typescript
import type { NotificationPlugin } from '@tokentop/plugin-sdk';

const myNotifier: NotificationPlugin = {
  apiVersion: 2,
  id: 'my-notifier',
  type: 'notification',
  name: 'My Notifier',
  version: '1.0.0',
  meta: {
    description: 'Send alerts to My Service',
  },
  permissions: {
    network: { enabled: true, allowedDomains: ['hooks.myservice.com'] },
  },

  async initialize(ctx) {
    // Set up any connections or state
    ctx.logger.debug('My notifier initialized');
  },

  async notify(ctx, event) {
    // Deliver the notification
    await fetch('https://hooks.myservice.com/webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: event.type,
        title: event.title,
        message: event.message,
        severity: event.severity,
      }),
    });
  },

  supports(event) {
    // Declare which event types this plugin handles
    return (
      event.type.startsWith('budget.') ||
      event.type.startsWith('provider.')
    );
  },

  async test(ctx) {
    // Send a test notification to verify configuration
    ctx.logger.info('Testing My Notifier...');
    return true;
  },
};

export default myNotifier;
```

## Event types

Events have a `type` string and a `severity` level (`"info"`, `"warning"`, or `"critical"`).

| Event Type | Severity | Description |
|------------|----------|-------------|
| `provider.limitReached` | `critical` | A provider's rate limit has been reached |
| `provider.limitReached` | `warning` / `critical` | Provider usage approaching limit (≥80%) |
| `budget.thresholdCrossed` | `warning` | Spending reached the warning threshold (default 80%) |
| `budget.limitReached` | `critical` | Spending reached the critical threshold (default 95%) |
| `plugin.crashed` | `critical` | A plugin's circuit breaker tripped after repeated failures |

## Event structure

Every event passed to `notify` has this shape:

```typescript
interface NotificationEvent {
  type: string;          // e.g. "budget.thresholdCrossed"
  severity: "info" | "warning" | "critical";
  title: string;         // e.g. "Daily Budget Warning"
  message: string;       // e.g. "Daily spending at 85% ($42.50/$50.00)."
  timestamp: number;     // Date.now()
  data: Record<string, unknown>; // Extra context (provider ID, budget type, etc.)
}
```

## Built-in notification plugins

tokentop ships with two built-in notification plugins:

- **Terminal Bell** — Plays a native system sound (`afplay` on macOS, `canberra-gtk-play` on Linux), sends OSC 777/9 desktop notifications on supported terminals (iTerm2, Kitty, WezTerm, Windows Terminal), and falls back to the BEL character.
- **Visual Flash** — Briefly pulses the screen border with a severity-colored glow (red for critical, amber for warning, blue for info) that fades over 500ms.

Both plugins respect the `soundEnabled` config toggle and the `minSeverity` setting (default: `warning`).

## Selective event handling

Use the `supports` method to declare which events your plugin handles. The method receives the full `NotificationEvent` object, so you can filter by `event.type`, `event.severity`, or any field in `event.data`. tokentop only calls `notify` for events the plugin has declared support for.

## Deduplication

The notification bus deduplicates events within a 5-minute window. If the same event (e.g., the same provider hitting its limit) fires multiple times within 5 minutes, only the first triggers notifications.
