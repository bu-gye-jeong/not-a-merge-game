import Decimal from "decimal.js";
import { D } from "./decimal";

export const max = (arr: Array<Decimal.Value>) => {
  if (arr.length === 0) return { index: 0, value: D(0) };
  return arr.reduce(
    (acc, v, i) => {
      if (D(acc.value).lt(v)) {
        acc.index = i;
        acc.value = v;
      }
      return acc;
    },
    { index: 0, value: arr[0] }
  );
};
