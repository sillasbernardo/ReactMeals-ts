import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import "./MealItem.css";
import Button from "../../../Utils/Button";
import { shoppingItemsReduxActions } from "../../../store/ShoppingItemsSlice";

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

  const dispatch = useDispatch();

  const [isError, setIsError] = useState(false);

  const addMealHandler = () => {
    if (!amountRef.current!.value){
      setIsError(true);
      return;
    }

    dispatch(shoppingItemsReduxActions.addItemsToCart({
      currentItem: {
        id: Math.random(),
        title,
        description,
        price,
        amount: amountRef.current!.valueAsNumber,
      }
    }))
    amountRef.current!.value = "";
  };

  const inputChangeHandler = () => {
    if (amountRef.current!.valueAsNumber){
      setIsError(false);
    }
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
          <input onChange={inputChangeHandler} ref={amountRef} type="number" />
          {isError && <p>Amount can't be empty.</p>}
        </div>
        <Button onClick={addMealHandler}>+Add</Button>
      </div>
    </div>
  );
};

export default MealItem;
