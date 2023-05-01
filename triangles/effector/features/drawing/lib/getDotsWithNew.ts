import type {MainDot} from "../../../entities/main-dots/model";
import type {Dot} from "../../../entities/dots/model";
import {rollDice} from "./rollDice";
import {getMidpoint} from "./getMidpoint";
import {getRandomPointInsidePolygon} from "./getRandomPointInsidePolygon";

export interface GetNewDotsWithNewParams {
  dots: Dot[],
  mainDots: MainDot[],
  lastDot: Dot | null,
  firstDot: Dot | null,
  dotsByNumber: Map<number, MainDot>,
}

export function getDotsWithNew(params: GetNewDotsWithNewParams): Dot[] {
  const dots = [...params.dots]
  const mainDots = [...params.mainDots]
  const dotsByNumber = new Map(params.dotsByNumber)
  const firstDot = params.firstDot

  let lastDot = params.lastDot

  if (lastDot) {
    const randomNum = rollDice()
    const mainDot = dotsByNumber.get(randomNum)

    if (mainDot) {
      const dot = getMidpoint(lastDot, mainDot)

      if (dot) {
        dots.push(dot)
      }
    }
  } else {
    const dot = firstDot || getRandomPointInsidePolygon(mainDots)

    dots.push(dot)
  }

  return dots
}
