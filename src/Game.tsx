import React, { useState } from "react";
import { tabs } from "./constants/tabs";
import { Inventory } from "./containers/inventory";
import { removeNumberByIndex, addMoney } from "./slices/saveSlice";
import { useAppDispatch, useAppSelector } from "./utils/hooks";

function Game() {
  const dispatch = useAppDispatch();

  const [curTab, setTab] = useState(0);

  const inv = useAppSelector((state) => state.save.inventory);

  const handleSellAll = () => {
    let money = 0;
    for (let i = inv.length - 1; i > 0; i--) {
      money += inv[i];
      dispatch(removeNumberByIndex(i));
    }
    dispatch(addMoney(money));
  };

  const tabNavs = (
    <div id="tabNavs">
      {tabs.map((v, i) => (
        <span className="tabNav" onClick={() => setTab(i)} key={i}>
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
