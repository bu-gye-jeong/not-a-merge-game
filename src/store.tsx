import { configureStore } from "@reduxjs/toolkit";
import saveReducer, {
  initialState as saveInitialState,
} from "./slices/saveSlice";

const persistedState = JSON.parse(
  localStorage.getItem("notAMergeGame") || "{}"
);

const store = configureStore({
  reducer: {
    save: saveReducer,
  },
  preloadedState: { ...persistedState, ...{ save: saveInitialState } },
});

store.subscribe(() => {
  localStorage.setItem("notAMergeGame", JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
