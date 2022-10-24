import svgr from '@svgr/rollup';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      svgr(),
      splitVendorChunkPlugin(),
    ],
    define: {
      
    },
    server: {
      host: '0.0.0.0',
      watch: {
        usePolling: true,
      },
    },
  };
});
