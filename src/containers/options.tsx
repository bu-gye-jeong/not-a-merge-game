import React from "react";
import { ResetButton } from "../components/ResetButton";
import { hardReset } from "../slices/saveSlice";
import { useAppDispatch } from "../utils/hooks";

export const Options = () => {
  const dispatch = useAppDispatch();

  const reset = () => {
    dispatch(hardReset());
  };

  return (
    <div id="options" className="tab">
      <ResetButton reset={reset}></ResetButton>
    </div>
  );
};
