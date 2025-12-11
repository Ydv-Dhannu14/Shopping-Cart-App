

import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const item = action.payload;
      const exists = state.find((p) => p.id === item.id);
      if (!exists) state.push(item);
    },
    remove: (state, action) => {
      const idToRemove = action.payload;
      return state.filter((p) => p.id !== idToRemove);
    },
  },
});

// named exports for actions (important)
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;

