import Decimal from "decimal.js";

export const D = ($: Decimal.Value) => new Decimal($);

export const setMaxDigit = (value: Decimal.Value, digit: number) => {
  const num = D(value).toPrecision(5);

  if (num.includes("e")) {
    return num.replace(/0+(?=e)/g, "");
  } else {
    return num.replace(/(\..*?)0+$/, "$1").replace(/\.$/, "");
  }
};
