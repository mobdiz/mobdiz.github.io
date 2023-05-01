import {sample} from "effector";

import type {MainDot} from "./types"
import {trianglesDomain} from "./domain"
import {$items} from "./items";

export const setItems = trianglesDomain.createEvent<MainDot[]>()

sample({
  clock: setItems,
  target: $items,
})
