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
}

export const upgrades: IUpgrade[] = [
  {
    count: 4,
    content: "Multiply 2 to starting number",
    price: (count) =>
      Decimal.pow(10, count + 1)
        .mul(10)
        .toString(),
    action: (count, { startingNumber }) =>
      setStartingNumber(Decimal.mul(startingNumber, 2).toString()),
  },
  {
    count: 5,
    content: "Expand inventory",
    price: (count) => Decimal.pow(1000, count).mul(30).toString(),
    action: (count, { invMax }) => setInvMax(invMax + 1),
  },
  {
    count: 1,
    content: "Auto-select the greatest number",
    price: () => "5000",
  },
];
