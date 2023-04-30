<template>
  <svg viewBox="0 0 1000 1000" class="place">
    <g>
      <template v-if="zeroDot">
        <circle :cx="zeroDot.x" :cy="zeroDot.y" :r="radius"/>

        <text :x="zeroDot.x + 4" :y="zeroDot.y + 16" font-size="16" fill="gray">
          {{ zeroDot.name }}
        </text>
      </template>

      <template v-for="dot in mainDots" :key="`dot-${dot.x}-${dot.y}`">
        <circle :cx="dot.x" :cy="dot.y" :r="radius"/>

        <text :x="dot.x + 4" :y="dot.y + 16" font-size="16" fill="gray">
          {{ dot.name }}
        </text>
      </template>

      <circle v-for="dot in dots" :cx="dot.x" :cy="dot.y" :r="radius" :key="`dot-${dot.x}-${dot.y}`"/>

      <line
        v-for="line in lines"
        :key="`line-${line.from.x}-${line.from.y}-${line.to.x}-${line.to.y}`"
        :x1="line.from.x"
        :x2="line.to.x"
        :y1="line.from.y"
        :y2="line.to.y"
        stroke="black"
        stroke-width="1"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useStore} from '@nanostores/vue';

import {$dots, $lines, $mainDots} from '../../../nanostores/'

import type {MainDot} from "../../../models";

export default defineComponent({
  name: 'PlaceForDrawing',

  setup() {
    const radius = 3;

    const zeroDot: MainDot = {
      name: 'O',
      x: 0,
      y: 0,
    };

    const mainDots = useStore($mainDots)
    const lines = useStore($lines)
    const dots = useStore($dots)

    return {
      zeroDot,
      radius,
      mainDots,
      lines,
      dots,
    }
  }
})
</script>

<style scoped>
.place {
  border: 1px solid black;
  width: calc(100vmin - 120px - 2rem);
  height: calc(100vmin - 120px - 2rem);
  margin: 1rem auto;
}
</style>
