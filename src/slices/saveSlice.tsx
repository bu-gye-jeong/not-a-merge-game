import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { shopContents } from "../constants/shopContents";

interface ISaveState {
  inventory: number[];
  invMax: number;
  itemBought: boolean[];
}

const initialState = {
  inventory: [1],
  invMax: 20,
  itemBought: new Array(shopContents.length).fill(false),
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
    buyShopItem(state, action: PayloadAction<number>) {
      state.itemBought[action.payload] = true;
    },
    changeInvMax(state, action: PayloadAction<number>) {
      state.invMax = action.payload;
      state.inventory = state.inventory.slice(0, state.invMax);
    },
  },
});

export const { addNumber } = saveSlice.actions;

export default saveSlice.reducer;
