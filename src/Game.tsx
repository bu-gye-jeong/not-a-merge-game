import Decimal from "decimal.js";
import React, { useState } from "react";
import { tabs } from "./constants/tabs";
import { Inventory } from "./containers/inventory";
import { addNumber, removeNumberByIndex, setMoney } from "./slices/saveSlice";
import { D } from "./utils/decimal";
import { useAppDispatch, useAppSelector } from "./utils/hooks";

function Game() {
  const dispatch = useAppDispatch();

  const [curTab, setTab] = useState(0);

  const inv = useAppSelector((state) => state.save.inventory);
  const money = useAppSelector((state) => state.save.money);
  const startingNumber = useAppSelector((state) => state.save.startingNumber);

  const handleSellAll = () => {
    let moneyToAdd = D("0");
    for (let i = inv.length - 1; i > 0; i--) {
      moneyToAdd = moneyToAdd.add(inv[i]);
      dispatch(removeNumberByIndex(i));
    }
    dispatch(removeNumberByIndex(0));
    dispatch(addNumber(startingNumber));
    dispatch(setMoney(Decimal.add(money, moneyToAdd).toString()));
  };

  const tabNavs = (
    <div id="tabNavs">
      {tabs.map((v, i) => (
        <span
          className={`tabNav ${i === curTab ? "selected" : ""}`}
          onClick={() => setTab(i)}
          key={i}>
          {v.name}
        </span>
      ))}
    </div>
  );

  const Abc = tabs[curTab].tab;

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
