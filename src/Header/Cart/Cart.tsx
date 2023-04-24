import { FaShoppingCart } from "react-icons/fa"
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./Cart.css";
import { ShoppingItems } from "../../store/ShoppingItemsSlice";

type CartProps = {
  onCheckoutCartOpen: () => void;
}

type RootType = {
  shoppingItemSlice: {
    items: ShoppingItems[]
  }
}

const Cart = (props:CartProps) => {
  //const shoppingItemsCtx = useContext(ShoppingItemsContext);

  const shoppingItemsState = useSelector((state: RootType) => state.shoppingItemSlice);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const itemsAmountArray = shoppingItemsState.items.map(items => {
      return items.amount;
    })

    let sumOfAmounts;
    if (itemsAmountArray.length){
      sumOfAmounts = itemsAmountArray.reduce((prevAmount: number, currAmount: number) => {
        return prevAmount + currAmount;
      })

      setTotalAmount(sumOfAmounts);
    }
  }, [shoppingItemsState.items])

  return (
    <div className="cart" onClick={props.onCheckoutCartOpen}>
      <FaShoppingCart />
      <span>Your Cart</span>
      <span>{totalAmount}</span>
    </div>
  )
}

export default Cart;