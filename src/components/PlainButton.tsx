import React from "react";

export const PlainButton = ({
  content,
  onClick,
  id,
  className,
}: {
  content: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  id?: string;
  className?: string;
}) => {
  return (
    <button onClick={onClick} className={`plainButton ${className}`} id={id}>
      {content.split("\n").map((line, i) => {
        return (
          <span key={i}>
            {line}
            <br />
          </span>
        );
      })}
    </button>
  );
};
