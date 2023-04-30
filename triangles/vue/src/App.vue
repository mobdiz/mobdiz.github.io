<template>
  <el-container class="layout">
    <el-aside class="aside" :width="asideWidthInPx">
      <el-scrollbar>
        <div class="aside-title">
          <h2>Settings</h2>
        </div>

        <DotsSettings />
      </el-scrollbar>
    </el-aside>

    <el-container class="content">
      <el-header class="header">
        <h1>Dots: {{ dots.length }}</h1>
      </el-header>

      <el-main class="main">
        <el-scrollbar>
          <div class="main-content">
            <PlaceForDrawing />
          </div>
        </el-scrollbar>
      </el-main>

      <el-footer class="footer">
        &copy; 2021
      </el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useStore} from "@nanostores/vue";

import {$dots} from "../../nanostores";

import PlaceForDrawing from "@/components/PlaceForDrawing.vue";
import DotsSettings from "@/components/DotsSettings.vue";

export default defineComponent({
  components: {
    DotsSettings,
    PlaceForDrawing
  },

  setup() {
    const dots = useStore($dots)
    const asideWidth = 300

    const asideWidthInPx = `${asideWidth}px`

    return {
      dots,
      asideWidthInPx
    }
  }
})
</script>

<style scoped>
.layout {
  height: 100vh;

  --box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
}

.aside {
  background-color: var(--el-color-primary-dark-2);
  color: var(--el-color-white);
  padding: 1rem;
  box-shadow: var(--box-shadow);
  position: relative;
}

.header {
  background-color: var(--el-color-primary-light-7);
  color: var(--el-color-primary-dark-2);
  padding: 1rem;
  box-shadow: var(--box-shadow);
  display: flex;
  align-items: center;
}

.footer {
  background-color: var(--el-color-primary-light-7);
  color: var(--el-color-primary-dark-2);
  padding: 1rem;
  box-shadow: var(--box-shadow);
  display: flex;
  align-items: center;
}

.main {
  padding: 0;
}

.main-content {
  display: grid;
  height: calc(100vh - 120px);
}

h1 {
  margin: 0;
  font: inherit;
}
</style>
