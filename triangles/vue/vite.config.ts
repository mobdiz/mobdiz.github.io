import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

const isProduction = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: isProduction ? '/triangles/vue/dist/' : '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'effector': ['effector'],
          'effector-vue-composition': ['effector-vue/composition'],
          'effector-storage': ['effector-storage'],
          'patronum': ['patronum'],
          'vueuse-core': ['@vueuse/core'],
          'lodash-es': ['lodash-es'],
          'async-validator': ['async-validator'],
          'ctrl': ['@ctrl/tinycolor'],
        }
      }
    }
  }
})
