import React from "react";
import { ShopItem } from "../components/shopItem";
import { shopContents } from "../constants/shopContents";
import { setMoney, buyOrSellShopItem, clickShop } from "../slices/saveSlice";
import { D } from "../utils/decimal";
import { useAppDispatch, useAppSelector } from "../utils/hooks";

export const Shop = () => {
  const dispatch = useAppDispatch();

  const isBought = useAppSelector((state) => state.save.itemBought);
  const money = useAppSelector((state) => state.save.money);
  const clickedShop = useAppSelector((state) => state.save.clickedShop);

  function handleClick(index: number) {
    const DecMoney = D(money);
    if (isBought[index]) {
      const price = D(shopContents[index].price);
      if (price.gt(DecMoney)) return;
      dispatch(setMoney(DecMoney.sub(price).toString()));
      dispatch(clickShop(index));
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
              (isBought[index] && D(shopContents[index].price).gt(money)) ||
              (!isBought[index] && D(shopContents[index].unlockPrice).gt(money))
            }
            key={index}></ShopItem>
        );
      })}
    </div>
  );

  return (
    <div id="shop" className="tab">
      <h3 className="title">Shop</h3>
      {shopItems}
    </div>
  );
};
