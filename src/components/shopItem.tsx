import React from "react";
import { IShopContent } from "../constants/shopContents";

export const ShopItem = ({
  content,
  isOpen,
  isClicked,
  cannotClick,
  onClick,
}: {
  content: IShopContent;
  isOpen: boolean;
  isClicked: boolean;
  cannotClick: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className={`shopItem 
            ${isOpen ? "unlocked" : "locked"} 
            ${isClicked ? "clicked" : ""}
            ${cannotClick ? "cannotClick" : ""}`}
      onClick={onClick}>
      {isOpen ? content.exp : content.price + " to unlock"}
    </button>
  );
};
