import { Options } from "../containers/options";
import { Shop } from "../containers/shop";
import { Upgrades } from "../containers/upgrades";

// Tabs
interface ITab {
  name: string;
  tab: () => JSX.Element;
}

export const tabs: ITab[] = [
  { name: "shop", tab: Shop },
  { name: "upgrades", tab: Upgrades },
  { name: "option", tab: Options },
];
