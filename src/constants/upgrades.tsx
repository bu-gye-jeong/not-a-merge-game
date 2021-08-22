import Decimal from "decimal.js";
import { setInvMax, setStartingNumber, ISaveState } from "../slices/saveSlice";

export interface IUpgrade {
  count: number;
  content: string;
  price(count: number): string;
  action(
    count: number,
    save: ISaveState
  ): {
    payload?: any;
    type: string;
  };
}

export const upgrades: IUpgrade[] = [
  {
    count: 4,
    content: "Multiply 2 to starting number",
    price: (count) => Decimal.pow(100, count + 1).toString(),
    action: (count) => setStartingNumber(Decimal.pow(2, count).toString()),
  },
  {
    count: 5,
    content: "Expand inventory",
    price: (count) => Decimal.pow(1000, count).mul(30).toString(),
    action: (count, { invMax }) => setInvMax(invMax + 1),
  },
];
