import React from "react";
import { InvItem } from "../components/invItem";
import { maxDigit } from "../constants/numbers";
import { setMaxDigit } from "../utils/decimal";
import { useAppSelector, useSelectInvItem } from "../utils/hooks";

export const Inventory = () => {
  const inventory = useAppSelector((state) => state.save.inventory);
  const invMax = useAppSelector((state) => state.save.invMax);
  const clickedShop = useAppSelector((state) => state.save.clickedShop);
  const clickedNumber = useAppSelector((state) => state.save.clickedNumber);
  const money = useAppSelector((state) => state.save.money);
  const pp = useAppSelector((state) => state.save.pp);

  const handleClick = useSelectInvItem();

  return (
    <div id="inventory" className="tab">
      <h3 className="title">
        Inventory - {inventory.length} / {invMax}
      </h3>
      <div id="displayer">
        <h3 className="money">Money : {setMaxDigit(money, maxDigit)}</h3>
        <h3 className="pp">PP : {pp}</h3>
      </div>
      <div id="invItems">
        {inventory.map((item, index) => {
          return (
            <InvItem
              content={setMaxDigit(item, maxDigit)}
              cannotClick={
                clickedShop === undefined ||
                (clickedNumber !== undefined && clickedNumber.includes(index))
              }
              onClick={() => handleClick(index)}
              key={index}></InvItem>
          );
        })}
      </div>
    </div>
  );
};
