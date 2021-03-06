import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { shopContents } from "../constants/shopContents";
import { upgrades } from "../constants/upgrades";

export interface ISaveState {
  inventory: string[];
  invMax: number;
  itemBought: boolean[];
  money: string;
  startingNumber: string;
  upgrade: number[];
  ppUpgrade: number[];
  tabUnlocked: boolean[];
  pp: string;
  clickedShop?: number;
  clickedNumber?: number[];
}

export const initialState = {
  inventory: ["1"],
  invMax: 5,
  itemBought: new Array(shopContents.length).fill(false),
  money: "0",
  startingNumber: "1",
  upgrade: new Array(upgrades.length).fill(0),
  ppUpgrade: new Array(upgrades.length).fill(0),
  tabUnlocked: [true, true, false, true],
  pp: "0",
} as ISaveState;

const saveSlice = createSlice({
  name: "save",
  initialState,
  reducers: {
    addNumber(state, action: PayloadAction<string>) {
      if (state.invMax > state.inventory.length)
        state.inventory.push(action.payload);
    },
    removeNumberByIndex(state, action: PayloadAction<number>) {
      if (0 <= action.payload && action.payload < state.invMax)
        state.inventory.splice(action.payload, 1);
    },
    buyOrSellShopItem(state, action: PayloadAction<number>) {
      state.itemBought[action.payload] = !state.itemBought[action.payload];
    },
    setInvMax(state, action: PayloadAction<number>) {
      state.invMax = action.payload;
      state.inventory = state.inventory.slice(0, state.invMax);
    },
    setMoney(state, action: PayloadAction<string>) {
      state.money = action.payload;
    },
    clearClicked(state, action: PayloadAction) {
      delete state.clickedNumber;
      delete state.clickedShop;
    },
    clickShop(state, action: PayloadAction<number>) {
      state.clickedShop = action.payload;
    },
    clickNumber(state, action: PayloadAction<number>) {
      if (!state.clickedNumber) {
        state.clickedNumber = [];
      }
      state.clickedNumber.push(action.payload);
    },
    resetProgress(state, action: PayloadAction<number>) {
      state.invMax = initialState.invMax;
      state.inventory = initialState.inventory;
      state.itemBought = initialState.itemBought;
      state.money = initialState.money;
      state.startingNumber = initialState.startingNumber;
      state.upgrade = initialState.upgrade;
      state.ppUpgrade = initialState.ppUpgrade;
      delete state.clickedNumber;
      delete state.clickedShop;
      if (action.payload >= 1) {
        state.pp = initialState.pp;
      }
      if (action.payload >= 5) {
        state.tabUnlocked = initialState.tabUnlocked;
        localStorage.removeItem("notAMergeGame");
      }
    },
    setStartingNumber(state, action: PayloadAction<string>) {
      state.startingNumber = action.payload;
    },
    buyUpgrade(state, action: PayloadAction<number>) {
      state.upgrade[action.payload] += 1;
    },
    sellUpgrade(state, action: PayloadAction<number>) {
      state.upgrade[action.payload] -= 1;
    },
    buyPPUpgrade(state, action: PayloadAction<number>) {
      state.ppUpgrade[action.payload] += 1;
    },
    sellPPUpgrade(state, action: PayloadAction<number>) {
      state.ppUpgrade[action.payload] -= 1;
    },
    unlockTab(state, action: PayloadAction<number>) {
      state.tabUnlocked[action.payload] = true;
    },
    setPP(state, action: PayloadAction<string>) {
      state.pp = action.payload;
    },
  },
});

export const {
  addNumber,
  removeNumberByIndex,
  buyOrSellShopItem,
  setInvMax,
  setMoney,
  clearClicked,
  clickNumber,
  clickShop,
  resetProgress,
  setStartingNumber,
  buyUpgrade,
  sellUpgrade,
  buyPPUpgrade,
  sellPPUpgrade,
  unlockTab,
  setPP,
} = saveSlice.actions;

export default saveSlice.reducer;
