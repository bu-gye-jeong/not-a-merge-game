import React from "react";
import { ShopItem } from "../components/shopItem";
import { shopContents } from "../constants/shopContents";
import { addMoney, buyOrSellShopItem, clickShop } from "../slices/saveSlice";
import { useAppDispatch, useAppSelector } from "../utils/hooks";

export const Shop = () => {
  const dispatch = useAppDispatch();

  const isBought = useAppSelector((state) => state.save.itemBought);
  const money = useAppSelector((state) => state.save.money);
  const clickedShop = useAppSelector((state) => state.save.clickedShop);

  function handleClick(index: number) {
    if (isBought[index]) {
      dispatch(clickShop(index));
    } else {
      const price = shopContents[index].price;
      if (price > money) return;
      dispatch(addMoney(-price));
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
              clickedShop !== undefined || shopContents[index].price > money
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
