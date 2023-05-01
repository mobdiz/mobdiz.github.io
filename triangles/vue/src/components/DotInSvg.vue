<template>
  <g>
    <circle :cx="x" :cy="y" :r="radius"/>

    <text :x="x" :y="y" font-size="16" fill="black" v-if="name" class="dot-in-svg" :class="`dot-in-svg--${x}-${y}`" font-weight="bold">
      {{ name }}
    </text>
  </g>
</template>

<script lang="ts">
import {defineComponent} from "vue";

import type { DotsModel } from "../../../effector/entities/dots";

type Dot = DotsModel.Dot

export default defineComponent({
  name: 'DotInSvg',

  props: {
    x: {
      type: Number,
      required: true,
    },

    y: {
      type: Number,
      required: true,
    },

    name: {
      type: String,
      default: undefined,
    },
  },

  setup() {
    const radius = 3;

    return {
      radius,
    }
  },
})
</script>
