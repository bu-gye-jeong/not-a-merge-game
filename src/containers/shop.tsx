import React from "react";
import { ShopItem } from "../components/shopItem";
import { shopContents } from "../constants/shopContents";
import {
  setMoney,
  buyOrSellShopItem,
  clickShop,
  clearClicked,
} from "../slices/saveSlice";
import { max } from "../utils/array";
import { D } from "../utils/decimal";
import {
  useAppDispatch,
  useAppSelector,
  useSelectInvItem,
} from "../utils/hooks";

export const Shop = () => {
  const dispatch = useAppDispatch();

  const isBought = useAppSelector((state) => state.save.itemBought);
  const money = useAppSelector((state) => state.save.money);
  const clickedShop = useAppSelector((state) => state.save.clickedShop);
  const upgrade = useAppSelector((state) => state.save.upgrade);
  const inventory = useAppSelector((state) => state.save.inventory);
  const invMax = useAppSelector((state) => state.save.invMax);

  const selectInvItem = useSelectInvItem();

  function handleClick(index: number) {
    if (clickedShop) return;
    const DecMoney = D(money);
    if (isBought[index]) {
      if (
        inventory.length === invMax ||
        inventory.length < shopContents[index].paramCount
      )
        return;
      const price = D(shopContents[index].price);
      if (price.gt(DecMoney)) return;
      dispatch(setMoney(DecMoney.sub(price).toString()));
      dispatch(clickShop(index));
      // auto-click number
      if (upgrade[2] !== 0)
        setTimeout(
          () => selectInvItem(max(inventory).index, index),
          (3 - upgrade[2]) * 250
        );
    } else {
      const price = D(shopContents[index].unlockPrice);
      if (price.gt(DecMoney)) return;
      dispatch(setMoney(DecMoney.sub(price).toString()));
      dispatch(buyOrSellShopItem(index));
    }
  }

  const shopItems = (
    <div id="shopItems">
      {shopContents.map((item, index) => {
        return (
          <ShopItem
            content={item}
            isOpen={isBought[index]}
            isClicked={index === clickedShop}
            onClick={() => handleClick(index)}
            cannotClick={
              clickedShop !== undefined ||
              (isBought[index]
                ? D(shopContents[index].price).gt(money) ||
                  inventory.length === invMax ||
                  inventory.length < item.paramCount
                : D(shopContents[index].unlockPrice).gt(money))
            }
            key={index}></ShopItem>
        );
      })}
    </div>
  );

  return (
    <div id="shop" className="tab">
      <h3 className="title" onClick={() => dispatch(clearClicked())}>
        Shop - Press Here or Esc to Reset
      </h3>
      {shopItems}
    </div>
  );
};
