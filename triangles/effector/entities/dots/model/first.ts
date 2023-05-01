import {trianglesDomain} from "./domain";
import type {Dot} from "./types";

export const setFirst = trianglesDomain.createEvent<Dot | null>();

export const $first = trianglesDomain.createStore<Dot | null>(null);
