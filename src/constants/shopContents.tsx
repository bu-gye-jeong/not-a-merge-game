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
  {
    paramCount: 2,
    exp: "2x+y",
    calc: (num1, num2) => D(num1).mul(2).add(num2).toString(),
    unlockPrice: "300",
    price: "40",
  },
  {
    paramCount: 1,
    exp: "3x",
    calc: (num) => D(num).mul(3).toString(),
    unlockPrice: "2000",
    price: "100",
  },
  {
    paramCount: 1,
    exp: "x<sup>1.2</sup>",
    calc: (num) => D(num).pow(1.2).toString(),
    unlockPrice: "100000",
    price: "5000",
  },
  {
    paramCount: 1,
    exp: "3x<sup>1.1</sup>",
    calc: (num) => D(num).pow(1.1).mul(3).toString(),
    unlockPrice: "1e+6",
    price: "50000",
  },
];
