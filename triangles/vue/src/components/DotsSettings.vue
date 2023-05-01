<template>
  <el-form label-position="top" @submit.native.prevent="handleSubmit">
    <el-form-item v-for="dot in mainDots" :key="dot.name" :label="`Dot ${dot.name}`" class="dot-params">
      <div class="dot-param">
        <label :for="`dot-${dot.name}-x`" class="dot-param-label">
          X
        </label>

        <el-input-number
          :id="`dot-${dot.name}-x`"
          :max="1000"
          :min="0"
          :model-value="dot.x"
          :step="10"
          class="dot-param-input"
          controls-position="right"
          @change="setValueToMainDotsByChar(dot.name, 'x', $event)"
        />
      </div>

      <div class="dot-param">
        <label :for="`dot-${dot.name}-y`" class="dot-param-label">
          Y
        </label>

        <el-input-number
          :id="`dot-${dot.name}-y`"
          :max="1000"
          :min="0"
          :model-value="dot.y"
          :step="10"
          class="dot-param-input"
          controls-position="right"
          @change="setValueToMainDotsByChar(dot.name, 'y', $event)"
        />
      </div>
    </el-form-item>

    <div class="button-group">
      <el-button native-type="submit" type="primary" size="large">
        {{ isDrawing ? 'Pause' : 'Run' }}
      </el-button>

      <el-button native-type="reset" type="default" size="large" @click.prevent="handleClickClearButton">
        Clear
      </el-button>
    </div>
  </el-form>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from "vue";
import {useStore} from "effector-vue/composition";

import {MainDotsModel} from "../../../effector/entities/main-dots";
import {DotsModel} from "../../../effector/entities/dots";
import {DrawingModel} from "../../../effector/features/drawing";

export default defineComponent({
  name: 'DotsSettings',

  setup() {
    const isDrawing = useStore(DrawingModel.$isDrawing)

    const mainDotsFromStore = useStore(MainDotsModel.$items)
    const firstDotFromStore = useStore(DotsModel.$first)

    const mainDots = ref<MainDotsModel.MainDot[]>([])
    const firstDot = ref<DotsModel.Dot | null>()

    watch(mainDotsFromStore, (value) => {
      mainDots.value = value.map(dot => ({...dot}))
    }, {
      immediate: true
    })

    watch(firstDotFromStore, (value) => {
      firstDot.value = value ? {...value} : null
    }, {
      immediate: true
    })

    function setValueToMainDotsByChar(char?: string, key: 'x' | 'y' = 'x', value = 0) {
      if (!char || !value) {
        return
      }

      const dot = mainDots.value.find(dot => dot.name === char);

      const isCorrectKey = ['x', 'y'].includes(key)

      if (dot && isCorrectKey) {
        mainDots.value = mainDots.value.map(dot => {
          if (dot.name === char) {
            return {
              ...dot,
              [key]: value
            }
          }

          return dot
        })
      }
    }

    function handleSubmit() {
      const items = mainDots.value.map(dot => ({...dot}))

      if (isDrawing.value) {
        DrawingModel.stopInterval()
      } else {
        MainDotsModel.setItems(items)
        DrawingModel.startInterval()
      }
    }

    function handleClickClearButton() {
      DrawingModel.stopInterval()
      DotsModel.reset()
    }

    return {
      isDrawing,
      mainDots,
      firstDot,

      setValueToMainDotsByChar,

      handleSubmit,
      handleClickClearButton,
    }
  }
})
</script>

<style scoped lang="scss">
:deep(.el-form-item__label) {
  color: inherit;
  font-weight: bold;
}

:deep(.el-input-number) {
  width: initial;
}

.dot-param {
  width: 100%;
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 8px;
}

.button-group {
  display: flex;
  justify-content: flex-end;
}

.dot-params {
  :deep(.el-form-item__content) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
}
</style>
