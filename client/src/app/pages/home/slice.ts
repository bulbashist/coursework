import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types";
import axios from "axios";

const getProducts = createAsyncThunk("gh", async () => {
  const res = await axios.get(
    `http://${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}/api/products`
  );
  return res.data;
});

const slice = createSlice({
  name: "filter",
  initialState: {
    filter: 1,
    products: [] as IProduct[],
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    }),
});

export { getProducts };
export const { setFilter } = slice.actions;
export default slice.reducer;
