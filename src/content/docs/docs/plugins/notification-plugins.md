---
title: "Notification Plugins"
description: "How to create a notification plugin for custom alert delivery."
---

Notification plugins deliver alerts when spending thresholds are crossed, rate limits are hit, or sessions start and end. They can send notifications via any channel — Slack, Discord, email, desktop notifications, or anything else.

## Interface

```typescript
import type { NotificationPlugin } from '@tokentop/plugin-sdk';

const myNotifier: NotificationPlugin = {
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
  },

  async notify(event, ctx) {
    // Deliver the notification
    await fetch('https://hooks.myservice.com/webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: event.type,
        message: event.message,
        severity: event.severity,
      }),
    });
  },

  async test(ctx) {
    // Send a test notification to verify configuration
    await this.notify({
      type: 'test',
      message: 'tokentop notification test',
      severity: 'info',
    }, ctx);
  },

  supports(eventType) {
    // Declare which event types this plugin handles
    return [
      'usage_limit_warning',
      'budget_exceeded',
      'rate_limit_warning',
    ].includes(eventType);
  },
};

export default myNotifier;
```

## Event types

| Event | Description |
|-------|-------------|
| `usage_limit_warning` | Provider usage is approaching its limit |
| `budget_exceeded` | A daily, weekly, or monthly budget has been exceeded |
| `rate_limit_warning` | API rate limits are being approached or hit |
| `session_started` | A new coding agent session has begun |
| `session_ended` | A coding agent session has completed |
| `provider_error` | A provider API returned an error |

## Built-in notification plugins

tokentop ships with two built-in notification plugins:

- **Terminal Bell** — Triggers your terminal's bell character for audible alerts
- **Visual Flash** — Flashes the terminal screen briefly to draw attention

## Selective event handling

Use the `supports` method to declare which events your plugin handles. tokentop only calls `notify` for events the plugin has declared support for, so you don't need to filter events internally.
