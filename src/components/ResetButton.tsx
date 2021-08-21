import { useState } from "react";
import React from "react";
import { countToReset } from "../constants/countToReset";

export const ResetButton = ({ reset }: { reset(): void }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (countToReset - count <= 1) {
      reset();
      setCount(0);
      return;
    }
    setCount(count + 1);
  };

  return (
    <button onClick={handleClick} className="plainButton">
      Press {countToReset - count} more time to <b>HARD RESET</b>
    </button>
  );
};
