import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css'; 

const CartItem = ({ onContinueShopping }) => {
  //Pull all data from the Global Redux Store 
  const cart = useSelector((state) => state.cart.items); //Point to the items array defined in CartSlice
  //Send action to the Redux Store
  const dispatch = useDispatch();


//Calculate Total Cart Amount
  const calculateTotalAmount = () => {
        let totalCost = 0;
            cart.forEach((item) => {

            totalCost += Number(item.cost.replace(/[^0-9.-]+/g, '')) * item.quantity;
            });
    return totalCost;
    };

 cart.forEach((item) => {
  console.log('item', item, 'cost:', item.cost, 'quantity:', item.quantity);
});
// Return to the plan listing page to continue shopping
   function handleContinueShopping(e) {
    e.preventDefault();
    onContinueShopping();
  }

  //checkout button
  const handleCheckoutShopping = (e) => {
  alert('Functionality to be added for future reference');
};

  //Increment quantity
  const handleIncrement = (item) => {
    if (item.quantity >= 0) {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));

      }
  };

  //decrement quantity
  const handleDecrement = (item) => {
    if (item.quantity > 0) {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));

      }
  };

  //Remove plant from the cart 
  const handleRemove = (item) => {
    if (item.quantity === 0) {
        dispatch(removeItem({name:item.name}));
      }
  };

  const calculateTotalCost = (item) => {
  const itemCost =Number(item.cost.replace(/[^0-9.-]+/g, '')) * item.quantity;
  return itemCost;
};
 

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map((item) => ( 
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>

      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>

        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>

    </div>
  );
};
export default CartItem;
