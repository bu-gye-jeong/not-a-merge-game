import { Options } from "../containers/options";
import { Prestige } from "../containers/prestige";
import { Shop } from "../containers/shop";
import { Upgrades } from "../containers/upgrades";
import { ISaveState } from "../slices/saveSlice";
import { D } from "../utils/decimal";

// Tabs
interface ITab {
  name: string;
  tab: () => JSX.Element;
  condition?: (state: ISaveState) => boolean;
}

export const tabs: ITab[] = [
  { name: "shop", tab: Shop },
  { name: "upgrades", tab: Upgrades },
  {
    name: "prestige",
    tab: Prestige,
    condition: (save) => D(save.money).gt("3e+5"),
  },
  { name: "option", tab: Options },
];
