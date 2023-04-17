import { useState } from "react";
import { createPortal } from "react-dom";

import Cart from "./Cart/Cart";
import Backdrop from "../Utils/Backdrop";
import Checkout from "../Checkout/Checkout";
import "./Header.css";

const Header = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const onCheckoutCartOpen = () => {
    setIsCheckoutOpen(true);
  }

  const onCheckoutCartClose = () => {
    setIsCheckoutOpen(false);
  }

  return (
    <header className="header">
      {isCheckoutOpen && createPortal(<Checkout onCheckoutCartClose={onCheckoutCartClose} />, document.getElementById('overlay') as Element)}
      {isCheckoutOpen && createPortal(<Backdrop onCheckoutCartClose={onCheckoutCartClose} />, document.getElementById('backdrop') as Element)}
      <span>ReactMeals</span>
      <Cart onCheckoutCartOpen={onCheckoutCartOpen} />
    </header>
  )
}

export default Header;