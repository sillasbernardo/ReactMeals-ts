import { createContext, useState } from "react";
import { ShoppingItemsInterface, PropsType, ShoppingItems } from "./ShoppingItemsContext.interface";

const ShoppingItemsContext = createContext<ShoppingItemsInterface>({
  shoppingItems: [],
});

export const ShoppingItemsContextProvider = (props:PropsType) => {
  const [shoppingItems, setShoppingItems] = useState<ShoppingItems[]>([]);

  return (
    <ShoppingItemsContext.Provider value={{ shoppingItems, setShoppingItems }}>
      {props.children}
    </ShoppingItemsContext.Provider>
  );
};

export default ShoppingItemsContext;
