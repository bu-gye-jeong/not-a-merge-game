// Shop Contents

import Decimal from "decimal.js";

export interface IShopContent {
  paramCount: number;
  exp: string;
  calc(...num: string[]): string;
  unlockPrice: string;
  price: string;
}

export const shopContents: IShopContent[] = [
  {
    paramCount: 1,
    exp: "x+1",
    calc: (num) => Decimal.add(1, num).toString(),
    unlockPrice: "0",
    price: "0",
  },
  {
    paramCount: 1,
    exp: "2x",
    calc: (num) => Decimal.mul(num, 2).toString(),
    unlockPrice: "100",
    price: "10",
  },
];
