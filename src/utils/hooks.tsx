import { useRef, useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { shopContents } from "../constants/shopContents";
import { addNumber, clearClicked, clickNumber } from "../slices/saveSlice";
import type { RootState, AppDispatch } from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useInterval = (
  callback: (...args: any[]) => void,
  delay: number
) => {
  const savedCallback = useRef<typeof callback>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current!();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export const useSelectInvItem = () => {
  const clickedShop = useAppSelector((state) => state.save.clickedShop);
  const clickedNumber = useAppSelector((state) => state.save.clickedNumber);
  const inventory = useAppSelector((state) => state.save.inventory);
  const dispatch = useAppDispatch();

  return (index: number, shopIndex = clickedShop) => {
    if (
      shopIndex === undefined ||
      (clickedNumber !== undefined && clickedNumber.includes(index))
    )
      return;
    const shopContent = shopContents[shopIndex];
    if ((clickedNumber?.length ?? 0) + 1 < shopContent.paramCount) {
      dispatch(clickNumber(index));
      return;
    }
    const calcParam = clickedNumber
      ? [...clickedNumber, index].map((v) => inventory[v])
      : [inventory[index]];
    dispatch(addNumber(shopContent.calc(...calcParam)));
    dispatch(clearClicked());
  };
};
