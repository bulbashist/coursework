import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import orderReducer from "./pages/orders/store-slice";
import productReducer from "./pages/home/slice";
import cartReducer from "./pages/cart/slice";
import authReducer from "./services/auth";

export const store = configureStore({
  reducer: {
    orders: orderReducer,
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
