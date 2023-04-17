import { useContext, useEffect, useState } from "react";

import "./Checkout.css";
import Button from "../Utils/Button";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import ShoppingItemsContext from "../Context/ShoppingItemsContext";

type CheckoutProps = {
  onCheckoutCartClose: () => void;
};

const Checkout = (props: CheckoutProps) => {
  const shoopingItemsCtx = useContext(ShoppingItemsContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const itemTotalPrice = shoopingItemsCtx.shoppingItems.map((item) => {
      return parseFloat((item.amount * item.price).toFixed(2));
    });

    if (itemTotalPrice.length) {
      setTotalPrice(
        itemTotalPrice.reduce((prevPrice, currentPrice) => {
          return prevPrice + currentPrice;
        })
      );
    }
  }, [shoopingItemsCtx.shoppingItems]);

  const checkoutOrderHandler = () => {
    console.log(`
      Sending order: ${shoopingItemsCtx.shoppingItems}
    `);
  };

  return (
    <div className="checkout-container">
      <div>
        {shoopingItemsCtx.shoppingItems.map((item, index) => {
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
