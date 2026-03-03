---
title: "Provider Plugins"
description: "How to build a provider plugin that fetches usage data from an AI model API."
---

Provider plugins connect tokentop to AI model APIs like Anthropic, OpenAI, or any custom LLM service. They handle credential discovery, authentication validation, and usage data fetching.

## Interface

A provider plugin implements these core methods:

```typescript
import type { ProviderPlugin } from '@tokentop/plugin-sdk';

const myProvider: ProviderPlugin = {
  id: 'my-provider',
  type: 'provider',
  name: 'My Provider',
  version: '1.0.0',
  meta: {
    description: 'Usage tracking for My Provider API',
    homepage: 'https://github.com/you/tokentop-provider-my-provider',
  },
  permissions: {
    network: { enabled: true, allowedDomains: ['api.myprovider.com'] },
    env: { read: true, vars: ['MY_PROVIDER_API_KEY'] },
  },
  capabilities: {
    usageLimits: true,
    apiRateLimits: false,
    tokenUsage: true,
    actualCosts: true,
  },

  auth: {
    async discover(ctx) {
      // Find credentials from environment, config files, etc.
      const key = ctx.env.get('MY_PROVIDER_API_KEY');
      return key ? { apiKey: key } : null;
    },
    isConfigured(credentials) {
      return credentials?.apiKey != null;
    },
  },

  async fetchUsage(credentials, ctx) {
    // Call your provider's API and return usage data
    const response = await fetch('https://api.myprovider.com/usage', {
      headers: { Authorization: `Bearer ${credentials.apiKey}` },
    });
    const data = await response.json();

    return {
      provider: 'my-provider',
      usage: data.usage,
      costs: data.costs,
      limits: data.limits,
    };
  },
};

export default myProvider;
```

## Capabilities

Declare what data your provider can return:

- **usageLimits** — Whether the API reports usage limits and quotas
- **apiRateLimits** — Whether the API reports rate limit information
- **tokenUsage** — Whether the API provides token-level usage data
- **actualCosts** — Whether the API returns actual billing amounts (vs estimates)

## Pricing data

If your provider doesn't return actual costs, tokentop can estimate costs using pricing data. Provide model pricing in the standard format:

```typescript
pricing: {
  'my-model-v1': {
    inputPerMillion: 3.00,
    outputPerMillion: 15.00,
    cacheReadPerMillion: 0.30,
    cacheWritePerMillion: 3.75,
  },
}
```

## Testing

Use the plugin SDK's test harness to validate your provider:

```typescript
import { createTestHarness } from '@tokentop/plugin-sdk/testing';

const harness = createTestHarness(myProvider);
const result = await harness.fetchUsage();
```
