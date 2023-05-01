import type {Dot} from "../../../entities/dots/model";
import {getPolygonBounds} from "./getPolygonBounds";

export function isPointInsidePolygon(point: Dot, polygon: Dot[]) {
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
