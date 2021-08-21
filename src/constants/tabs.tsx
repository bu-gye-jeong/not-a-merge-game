import { Options } from "../containers/options";
import { Shop } from "../containers/shop";

// Tabs
interface ITab {
  name: string;
  tab: () => JSX.Element;
}

export const tabs: ITab[] = [
  { name: "shop", tab: Shop },
  { name: "option", tab: Options },
];
