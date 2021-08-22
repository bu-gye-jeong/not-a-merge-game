// Shop Contents

import { D } from "../utils/decimal";

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
    calc: (num) => D(num).add(1).toString(),
    unlockPrice: "0",
    price: "0",
  },
  {
    paramCount: 1,
    exp: "2x",
    calc: (num) => D(num).mul(2).toString(),
    unlockPrice: "100",
    price: "10",
  },
];
