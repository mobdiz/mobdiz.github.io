import {atom, computed} from 'nanostores'

import type {Dot, MainDot} from "../models";
import {Line} from "../models/Line";

export const $dotA = atom<MainDot>({x: 500, y: 100, name: 'A'})
export const $dotB = atom<MainDot>({x: 100, y: 900, name: 'B'})
export const $dotC = atom<MainDot>({x: 900, y: 900, name: 'C'})

export const $mainDots = computed([$dotA, $dotB, $dotC], (a, b, c) => [a, b, c])
export const $dots = atom<Dot[]>([])

export const $lastDot = atom<Dot | null>(null)

export const $interval = atom<number | null>(null)

export const $isDrawing = computed($interval, (interval) => Boolean(interval))

// @ts-ignore
const dotsByNumber = new Map<number, Dot>([
  [1, $dotA],
  [2, $dotA],
  [3, $dotB],
  [4, $dotB],
  [5, $dotC],
  [6, $dotC],
])

export const $lines = computed($mainDots, (dots) => {
  const [a, b, c] = dots

  const lines: Line[] = [
    {from: a, to: b},
    {from: b, to: c},
    {from: c, to: a},
  ]

  return lines
})

function rollDice(): number {
  return Math.floor(Math.random() * 6) + 1;
}

function getPolygonBounds(polygon: Dot[]) {
  let minX = polygon[0].x, maxX = polygon[0].x;
  let minY = polygon[0].y, maxY = polygon[0].y;

  for (let i = 1; i < polygon.length; i++) {
    let p = polygon[i];
    minX = Math.min(p.x, minX);
    maxX = Math.max(p.x, maxX);
    minY = Math.min(p.y, minY);
    maxY = Math.max(p.y, maxY);
  }

  return { minX, maxX, minY, maxY };
}

function isPointInsidePolygon(point: Dot, polygon: Dot[]) {
  const { minX, maxX, minY, maxY } = getPolygonBounds(polygon);

  if (point.x < minX || point.x > maxX || point.y < minY || point.y > maxY) {
    return false;
  }

  let inside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const pi = polygon[i];
    const pj = polygon[j];

    if ((pi.y > point.y) !== (pj.y > point.y) &&
      point.x < (pj.x - pi.x) * (point.y - pi.y) / (pj.y - pi.y) + pi.x) {
      inside = !inside;
    }
  }

  return inside;
}

function getRandomPointInsidePolygon(polygon: Dot[]) {
  const { minX, maxX, minY, maxY } = getPolygonBounds(polygon);

  let point;

  do {
    point = {
      x: Math.random() * (maxX - minX) + minX,
      y: Math.random() * (maxY - minY) + minY,
    };
  } while (!isPointInsidePolygon(point, polygon));

  return point;
}

function getMidpoint(point1: Dot, point2: Dot): Dot {
  const midpointX = (point1.x + point2.x) / 2;
  const midpointY = (point1.y + point2.y) / 2;

  return { x: midpointX, y: midpointY };
}

export function drawNewDot() {
  const dots = $dots.get()
  const mainDots = $mainDots.get()
  const lastDot = $lastDot.get()

  if (!lastDot) {
    const dot = getRandomPointInsidePolygon(mainDots)

    $dots.set([dot])
    $lastDot.set(dot)
  } else {
    const randomNum = rollDice()
    const mainDot = dotsByNumber.get(randomNum).get()

    if (mainDot) {
      const dot = getMidpoint(lastDot, mainDot)

      $dots.set([...dots, dot])
      $lastDot.set(dot)
    }
  }
}

export function resetDots() {
  $dots.set([])
  $lastDot.set(null)
}

export function startDrawing() {
  const interval = setInterval(drawNewDot, 1000 / 60)

  $interval.set(interval)

  return interval
}

export function stopDrawing() {
  const interval = $interval.get()

  if (interval) {
    clearInterval(interval)

    $interval.set(null)
  }
}
