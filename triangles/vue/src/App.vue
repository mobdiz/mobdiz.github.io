<template>
  <el-container class="layout">
    <el-aside class="aside" :width="asideWidthInPx" v-if="!isMobile">
      <el-scrollbar>
        <div class="aside-title">
          <h2>Settings</h2>
        </div>

        <DotsSettings />
      </el-scrollbar>
    </el-aside>

    <el-drawer
      v-model="isShowedDrawer"
      direction="ltr"
      title="Settings"
      class="drawer"
    >
      <DotsSettings />
    </el-drawer>


    <el-container class="content">
      <el-header class="header">
        <el-button
          v-if="isMobile"
          type="primary"
          size="small"
          class="settings-button"
          @click="isShowedDrawer = !isShowedDrawer"
        >
          Settings
        </el-button>

        <el-text tag="h1">
          Dots: {{ dots.length }}. Limit: {{ limit }}
        </el-text>
      </el-header>

      <el-main class="main">
        <el-scrollbar>
          <div class="main-content">
            <PlaceForDrawing />
          </div>
        </el-scrollbar>
      </el-main>

      <el-footer class="footer">
        <el-text>&copy; <el-link href="http://mobdiz.ru/">MobDiz</el-link> (Oleg Kazannikov)</el-text>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import {defineAsyncComponent, defineComponent, ref} from "vue";
import {useStore} from "effector-vue/composition";

import {useDevice} from "@/utils/useDevice";

import {DotsModel} from "../../effector/entities/dots";
import {DrawingModel} from "../../effector/features/drawing";

export default defineComponent({
  components: {
    DotsSettings: defineAsyncComponent(() => import('@/components/DotsSettings.vue')),
    PlaceForDrawing: defineAsyncComponent(() => import('@/components/PlaceForDrawing.vue'))
  },

  setup() {
    const {isMobile} = useDevice()

    const dots = useStore(DotsModel.$items)
    const limit = useStore(DrawingModel.$limit);

    const asideWidth = 300

    const asideWidthInPx = `${asideWidth}px`

    const isShowedDrawer = ref(false)

    return {
      isMobile,

      isShowedDrawer,

      dots,
      limit,

      asideWidth,
      asideWidthInPx
    }
  }
})
</script>

<style scoped lang="scss">
@use "@/assets/mixins.scss" as *;

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

.settings-button {
  margin-right: 1em;
}

:deep(.el-drawer) {
  width: 100% !important;
}

h1 {
  margin: 0;
}
</style>
