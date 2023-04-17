import React, { useRef, useContext } from "react";
import ShoppingItemsContext from "../../../Context/ShoppingItemsContext";

import './MealItem.css';

const MealItem = (props) => {
  const { title, description, price } = props.mealInfo;

  const amountRef = useRef(null);

  const shoppingItemCtx = useContext(ShoppingItemsContext);

  const addMealHandler = () => {
    const totalPrice = price * parseFloat(amountRef.current.value);
    
    
  }

  return (
    <div className="meal-item">
      <div className="meal-item-left-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{`\$${price}`}</span>
      </div>
      <div className="meal-item-right-info">
        <div className="right-info-2">
          <span>Amount</span>
          <input ref={amountRef} type="number" />
        </div>
        <button onClick={addMealHandler}>+Add</button>
      </div>
    </div>
  )
}

export default MealItem;