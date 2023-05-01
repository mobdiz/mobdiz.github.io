import {guard, sample} from "effector";
import {interval} from "patronum";

import {DotsModel} from '../../../entities/dots';
import {MainDotsModel} from '../../../entities/main-dots';

import {getDotsWithNew} from "../lib/getDotsWithNew";

import {trianglesDomain} from "./domain";

export const addRandomDot = trianglesDomain.createEvent();
export const startInterval = trianglesDomain.createEvent();
export const stopInterval = trianglesDomain.createEvent();

const drawingInterval = interval({
  timeout: 1000 / 600,
  start: startInterval,
  stop: stopInterval,
})

export const $limit = trianglesDomain.createStore(10000);

export const $isDrawing = drawingInterval.isRunning;

export const addRandomDotFx = trianglesDomain.createEffect(getDotsWithNew);

sample({
  clock: addRandomDot,
  source: {
    dots: DotsModel.$items,
    mainDots: MainDotsModel.$items,
    lastDot: DotsModel.$last,
    firstDot: DotsModel.$first,
    dotsByNumber: MainDotsModel.$byNumber,
  },
  fn: (params) => params,
  target: addRandomDotFx,
})

sample({
  source: addRandomDotFx.doneData,
  target: DotsModel.$items,
})

guard({
  clock: drawingInterval.tick,
  source: [DotsModel.$items, $limit],
  filter: ([dots, limit]) => dots.length < limit,
  target: addRandomDot,
})

guard({
  clock: addRandomDotFx.doneData,
  source: $limit,
  filter: (limit, dots) => dots.length >= limit,
  target: stopInterval,
})
