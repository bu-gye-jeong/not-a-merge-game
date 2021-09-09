import React from "react";
import { UpgradeButton } from "../components/upgradeButton";
import { maxDigit } from "../constants/numbers";
import {
  IPrestigeUpgrade,
  prestigeUpgrades,
} from "../constants/prestigeUpgrades";
import { buyPPUpgrade, resetProgress, setPP } from "../slices/saveSlice";
import { D, setMaxDigit } from "../utils/decimal";
import { useAppDispatch, useAppSelector } from "../utils/hooks";

export const Prestige = () => {
  const dispatch = useAppDispatch();

  const money = useAppSelector((state) => state.save.money);
  const pp = useAppSelector((state) => state.save.pp);
  const ppUpgrade = useAppSelector((state) => state.save.ppUpgrade);
  const save = useAppSelector((state) => state.save);

  const ppToGet = (() => {
    const pp = D(money).log(10).log(2).floor();
    return pp.isNaN() ? 0 : pp.toString();
  })();

  const handlePrestige = () => {
    if (D(money).gt("1e6")) return;
    dispatch(resetProgress(0));
    dispatch(setPP(D(pp).add(ppToGet).toString()));
  };

  const handleBuyUpgrade = (v: IPrestigeUpgrade, i: number) => {
    if (ppUpgrade[i] >= v.count) return;
    const price = D(v.price(ppUpgrade[i]));
    if (price.gt(pp)) return;
    dispatch(setPP(D(pp).sub(price).toString()));
    dispatch(buyPPUpgrade(i));
    if (v.action) dispatch(v.action(ppUpgrade[i], save));
  };

  const upgradeBtns = prestigeUpgrades.map((v, i) => {
    return (
      <UpgradeButton
        content={`${v.content} - ${ppUpgrade[i]}/${v.count}\nCost : ${
          ppUpgrade[i] >= v.count
            ? "LVL MAX"
            : setMaxDigit(v.price(ppUpgrade[i]), maxDigit)
        }`}
        onBuy={() => handleBuyUpgrade(v, i)}
        buyClassName={`ppUpgrade ${
          D(v.price(ppUpgrade[i])).gt(pp) || ppUpgrade[i] === v.count
            ? "cannotClick"
            : ""
        } ${ppUpgrade[i] >= v.count ? "max" : ""}`}
        key={i}></UpgradeButton>
    );
  });

  return (
    <div id="prestige" className="tab">
      <h3 className="title">Prestige</h3>
      <button
        id="prestigeButton"
        onClick={handlePrestige}
        className={`${D(money).gt("1e6") ? "" : "cannotClick"}`}>
        {D(money).gt("1e6")
          ? `Prestige to get ${ppToGet} PP`
          : "At least 1e+6 money to prestige"}
      </button>
      <div id="ppUpgrades">
        <h4>Upgrades</h4>
        <div id="ppUpgradeGrid">{upgradeBtns}</div>
      </div>
    </div>
  );
};
