

import React from "react";

import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import{remove} from "../redux/Slices/CartSlice"
import {toast} from "react-hot-toast"

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div>

        <div>
          <img src={item.image} />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;



// // src/redux/Slices/CartSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = []; // array of product objects

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     add: (state, action) => {
//       const item = action.payload;
//       // optional: prevent duplicates
//       const exists = state.find((p) => p.id === item.id);
//       if (!exists) {
//         state.push(item);
//       }
//     },
//     remove: (state, action) => {
//       const idToRemove = action.payload;
//       // return filtered array (Immer will handle return)
//       return state.filter((p) => p.id !== idToRemove);
//     },
//     // optional extra actions:
//     // clearCart: () => []
//   },
// });

// // Named exports for actions (this is required for `import { add, remove } ...` to work)
// export const { add, remove } = cartSlice.actions;

// // Default export reducer for the store
// export default cartSlice.reducer;


