import Decimal from "decimal.js";
import React, { useState } from "react";
import { tabs } from "./constants/tabs";
import { Inventory } from "./containers/inventory";
import { removeNumberByIndex, setMoney } from "./slices/saveSlice";
import { useAppDispatch, useAppSelector } from "./utils/hooks";

function Game() {
  const dispatch = useAppDispatch();

  const [curTab, setTab] = useState(0);

  const inv = useAppSelector((state) => state.save.inventory);
  const money = useAppSelector((state) => state.save.money);

  const handleSellAll = () => {
    let moneyToAdd = new Decimal("0");
    for (let i = inv.length - 1; i > 0; i--) {
      moneyToAdd = moneyToAdd.add(inv[i]);
      dispatch(removeNumberByIndex(i));
    }
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
