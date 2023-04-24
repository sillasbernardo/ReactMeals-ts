import { configureStore } from "@reduxjs/toolkit";

import ShoppingItemsSlice from "./ShoppingItemsSlice";

const store = configureStore({
  reducer: {
    shoppingItemSlice: ShoppingItemsSlice.reducer
  }
})

export default store;