import type {Dot} from "../../../entities/dots/model";

export function getPolygonBounds(polygon: Dot[]) {
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
