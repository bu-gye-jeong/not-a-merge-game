import React from "react";
import { InvItem } from "../components/invItem";
import { shopContents } from "../constants/shopContents";
import { addNumber, clearClicked, clickNumber } from "../slices/saveSlice";
import { useAppDispatch, useAppSelector } from "../utils/hooks";

export const Inventory = () => {
  const dispatch = useAppDispatch();

  const inventory = useAppSelector((state) => state.save.inventory);
  const invMax = useAppSelector((state) => state.save.invMax);
  const clickedShop = useAppSelector((state) => state.save.clickedShop);
  const clickedNumber = useAppSelector((state) => state.save.clickedNumber);
  const money = useAppSelector((state) => state.save.money);

  const handleClick = (index: number) => {
    if (
      clickedShop === undefined ||
      (clickedNumber !== undefined && clickedNumber.includes(index))
    )
      return;
    const shopContent = shopContents[clickedShop!];
    if (clickedNumber?.length ?? 0 + 1 < shopContent.paramCount)
      return dispatch(clickNumber(index));
    const calcParam = clickedNumber
      ? [...clickedNumber, index].map((v) => inventory[v])
      : [inventory[index]];
    dispatch(addNumber(shopContent.calc(...calcParam)));
    dispatch(clearClicked());
  };

  return (
    <div id="inventory" className="tab">
      <h3 className="title">
        Inventory - {inventory.length} / {invMax}
      </h3>
      <h3 id="resourceDisplayer">Money : {money}</h3>
      <div id="invItems">
        {inventory.map((item, index) => {
          return (
            <InvItem
              content={item}
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
