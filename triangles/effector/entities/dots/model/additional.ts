import {trianglesDomain} from "./domain";
import type {Dot} from "./types";

export const $additionalItems = trianglesDomain.createStore<Dot[]>([
  {x: 0, y: 0, name: '0'},
  {x: 1000, y: 0, name: '1000'},
  {x: 0, y: 1000, name: '1000'},
]);
