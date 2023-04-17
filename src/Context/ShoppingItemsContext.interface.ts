import React, { ReactNode, SetStateAction } from "react";

export type ShoppingItems = {
  title: String,
  description: String,
  price: number,
  amount: number
}

export interface ShoppingItemsInterface {
  shoppingItems: ShoppingItems[];
  setShoppingItems?: React.Dispatch<SetStateAction<ShoppingItems[]>>
}

export type PropsType = {
  children: ReactNode
}