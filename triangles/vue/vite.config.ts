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
          'element-plus': ['element-plus'],
          'effector': ['effector'],
          'effector-vue': ['effector-vue'],
          'patronum': ['patronum'],
          'element-plus-icons-vue': ['@element-plus/icons-vue'],
          'vueuse-core': ['@vueuse/core'],
          'vue': ['vue'],
          'lodash-es': ['lodash-es'],
          'async-validator': ['async-validator'],
          'dayjs': ['dayjs'],
          'ctrl': ['@ctrl/tinycolor'],
        }
      }
    }
  }
})
