import React from "react";
import { InvItem } from "../components/invItem";
import { useAppSelector } from "../utils/hooks";

export const Inventory = () => {
  const inventory = useAppSelector((state) => state.save.inventory);
  const invMax = useAppSelector((state) => state.save.invMax);

  return (
    <div id="inventory">
      <h3 className="title">
        Inventory - {inventory.length} / {invMax}
      </h3>
      <div id="invItems">
        {inventory.map((item, index) => {
          return <InvItem content={item} key={index}></InvItem>;
        })}
      </div>
    </div>
  );
};
