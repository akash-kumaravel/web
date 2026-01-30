import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        target: 'esnext',
        rollupOptions: {
          output: {
            manualChunks: {
              'react-vendors': ['react', 'react-dom', 'react-router-dom'],
              'ui-vendors': ['lucide-react'],
            },
            chunkFileNames: 'assets/chunk-[name]-[hash].js',
            entryFileNames: 'assets/index-[hash].js',
            assetFileNames: 'assets/[name]-[hash][extname]'
          }
        },
        cssCodeSplit: true,
        reportCompressedSize: false,
        sourcemap: false,
      },
      optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom', 'lucide-react']
      }
    };
});

