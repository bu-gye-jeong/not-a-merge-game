import React from "react";
import { ResetButton } from "../components/ResetButton";
import { resetProgress } from "../slices/saveSlice";
import { useAppDispatch } from "../utils/hooks";

export const Options = () => {
  const dispatch = useAppDispatch();

  const reset = () => {
    dispatch(resetProgress(1000));
  };

  return (
    <div id="options" className="tab">
      <h3 className="title">Option</h3>
      <ResetButton reset={reset}></ResetButton>
    </div>
  );
};
