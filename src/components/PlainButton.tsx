import React from "react";

export const PlainButton = ({
  content,
  onClick,
}: {
  content: string;
  onClick?(): React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={onClick} className="plainButton">
      {content}
    </button>
  );
};
