---
title: "Agent Plugins"
description: "How to build an agent plugin that parses coding agent sessions."
---

Agent plugins parse session data from AI coding agents like Claude Code, Cursor, or any custom tool. They extract token usage, cost data, and session metadata from local files.

## Interface

An agent plugin implements session parsing and optional real-time activity watching:

```typescript
import type { AgentPlugin } from '@tokentop/plugin-sdk';

const myAgent: AgentPlugin = {
  id: 'my-agent',
  type: 'agent',
  name: 'My Agent',
  version: '1.0.0',
  meta: {
    description: 'Session tracking for My Agent',
    homepage: 'https://github.com/you/tokentop-agent-my-agent',
  },
  permissions: {
    filesystem: {
      read: true,
      paths: ['~/.my-agent/'],
    },
  },
  agent: {
    name: 'My Agent',
    command: 'my-agent',
    configPath: '~/.config/my-agent/',
    sessionPath: '~/.my-agent/sessions/',
  },
  capabilities: {
    sessionParsing: true,
    authReading: false,
    realTimeTracking: true,
    multiProvider: true,
  },

  async isInstalled(ctx) {
    // Check if the agent is installed on this system
    return ctx.fs.exists('~/.my-agent/');
  },

  async parseSessions(options, ctx) {
    // Read and parse session files, return usage data
    const files = await ctx.fs.readdir('~/.my-agent/sessions/');
    return files.map(file => ({
      sessionId: file.name,
      agent: 'my-agent',
      model: 'claude-3.5-sonnet',
      inputTokens: file.data.input_tokens,
      outputTokens: file.data.output_tokens,
      startTime: file.data.started_at,
      endTime: file.data.ended_at,
    }));
  },

  startActivityWatch(ctx, callback) {
    // Watch for new session activity in real-time
  },

  stopActivityWatch(ctx) {
    // Clean up watchers
  },
};

export default myAgent;
```

## Capabilities

- **sessionParsing** — Can read and parse completed session files
- **authReading** — Can read the agent's stored credentials for provider API access
- **realTimeTracking** — Can watch for live activity as sessions progress
- **multiProvider** — Agent uses multiple LLM providers (e.g., both Anthropic and OpenAI)

## Session data format

The `parseSessions` method returns an array of `SessionUsageData` objects containing:

- Session ID, agent name, and model used
- Input and output token counts
- Start and end timestamps
- Estimated or actual cost
- Project or workspace context (if available)

## Testing

```typescript
import { createTestHarness } from '@tokentop/plugin-sdk/testing';

const harness = createTestHarness(myAgent);
const sessions = await harness.parseSessions();
```
