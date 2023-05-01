import type {MainDot} from "./types";
import {$items} from "./items";

export const $byNumber = $items.map((dots) => {
  const dotsByNumber = new Map<number, MainDot>()

  dots.forEach((dot, i) => {
    if (i === 0) {
      dotsByNumber.set(1, dot)
      dotsByNumber.set(2, dot)
    } else if (i === 1) {
      dotsByNumber.set(3, dot)
      dotsByNumber.set(4, dot)
    } else if (i === 2) {
      dotsByNumber.set(5, dot)
      dotsByNumber.set(6, dot)
    }
  })

  return dotsByNumber
})
