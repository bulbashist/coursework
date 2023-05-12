import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "./types";

const slice = createSlice({
  name: "orders",
  initialState: [] as IOrder[],
  reducers: {
    getOrders: (_: IOrder[], action: PayloadAction<IOrder[]>) => action.payload,
    addOrder: (state: IOrder[], action: PayloadAction<IOrder>) => {
      return [action.payload, ...state];
    },
    changeOrderStatus: (
      state: IOrder[],
      action: PayloadAction<Pick<IOrder, "id" | "status">>
    ) => {
      return state.map((order) => {
        if (order.id === action.payload.id) {
          return {
            ...order,
            status: action.payload.status,
          };
        } else return order;
      });
    },
    deleteOrder: (state: IOrder[], action: PayloadAction<number>) =>
      state.filter((order) => order.id !== action.payload),
    resetOrders: () => [],
  },
});

export const {
  getOrders,
  addOrder,
  changeOrderStatus,
  deleteOrder,
  resetOrders,
} = slice.actions;
export default slice.reducer;
