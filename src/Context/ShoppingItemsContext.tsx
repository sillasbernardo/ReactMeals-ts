import { createContext, useState } from "react";
import { ShoppingItemsInterface, PropsType, ShoppingItems } from "./ShoppingItemsContext.interface";

const ShoppingItemsContext = createContext<ShoppingItemsInterface>({
  shoppingItems: [],
  addItemsToCart: () => {},
  updateItemsInCart: () => {},
  removeItem: () => {}
});

export const ShoppingItemsContextProvider = (props:PropsType) => {
  const [shoppingItems, setShoppingItems] = useState<ShoppingItems[]>([]);

  const updateItemsInCart = (id: number, amount: number) => {
    setShoppingItems((prevItems) => {
      return [...prevItems.map(item => {
        if (item.id === id){
          return {
            ...item,
            amount: amount
          }
        }
        return item;
      })]
    })
  }

  const addItemsToCart = (currentItem: ShoppingItems) => {
    setShoppingItems((prevItems) => {
      return [...prevItems, currentItem]
    })
  }

  const removeItem = (id: number) => {
    setShoppingItems((prevItems) => {
      return [...prevItems.filter(item => item.id !== id)]
    })
  }

  return (
    <ShoppingItemsContext.Provider value={{ shoppingItems, addItemsToCart, updateItemsInCart, removeItem }}>
      {props.children}
    </ShoppingItemsContext.Provider>
  );
};

export default ShoppingItemsContext;
