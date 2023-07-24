import { create } from "zustand";

import {
  MoneyInputSlice,
  createMoneyInputSlice,
} from "./slices/createMoneyInput";

type StoreState = MoneyInputSlice;

export const useAppStore = create<StoreState>()((...a) => ({
  ...createMoneyInputSlice(...a),
}));
