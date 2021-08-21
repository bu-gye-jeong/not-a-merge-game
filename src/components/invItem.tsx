import React from "react";

export const InvItem = ({
  content,
  canClick,
  onClick,
}: {
  content: number;
  canClick: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <span className={`invItem ${canClick ? "canClick" : ""}`} onClick={onClick}>
      {content}
    </span>
  );
};
