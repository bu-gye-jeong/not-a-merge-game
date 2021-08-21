import React from "react";
import { Inventory } from "./containers/inventory";
import { Shop } from "./containers/shop";
import { addNumber } from "./slices/saveSlice";
import { useAppDispatch } from "./utils/hooks";

function App() {
  const dispatch = useAppDispatch();

  const handleAddNumber = () => {
    dispatch(addNumber(Math.floor(Math.random() * 20)));
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("notAMergeGame");
  };

  return (
    <div className="App">
      <Shop />
      <Inventory />
      <button onClick={handleAddNumber}>add number</button>
      <button onClick={clearLocalStorage}>reset localStorage</button>
    </div>
  );
}

export default App;
