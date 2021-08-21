export interface IShopContent {
  paramCount: number;
  exp: string;
  calc(...num: number[]): number;
  price: number;
}

export const shopContents: IShopContent[] = [
  {
    paramCount: 1,
    exp: "x+1",
    calc: (num) => num + 1,
    price: 0,
  },
  {
    paramCount: 1,
    exp: "2x",
    calc: (num) => num * 2,
    price: 100,
  },
];
