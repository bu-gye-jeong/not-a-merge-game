import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISaveState {
  inventory: number[];
  invMax: number;
}

const initialState = {
  inventory: [1],
  invMax: 20,
} as ISaveState;

const saveSlice = createSlice({
  name: "save",
  initialState,
  reducers: {
    addNumber(state, action: PayloadAction<number>) {
      if (state.invMax > state.inventory.length) state.inventory.push(action.payload);
    },
    changeInvMax(state, action: PayloadAction<number>) {
      state.invMax = action.payload;
      state.inventory = state.inventory.slice(0, state.invMax);
    },
  },
});

export const { addNumber } = saveSlice.actions;

export default saveSlice.reducer;
