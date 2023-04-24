import { createSlice } from "@reduxjs/toolkit";

export type ShoppingItems = {
  id: number,
  title: string,
  description: string,
  price: number,
  amount: number,
}

type InitialShoppingItemType = {
  items: ShoppingItems[]
}

const initialShoppingItemsState: InitialShoppingItemType = {
  items: []
}

const ShoppingItemsSlice = createSlice({
  name: "shoppingItems",
  initialState: initialShoppingItemsState,
  reducers: {
    addItemsToCart: (state, action) => {
      const { currentItem } = action.payload;

      state.items.push(currentItem);
    },
    updateItems: (state, action) => {
      const { id, amount } = action.payload;

      state.items = state.items.map(item => {
        if (item.id === id){
          return {
            ...item,
            amount: amount
          }
        }
        return item;
      })
    },
    removeItems: (state, action) => {
      const { id } = action.payload;

      state.items = state.items.filter(item => item.id !== id);
    }
  }
})

export const shoppingItemsReduxActions = ShoppingItemsSlice.actions;
export default ShoppingItemsSlice;