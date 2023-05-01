<template>
  <div class="test">
    {{ mainDots }}
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from "vue";
import {useStore} from "effector-vue/composition";

import {MainDotsModel} from "../../../effector/entities/main-dots";

export default defineComponent({
  name: 'TestFS',

  setup() {
    const mainDots = useStore(MainDotsModel.$items)

    onMounted(() => {
      MainDotsModel.loadItems()
    })

    return {
      mainDots
    }
  }
});
</script>
