import React from "react";
import { IShopContent } from "../constants/shopContents";
import ReactHtmlParser from "react-html-parser";

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
        ? " - Cost : " + content.price
        : content.unlockPrice + " to unlock"}
    </button>
  );
};
