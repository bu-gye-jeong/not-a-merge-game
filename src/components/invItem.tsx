import React from "react";

export const InvItem = ({
  content,
  cannotClick,
  onClick,
}: {
  content: number;
  cannotClick: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className={`invItem ${cannotClick ? "cannotClick" : ""}`}
      onClick={onClick}>
      {content}
    </button>
  );
};
