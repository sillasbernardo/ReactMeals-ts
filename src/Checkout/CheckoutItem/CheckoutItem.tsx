import { BaseSyntheticEvent, useContext, useEffect } from 'react';

import './CheckoutItem.css';
import ShoppingItemsContext from '../../Context/ShoppingItemsContext';

type CheckoutItemProps = {
  id: number,
  title: String,
  description: String,
  price: number,
  amount: number
}

const CheckoutItem = (props: CheckoutItemProps) => {
  const shoppingItemCtx = useContext(ShoppingItemsContext);

  const amountHandler = (event: BaseSyntheticEvent) => {
    if (event.target.innerText === "+" && props.amount > 0){
      shoppingItemCtx.updateItemsInCart(props.id, props.amount + 1);
    } else if (event.target.innerText === "-" && props.amount > 0) {
      shoppingItemCtx.updateItemsInCart(props.id, props.amount - 1);
    }
  }

  useEffect(() => {
    if (props.amount == 0){
      shoppingItemCtx.removeItem(props.id);
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