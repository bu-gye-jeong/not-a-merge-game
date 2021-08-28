import Decimal from "decimal.js";
import React, { useState, useEffect, useCallback } from "react";
import { tabs } from "./constants/tabs";
import { Inventory } from "./containers/inventory";
import {
  addNumber,
  clearClicked,
  removeNumberByIndex,
  setMoney,
} from "./slices/saveSlice";
import { D } from "./utils/decimal";
import { useAppDispatch, useAppSelector } from "./utils/hooks";

function Game() {
  const dispatch = useAppDispatch();

  const [curTab, setTab] = useState(0);

  const save = useAppSelector((state) => state.save);
  const inv = useAppSelector((state) => state.save.inventory);
  const invMax = useAppSelector((state) => state.save.invMax);
  const money = useAppSelector((state) => state.save.money);
  const startingNumber = useAppSelector((state) => state.save.startingNumber);

  const handleSellAll = useCallback(() => {
    let moneyToAdd = D("0");
    for (let i = inv.length - 1; i > 0; i--) {
      moneyToAdd = moneyToAdd.add(inv[i]);
      dispatch(removeNumberByIndex(i));
    }
    dispatch(removeNumberByIndex(0));
    dispatch(addNumber(startingNumber));
    dispatch(setMoney(Decimal.add(money, moneyToAdd).toString()));
  }, [dispatch, inv, money, startingNumber]);

  // auto sell when inventory is full
  const autoUpgrade = useAppSelector((state) => state.save.upgrade[3]);
  useEffect(() => {
    if (autoUpgrade !== 1) return;
    if (inv.length === invMax) {
      handleSellAll();
    }
  }, [inv, invMax, handleSellAll, autoUpgrade]);

  const tabNavs = (
    <div id="tabNavs">
      {tabs.map((v, i) => {
        if (v.condition && !v.condition(save)) return true;
        return (
          <span
            className={`tabNav ${i === curTab ? "selected" : ""}`}
            onClick={() => setTab(i)}
            key={i}>
            {v.name}
          </span>
        );
      })}
    </div>
  );

  const Abc = tabs[curTab].tab;

  const _handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "Esc":
      case "Escape":
        dispatch(clearClicked());
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", _handleKeyDown);
    return () => {
      document.removeEventListener("keydown", _handleKeyDown);
    };
  });

  return (
    <div className="App">
      {tabNavs}
      <Abc />
      <Inventory />
      <div id="bottomBar">
        <button onClick={handleSellAll}>
          <h2>Sell All</h2>
        </button>
      </div>
    </div>
  );
}

export default Game;
