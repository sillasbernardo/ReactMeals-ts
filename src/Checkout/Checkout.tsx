import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./Checkout.css";
import Button from "../Utils/Button";
import CheckoutItem from "./CheckoutItem/CheckoutItem";

// Type
import { ShoppingItems } from "../store/ShoppingItemsSlice";

type CheckoutProps = {
  onCheckoutCartClose: () => void;
};

type RootType = {
  shoppingItemSlice: {
    items: ShoppingItems[]
  }
}

const Checkout = (props: CheckoutProps) => {
  //const shoppingItemsCtx = useContext(ShoppingItemsContext);

  const shoppingItemsState = useSelector((state: RootType) => state.shoppingItemSlice);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const itemTotalPrice = shoppingItemsState.items.map((item) => {
      return parseFloat((item.amount * item.price).toFixed(2));
    });

    if (itemTotalPrice.length) {
      setTotalPrice(
        itemTotalPrice.reduce((prevPrice, currentPrice) => {
          return prevPrice + currentPrice;
        })
      );
    }
  }, [shoppingItemsState.items]);

  const checkoutOrderHandler = () => {
    
  };

  return (
    <div className="checkout-container">
      <div>
        {shoppingItemsState.items.map((item, index) => {
          return (
            <CheckoutItem
              key={index}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              amount={item.amount}
            />
          );
        })}
      </div>
      <div className="checkout-info">
        <span>Total Amount</span>
        <span>{`\$${totalPrice.toFixed(2)}`}</span>
      </div>
      <div className="checkout-btn">
        <Button
          className="checkout-close-btn"
          onClick={props.onCheckoutCartClose}
        >
          Close
        </Button>
        <Button onClick={checkoutOrderHandler}>Order</Button>
      </div>
    </div>
  );
};

export default Checkout;