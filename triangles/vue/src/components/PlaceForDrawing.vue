<template>
  <svg viewBox="0 0 1000 1000" class="place">
    <g>
      <line
        v-for="line in lines"
        :key="`line-${line.from.x}-${line.from.y}-${line.to.x}-${line.to.y}`"
        :x1="line.from.x"
        :x2="line.to.x"
        :y1="line.from.y"
        :y2="line.to.y"
        stroke="black"
        stroke-width="3"
      />

      <DotInSvg v-for="dot in additionalDots" :key="`dot-${dot.x}-${dot.y}`" :name="dot.name" :x="dot.x" :y="dot.y"/>
      <DotInSvg v-for="dot in mainDots" :key="`dot-${dot.name}`" :name="dot.name" :x="dot.x" :y="dot.y"/>
      <DotInSvg v-for="dot in dots" :key="`dot-${dot.x}-${dot.y}`" :x="dot.x" :y="dot.y"/>
    </g>
  </svg>
</template>

<script lang="ts">
import {defineAsyncComponent, defineComponent, onMounted} from "vue";
import {useStore} from 'effector-vue/composition'

import {DotsModel} from '../../../effector/entities/dots'
import {MainDotsModel} from '../../../effector/entities/main-dots'
import {DrawingModel} from '../../../effector/features/drawing'

export default defineComponent({
  name: 'PlaceForDrawing',

  components: {
    DotInSvg: defineAsyncComponent(() => import('@/components/DotInSvg.vue'))
  },

  setup() {
    const radius = 3;

    const additionalDots = useStore(DotsModel.$additionalItems)

    const mainDots = useStore(MainDotsModel.$items)
    const lines = useStore(DrawingModel.$lines)
    const dots = useStore(DotsModel.$items)

    onMounted(() => {
      MainDotsModel.loadItems()
    })

    return {
      additionalDots,
      radius,
      mainDots,
      lines,
      dots,
    }
  }
})
</script>

<style lang="scss" scoped>
@use "@/assets/mixins.scss" as *;

.place {
  border: 2px solid black;
  width: calc(var(--app-height) - 120px - 2rem);
  height: calc(var(--app-height) - 120px - 2rem);
  margin: 1rem auto;

  @include mobile {
    @media (orientation: portrait) {
      width: calc(100vw - 2rem);
      height: calc(100vw - 2rem);
    }
  }
}

@keyframes circles {
  0% {
    transform: scale(0);
  }

  70% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

:deep {
  .dot-in-svg-circle {
    &--without-name {
      transform-origin: center;
      animation: circles 500ms ease-in-out;
    }
  }

  .dot-in-svg-text {
    fill: black;
    font-weight: bold;
    transform: translate(-6px, -6px);

    @include mobile {
      transform: translate(-10px, -10px);
    }

    &--0-0 {
      transform: translate(3px, 15px);

      @include mobile {
        transform: translate(5px, 28px);
      }
    }

    &--1000-0 {
      transform: translate(-40px, 15px);

      @include mobile {
        transform: translate(-75px, 28px);
      }
    }

    &--0-1000 {
      transform: translate(3px, -5px);

      @include mobile {
        transform: translate(3px, -7px);
      }
    }
  }
}
</style>
