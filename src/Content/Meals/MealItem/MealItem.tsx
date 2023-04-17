import { useRef, useContext } from "react";
import ShoppingItemsContext from "../../../Context/ShoppingItemsContext";

import "./MealItem.css";
import Button from "../../../Utils/Button";

type MealItemProps = {
  mealInfo: {
    title: String;
    description: String;
    price: number;
  };
};

const MealItem = (props: MealItemProps) => {
  const { title, description, price } = props.mealInfo;

  const amountRef = useRef<HTMLInputElement>(null);

  const shoppingItemCtx = useContext(ShoppingItemsContext);

  const addMealHandler = () => {
    shoppingItemCtx.addItemsToCart({
      id: Math.random(),
      title,
      description,
      price,
      amount: amountRef.current!.valueAsNumber,
    });
    amountRef.current!.value = "";
  };

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
        <Button onClick={addMealHandler}>+Add</Button>
      </div>
    </div>
  );
};

export default MealItem;
