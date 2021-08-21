import React from "react";
import { IShopContent } from "../constants/shopContents";

export const ShopItem = ({
  content,
  isOpen,
}: {
  content: IShopContent;
  isOpen: boolean;
}) => {
  if (isOpen) {
    return <button className="shopItem unlocked">{content.exp}</button>;
  }
  return <button className="shopItem locked">{content.price}</button>;
};
