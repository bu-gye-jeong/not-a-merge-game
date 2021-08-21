import React from "react";
import { ShopItem } from "../components/shopItem";
import { shopContents } from "../constants/shopContents";
import { useAppSelector } from "../utils/hooks";

export const Shop = () => {
  const isBought = useAppSelector((state) => state.save.itemBought);

  const shopItems = (
    <div id="shopItems">
      {shopContents.map((item, index) => {
        return (
          <ShopItem
            content={item}
            isOpen={isBought[index]}
            key={index}></ShopItem>
        );
      })}
    </div>
  );

  return (
    <div id="shop">
      <h3 className="title">Shop</h3>
      {shopItems}
    </div>
  );
};
