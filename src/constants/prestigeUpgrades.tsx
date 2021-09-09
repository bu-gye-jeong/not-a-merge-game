import { ISaveState } from "../slices/saveSlice";

export interface IPrestigeUpgrade {
  count: number;
  content: string;
  price(count: number): string;
  action?(
    count: number,
    save: ISaveState
  ): {
    payload?: any;
    type: string;
  };
}

export const prestigeUpgrades: IPrestigeUpgrade[] = [
  {
    count: 1,
    content: "Test Upgrade",
    price: () => "2",
  },
];
