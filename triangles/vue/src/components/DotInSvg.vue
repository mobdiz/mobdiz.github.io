<template>
  <g>
    <circle :cx="x" :cy="y" :r="radius" class="dot-in-svg-circle" :class="{'dot-in-svg-circle--without-name': !name}"/>

    <text
      v-if="name"
      :class="`dot-in-svg-text--${x}-${y}`"
      :font-size="fontSize"
      :x="x"
      :y="y"
      class="dot-in-svg-text"
    >
      {{ name }}
    </text>
  </g>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";

import type {DotsModel} from "../../../effector/entities/dots";
import {useDevice} from "@/utils/useDevice";

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
    const {isMobile} = useDevice();

    const radius = 2;

    const fontSize = computed(() => isMobile.value ? 32 : 16)

    return {
      radius,
      fontSize,
    }
  },
})
</script>
