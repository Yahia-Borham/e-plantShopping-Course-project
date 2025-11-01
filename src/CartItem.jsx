import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, incrementQuantity , decrementQuantity,  updateTotalCost , updateTotalamout  } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const totalamount = useSelector(state => state.cart.totalamount);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
     dispatch(updateTotalamout())

  };


  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };


  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
      dispatch(updateTotalCost(item));
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: {calculateTotalAmount()}${totalamount}</h2>
      <div>
        {cart.map((item , index) => (
          <div className="cart-item" key={index}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: {calculateTotalCost(item)}${item.totalcost}</div>
              <button className="cart-item-delete" onClick={() => {handleRemove(item), calculateTotalAmount()}}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
      
        <br />
        <button id="get-started-button" onClick={ (e) =>handleCheckoutShopping(e)  }>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


