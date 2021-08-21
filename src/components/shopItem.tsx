import React from "react";
import { IShopContent } from "../constants/shopContents";

export const ShopItem = ({
  content,
  isOpen,
  isClicked,
  canClick,
  onClick,
}: {
  content: IShopContent;
  isOpen: boolean;
  isClicked: boolean;
  canClick: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className={`shopItem 
            ${isOpen ? "unlocked" : "locked"} 
            ${isClicked ? "clicked" : ""}
            ${canClick ? "canClick" : ""}`}
      onClick={onClick}>
      {isOpen ? content.exp : content.price + " to unlock"}
    </button>
  );
};
