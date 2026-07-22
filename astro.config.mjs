// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  server: { port: 3000 },
  vite: {
    // three's WebGPU/TSL entry points are large ESM graphs — let Vite
    // pre-bundle them so dev cold-starts don't choke on deep import chains.
    optimizeDeps: {
      include: ['three', 'three/webgpu', 'three/tsl'],
    },
  },
});
