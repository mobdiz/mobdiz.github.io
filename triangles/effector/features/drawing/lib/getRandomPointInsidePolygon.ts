import type {Dot} from "../../../entities/dots/model";
import {getPolygonBounds} from "./getPolygonBounds";
import {isPointInsidePolygon} from "./isPointInsidePolygon";

export function getRandomPointInsidePolygon(polygon: Dot[]) {
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
