<template>
  <el-form label-position="top" @submit.native.prevent="handleSubmit">
    <el-form-item label="Dot A">
      <el-input-number v-model="dotAX" :min="0" :max="1000" :step="1" label="X"/>
      <el-input-number v-model="dotAY" :min="0" :max="1000" :step="1" label="Y"/>
    </el-form-item>

    <el-button type="primary" @click="handleClickToggleDrawingButton">
      {{ isDrawing ? 'Stop drawing' : 'Start drawing' }}
    </el-button>

    <el-button type="primary" @click="handleClickResetButton">
      Reset
    </el-button>
  </el-form>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import {useStore} from "@nanostores/vue";

import {$dotA, $dotB, $dotC, $isDrawing, startDrawing, stopDrawing, resetDots} from "../../../nanostores";

export default defineComponent({
  name: 'DotsSettings',

  setup() {
    const [dotA, dotB, dotC] = [
      useStore($dotA),
      useStore($dotB),
      useStore($dotC),
    ]

    const isDrawing = useStore($isDrawing)

    const dotAX = computed({
      get: () => dotA.value.x,
      set: (value: number) => $dotA.set({...dotA.value, x: value}),
    })

    const dotAY = computed({
      get: () => dotA.value.y,
      set: (value: number) => $dotA.set({...dotA.value, y: value}),
    })

    const dotBX = computed({
      get: () => dotB.value.x,
      set: (value: number) => $dotB.set({...dotB.value, x: value}),
    })

    const dotBY = computed({
      get: () => dotB.value.y,
      set: (value: number) => $dotB.set({...dotB.value, y: value}),
    })

    const dotCX = computed({
      get: () => dotC.value.x,
      set: (value: number) => $dotC.set({...dotC.value, x: value}),
    })

    const dotCY = computed({
      get: () => dotC.value.y,
      set: (value: number) => $dotC.set({...dotC.value, y: value}),
    })

    const handleSubmit = () => {

    }

    function handleClickToggleDrawingButton() {
      if (isDrawing.value) {
        stopDrawing()
      } else {
        startDrawing()
      }
    }

    function handleClickResetButton() {
      resetDots()
    }

    return {
      dotAX,
      dotAY,
      dotBX,
      dotBY,
      dotCX,
      dotCY,

      isDrawing,

      handleSubmit,
      handleClickToggleDrawingButton,
      handleClickResetButton,
    }
  }
})
</script>
