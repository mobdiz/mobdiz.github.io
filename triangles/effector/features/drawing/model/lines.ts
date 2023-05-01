import { MainDotsModel } from "../../../entities/main-dots";

export const $lines = MainDotsModel.$items.map((dots) => {
  if (dots.length !== 3) {
    return [];
  }

  const [a, b, c] = dots;

  return [
    {from: a, to: b},
    {from: b, to: c},
    {from: c, to: a},
  ];
})
