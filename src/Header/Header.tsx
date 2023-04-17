import Cart from "./Cart/Cart";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <span>ReactMeals</span>
      <Cart />
    </header>
  )
}

export default Header;