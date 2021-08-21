import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { shopContents } from "../constants/shopContents";

interface ISaveState {
  inventory: number[];
  invMax: number;
  itemBought: boolean[];
  money: number;
  clickedShop?: number;
  clickedNumber?: number[];
}

export const initialState = {
  inventory: [1],
  invMax: 20,
  itemBought: new Array(shopContents.length).fill(false),
  money: 0,
} as ISaveState;

const saveSlice = createSlice({
  name: "save",
  initialState,
  reducers: {
    addNumber(state, action: PayloadAction<number>) {
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
    changeInvMax(state, action: PayloadAction<number>) {
      state.invMax = action.payload;
      state.inventory = state.inventory.slice(0, state.invMax);
    },
    addMoney(state, action: PayloadAction<number>) {
      state.money += action.payload;
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
  },
});

export const {
  addNumber,
  removeNumberByIndex,
  buyOrSellShopItem,
  changeInvMax,
  addMoney,
  clearClicked,
  clickNumber,
  clickShop,
} = saveSlice.actions;

export default saveSlice.reducer;
