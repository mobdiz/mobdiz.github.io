import {sample} from "effector";

import {BrowserStorage} from "../../../shared/model";

import {trianglesDomain} from "./domain";
import type {MainDot} from "./types";
import {defaultItems} from "./default";
import {$items} from "./items";

export const loadItems = trianglesDomain.createEvent()


const loadItemsFx = trianglesDomain.createEffect(() =>
  BrowserStorage.local.get<MainDot[]>('main-dots') || defaultItems
)

sample({
  clock: loadItems,
  target: loadItemsFx,
})

sample({
  clock: loadItemsFx.doneData,
  target: $items,
})
