import { BaseSyntheticEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './CheckoutItem.css';
import { shoppingItemsReduxActions } from '../../store/ShoppingItemsSlice';

type CheckoutItemProps = {
  id: number,
  title: String,
  description: String,
  price: number,
  amount: number
}

const CheckoutItem = (props: CheckoutItemProps) => {

  const dispatch = useDispatch();

  const amountHandler = (event: BaseSyntheticEvent) => {
    if (event.target.innerText === "+" && props.amount > 0){
      dispatch(shoppingItemsReduxActions.updateItems({
        id: props.id,
        amount: props.amount + 1
      }));
    } else if (event.target.innerText === "-" && props.amount > 0) {
      dispatch(shoppingItemsReduxActions.updateItems({
        id: props.id,
        amount: props.amount - 1
      }));
    }
  }

  useEffect(() => {
    if (props.amount == 0){
      dispatch(shoppingItemsReduxActions.removeItems({
        id: props.id
      }))
    }
  }, [amountHandler])

  return (
    <div className='checkout-item-container'>
      <div className='c-i-c-left'>
        <span className='title'>{props.title}</span>
        <div>
          <span>{`\$${props.price}`}</span>
          <span>{`x ${props.amount}`}</span>
        </div>
      </div>
      <div className='c-i-c-right'>
        <button onClick={amountHandler}>-</button>
        <button onClick={amountHandler}>+</button>
      </div>
    </div>
  )
}

export default CheckoutItem;