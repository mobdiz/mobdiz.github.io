import {$items} from "./items";

export const $last = $items.map((dots) => dots[dots.length - 1] || null);
