import {sample} from "effector";
import {interval} from "patronum";

import {DotsModel} from '../../../entities/dots';
import {MainDotsModel} from '../../../entities/main-dots';

import {getDotsWithNew} from "../lib/getDotsWithNew";

import {trianglesDomain} from "./domain";

export const addRandomDot = trianglesDomain.createEvent();
export const startInterval = trianglesDomain.createEvent();
export const stopInterval = trianglesDomain.createEvent();

const drawingInterval = interval({
  timeout: 1000 / 60,
  start: startInterval,
  stop: stopInterval,
})

export const $isDrawing = drawingInterval.isRunning;

export const addRandomDotFx = trianglesDomain.createEffect(getDotsWithNew);

sample({
  source: {
    dots: DotsModel.$items,
    mainDots: MainDotsModel.$items,
    lastDot: DotsModel.$last,
    firstDot: DotsModel.$first,
    dotsByNumber: MainDotsModel.$byNumber,
  },
  clock: addRandomDot,
  fn: (params) => params,
  target: addRandomDotFx,
})

sample({
  source: addRandomDotFx.doneData,
  target: DotsModel.$items,
})

sample({
  clock: drawingInterval.tick,
  target: addRandomDot,
})
