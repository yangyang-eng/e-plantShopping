import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
}

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
        let totalCost = 0;
            plantsArray.forEach((item) => {
                totalCost += item.cost * item.quantity;
    return totalCost;
    });

//Return to the plan listing page to continue shopping
   const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleCheckoutShopping = (e) => {
  alert('Functionality to be added for future reference');
};


  const handleIncrement = (item) => {
    if (item.quantity >= 0) {
        dispatch(updateQuantity(item.name, item.quantity + 1));
      }
  };

  const handleDecrement = (item) => {
    if (item.quantity > 0) {
        dispatch(updateQuantity(item.name, item.quantity - 1));
      }
  };

  const handleRemove = (item) => {
    if (item.quantity = 0) {
        dispatch(removeItem(item.name));
      }
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    itemCost = item.cost * item.quantity;
  };
  return itemCost;
};

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
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
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


