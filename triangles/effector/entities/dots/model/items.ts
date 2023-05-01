import {trianglesDomain} from "./domain";
import type {Dot} from "./types";

export const $items = trianglesDomain.createStore<Dot[]>([]);
