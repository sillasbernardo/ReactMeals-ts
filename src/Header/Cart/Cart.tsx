import { FaShoppingCart } from "react-icons/fa"
import { useContext, useState, useEffect } from "react";

import "./Cart.css";
import ShoppingItemsContext from "../../Context/ShoppingItemsContext";

type CartProps = {
  onCheckoutCartOpen: () => void;
}

const Cart = (props:CartProps) => {
  const shoppingItemsCtx = useContext(ShoppingItemsContext);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const itemsAmountArray = shoppingItemsCtx.shoppingItems.map(items => {
      return items.amount;
    })

    let sumOfAmounts;
    if (itemsAmountArray.length){
      sumOfAmounts = itemsAmountArray.reduce((prevAmount: number, currAmount: number) => {
        return prevAmount + currAmount;
      })

      setTotalAmount(sumOfAmounts);
    }
  }, [shoppingItemsCtx.shoppingItems])

  return (
    <div className="cart" onClick={props.onCheckoutCartOpen}>
      <FaShoppingCart />
      <span>Your Cart</span>
      <span>{totalAmount}</span>
    </div>
  )
}

export default Cart;