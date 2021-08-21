import React, { useState } from "react";
import { tabs } from "./constants/tabs";
import { Inventory } from "./containers/inventory";
import { addNumber } from "./slices/saveSlice";
import { useAppDispatch } from "./utils/hooks";

function App() {
  const dispatch = useAppDispatch();

  const [curTab, setTab] = useState(0);

  const handleAddNumber = () => {
    dispatch(addNumber(Math.floor(Math.random() * 20)));
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("notAMergeGame");
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
      <button onClick={handleAddNumber}>add number</button>
      <button onClick={clearLocalStorage}>reset localStorage</button>
    </div>
  );
}

export default App;
