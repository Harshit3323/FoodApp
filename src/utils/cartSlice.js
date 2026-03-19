import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalPrice: 0 },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.totalPrice += action.payload.price ?? action.payload.defaultPrice;
    },
    removeItem: (state) => {
      state.items.pop;
    },
    emptyCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
