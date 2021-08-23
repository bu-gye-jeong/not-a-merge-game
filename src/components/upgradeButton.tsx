import React from "react";

export const UpgradeButton = ({
  content,
  onBuy,
  onSell,
  buyClassName,
  sellClassName,
}: {
  content: string;
  onBuy: React.MouseEventHandler<HTMLButtonElement>;
  onSell: React.MouseEventHandler<HTMLButtonElement>;
  buyClassName: string;
  sellClassName: string;
}) => {
  return (
    <div className="upgrade">
      <button className={buyClassName} onClick={onBuy}>
        {content.split("\n").map((line, i) => {
          return (
            <span key={i}>
              {line}
              <br />
            </span>
          );
        })}
      </button>

      <button className={sellClassName} onClick={onSell}>
        Sell
      </button>
    </div>
  );
};
