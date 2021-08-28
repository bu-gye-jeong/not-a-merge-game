import Decimal from "decimal.js";
import { setInvMax, setStartingNumber, ISaveState } from "../slices/saveSlice";

export interface IUpgrade {
  count: number;
  content: string;
  price(count: number): string;
  action?(
    count: number,
    save: ISaveState
  ): {
    payload?: any;
    type: string;
  };
  sellAction?(
    count: number,
    save: ISaveState
  ): {
    payload?: any;
    type: string;
  };
}

export const upgrades: IUpgrade[] = [
  {
    count: 10,
    content: "Multiply 2 to starting number",
    price: (count) =>
      Decimal.pow(10, 1 + [0, 1, 2, 3, 4, 6, 9, 16, 25, 36, 81][count])
        .mul(10)
        .toString(),
    action: (count, { startingNumber }) =>
      setStartingNumber(Decimal.mul(startingNumber, 2).toString()),
    sellAction: (count, { startingNumber }) =>
      setStartingNumber(Decimal.div(startingNumber, 2).toString()),
  },
  {
    count: 5,
    content: "Expand inventory",
    price: (count) => Decimal.pow(1000, count).mul(30).toString(),
    action: (count, { invMax }) => setInvMax(invMax + 1),
    sellAction: (count, { invMax }) => setInvMax(invMax - 1),
  },
  {
    count: 3,
    content: "Auto-select the greatest number",
    price: (count) => Decimal.pow(100, count).mul(5000).toString(),
  },
  {
    count: 1,
    content: "Auto-sell when inventory is full",
    price: () => "300000",
  },
];
