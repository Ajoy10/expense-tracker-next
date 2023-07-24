import { StateCreator } from "zustand";

export interface MoneyInputSlice {
  money: number;
  loss: -1 | 1;
  title: string;

  setMoney: (value: number) => void;
  setLoss: (value: -1 | 1) => void;
  setTitle: (value: string) => void;
}

export const createMoneyInputSlice: StateCreator<MoneyInputSlice> = (set) => ({
  money: 0,
  loss: 1,
  title: "",

  setMoney: (value) => {
    set((prev) => {
      return { ...prev, money: value };
    });
  },

  setLoss: (value) => {
    set((prev) => {
      return { ...prev, loss: value };
    });
  },

  setTitle: (value) => {
    set((prev) => ({ ...prev, title: value }));
  },
});
