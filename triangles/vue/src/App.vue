<template>
  <el-container class="layout">
    <el-aside class="aside" :width="asideWidthInPx" v-if="!isMobile">
      <el-scrollbar>
        <div class="aside-title">
          <h2>Settings</h2>
        </div>

        <DotsSettings @reset="handleResetSettings" />
      </el-scrollbar>
    </el-aside>

    <el-drawer
      v-model="isShowedDrawer"
      direction="ltr"
      title="Settings"
      class="drawer"
    >
      <DotsSettings @reset="handleResetSettings" />
    </el-drawer>


    <el-container class="content">
      <el-header class="header">
        <el-button
          v-if="isMobile"
          type="text"
          size="large"
          class="header-button settings-button"
          @click="isShowedDrawer = !isShowedDrawer"
        >
          <el-icon size="24"><Setting /></el-icon>
        </el-button>

        <el-text tag="h1">
          Dots: {{ dots.length }}. Limit: {{ limit }}
        </el-text>

        <el-button
          v-if="isMobile"
          type="text"
          size="large"
          class="header-button toggle-button"
          @click="handleClickToggleButton"
        >
          <el-icon size="24">
            <VideoPause v-if="isDrawing" />
            <VideoPlay v-else />
          </el-icon>
        </el-button>
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
import {defineAsyncComponent, defineComponent, ref, watch} from "vue";
import {useStore} from "effector-vue/composition";
import {Setting, VideoPause, VideoPlay} from "@element-plus/icons-vue";

import {useDevice} from "@/utils/useDevice";

import {DotsModel} from "../../effector/entities/dots";
import {DrawingModel} from "../../effector/features/drawing";

export default defineComponent({
  components: {
    VideoPause,
    VideoPlay,
    Setting,
    DotsSettings: defineAsyncComponent(() => import('@/components/DotsSettings.vue')),
    PlaceForDrawing: defineAsyncComponent(() => import('@/components/PlaceForDrawing.vue'))
  },

  setup() {
    const {isMobile} = useDevice()

    const dots = useStore(DotsModel.$items)
    const limit = useStore(DrawingModel.$limit);

    const isDrawing = useStore(DrawingModel.$isDrawing)

    const asideWidth = 300

    const asideWidthInPx = `${asideWidth}px`

    const isShowedDrawer = ref(false)

    watch(isDrawing, (value) => {
      if (value) {
        isShowedDrawer.value = false
      }
    })

    function handleClickToggleButton() {
      isDrawing.value ? DrawingModel.stopInterval() : DrawingModel.startInterval()
    }

    function handleResetSettings() {
      isShowedDrawer.value = false
    }

    return {
      isMobile,

      isShowedDrawer,

      dots,
      limit,

      asideWidth,
      asideWidthInPx,

      isDrawing,

      handleClickToggleButton,
      handleResetSettings,
    }
  }
})
</script>

<style scoped lang="scss">
@use "@/assets/mixins.scss" as *;

.layout {
  height: 100vh;

  --box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);

  @include mobile {
    height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom));
  }
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

  @include mobile {
    padding: 0;
  }
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

  @include mobile {
    height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 120px);
  }
}

.header-button {
  padding-left: 1rem;
  padding-right: 1rem;
  height: 100%;
}

.toggle-button {
  margin-left: auto;
}

:deep(.el-drawer) {
  width: 100% !important;
}

h1 {
  margin: 0;
}
</style>
