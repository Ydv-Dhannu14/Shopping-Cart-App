// src/redux/Store.js
import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";   // make sure cartSlice.js is in same folder

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
