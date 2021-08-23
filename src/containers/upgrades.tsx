import React from "react";
import { PlainButton } from "../components/PlainButton";
import { IUpgrade, upgrades } from "../constants/upgrades";
import { buyUpgrade, setMoney } from "../slices/saveSlice";
import { D } from "../utils/decimal";
import { useAppDispatch, useAppSelector } from "../utils/hooks";

export const Upgrades = () => {
  const dispatch = useAppDispatch();

  const upgrade = useAppSelector((state) => state.save.upgrade);
  const money = useAppSelector((state) => state.save.money);
  const save = useAppSelector((state) => state.save);

  const handleClick = (v: IUpgrade, i: number) => {
    const price = D(v.price(upgrade[i]));
    if (price.gt(money)) return;
    dispatch(setMoney(D(money).sub(price).toString()));
    dispatch(buyUpgrade(i));
    if (v.action) dispatch(v.action(upgrade[i], save));
  };

  const upgradeBtns = upgrades.map((v, i) => {
    return (
      <PlainButton
        content={`${v.content} - ${upgrade[i]}/${v.count}\nCost : ${v.price(
          upgrade[i]
        )}`}
        onClick={() => handleClick(v, i)}
        id={"upgrade" + i}
        className={`upgrade ${
          D(v.price(upgrade[i])).gt(money) || upgrade[i] === v.count
            ? "cannotClick"
            : ""
        } ${upgrade[i] === v.count ? "max" : ""}`}
        key={i}></PlainButton>
    );
  });

  return (
    <div id="upgrades" className="tab">
      <h3 className="title">Upgrades</h3>
      <div id="upgradesGrid">{upgradeBtns}</div>
    </div>
  );
};
