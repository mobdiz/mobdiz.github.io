import type {Dot} from "../../../entities/dots/model";

export function getMidpoint(point1: Dot, point2: Dot): Dot {
  const midpointX = (point1.x + point2.x) / 2;
  const midpointY = (point1.y + point2.y) / 2;

  return { x: midpointX, y: midpointY };
}
