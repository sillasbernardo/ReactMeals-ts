import React from "react";

export type ShoppingItems = {
  id: number,
  title: String,
  description: String,
  price: number,
  amount: number
}

export interface ShoppingItemsInterface {
  shoppingItems: ShoppingItems[];
  addItemsToCart: (currentItems:ShoppingItems) => void;
  updateItemsInCart: (id: number, amount: number) => void;
  removeItem: (id: number) => void;
}

export type PropsType = {
  children: React.ReactNode
}