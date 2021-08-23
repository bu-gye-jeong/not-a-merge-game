import React from "react";
import { UpgradeButton } from "../components/upgradeButton";
import { IUpgrade, upgrades } from "../constants/upgrades";
import { buyUpgrade, sellUpgrade, setMoney } from "../slices/saveSlice";
import { D } from "../utils/decimal";
import { useAppDispatch, useAppSelector } from "../utils/hooks";

export const Upgrades = () => {
  const dispatch = useAppDispatch();

  const upgrade = useAppSelector((state) => state.save.upgrade);
  const money = useAppSelector((state) => state.save.money);
  const save = useAppSelector((state) => state.save);

  const handleBuy = (v: IUpgrade, i: number) => {
    if (upgrade[i] >= v.count) return;
    const price = D(v.price(upgrade[i]));
    if (price.gt(money)) return;
    dispatch(setMoney(D(money).sub(price).toFixed(2)));
    dispatch(buyUpgrade(i));
    if (v.action) dispatch(v.action(upgrade[i], save));
  };
  const handleSell = (v: IUpgrade, i: number) => {
    if (upgrade[i] <= 0) return;
    const price = D(v.price(upgrade[i] - 1));
    dispatch(setMoney(D(price).mul(0.5).add(money).toFixed(2)));
    dispatch(sellUpgrade(i));
    if (v.sellAction) dispatch(v.sellAction(upgrade[i], save));
  };

  const upgradeBtns = upgrades.map((v, i) => {
    return (
      <UpgradeButton
        content={`${v.content} - ${upgrade[i]}/${v.count}\nCost : ${
          upgrade[i] >= v.count ? "LVL MAX" : v.price(upgrade[i])
        }`}
        onBuy={() => handleBuy(v, i)}
        buyClassName={`buyUpgrade ${
          D(v.price(upgrade[i])).gt(money) || upgrade[i] === v.count
            ? "cannotClick"
            : ""
        } ${upgrade[i] >= v.count ? "max" : ""}`}
        onSell={() => handleSell(v, i)}
        sellClassName={`sellUpgrade ${upgrade[i] <= 0 ? "cannotClick" : ""}`}
        key={i}></UpgradeButton>
    );
  });

  return (
    <div id="upgrades" className="tab">
      <h3 className="title">Upgrades</h3>
      <div id="upgradesGrid">{upgradeBtns}</div>
    </div>
  );
};
