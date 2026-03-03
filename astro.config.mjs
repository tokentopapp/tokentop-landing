// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://tokentop.app',
  integrations: [
    starlight({
      title: 'tokentop',
      favicon: '/assets/icon.png',
      logo: {
        src: './src/assets/icon.png',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/tokentopapp/tokentop' },
      ],
      customCss: [
        './src/styles/docs.css',
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { slug: 'docs/getting-started' },
            { slug: 'docs/installation' },
            { slug: 'docs/configuration' },
          ],
        },
        {
          label: 'Usage',
          items: [
            { slug: 'docs/usage/cli-reference' },
            { slug: 'docs/usage/keyboard-shortcuts' },
            { slug: 'docs/usage/demo-mode' },
          ],
        },
        {
          label: 'Agents',
          autogenerate: { directory: 'docs/agents' },
        },
        {
          label: 'Plugin SDK',
          items: [
            { slug: 'docs/plugins/overview' },
            { slug: 'docs/plugins/provider-plugins' },
            { slug: 'docs/plugins/agent-plugins' },
            { slug: 'docs/plugins/theme-plugins' },
            { slug: 'docs/plugins/notification-plugins' },
            { slug: 'docs/plugins/publishing' },
          ],
        },
        {
          label: 'Themes',
          autogenerate: { directory: 'docs/themes' },
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
