import {onMounted, onUnmounted, ref} from "vue";

export function useDevice() {
  const isMobile = ref(false)

  const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
    isMobile.value = e.matches
  }

  const mediaQuery = window.matchMedia('(max-width: 767px)')

  onMounted(() => {
    handleResize(mediaQuery)

    mediaQuery.addEventListener('change', handleResize)
  })

  onUnmounted(() => {
    mediaQuery.removeEventListener('change', handleResize)
  })

  return { isMobile }
}
