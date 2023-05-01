import {sample} from "effector";

import {trianglesDomain} from "./domain";
import {$items} from "./items";

export const reset = trianglesDomain.createEvent();

sample({
  clock: reset,
  fn: () => [],
  target: $items,
})
