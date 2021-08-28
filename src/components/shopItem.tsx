import React from "react";
import { IShopContent } from "../constants/shopContents";
import ReactHtmlParser from "react-html-parser";
import { maxDigit } from "../constants/numbers";
import { setMaxDigit } from "../utils/decimal";

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
            ${isClicked ? "clicked" : ""}
            ${cannotClick ? "cannotClick" : ""}`}
      onClick={onClick}>
      {isOpen ? (
        <span className="exp">{ReactHtmlParser(content.exp)}</span>
      ) : (
        ""
      )}
      {isOpen
        ? " - Cost : " + setMaxDigit(content.price, maxDigit)
        : setMaxDigit(content.unlockPrice, maxDigit) + " to unlock"}
    </button>
  );
};
