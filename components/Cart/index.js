import React, { useRef } from 'react';
import Link from 'next/link';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import toast from 'react-hot-toast';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateContext } from '../../context/StateContext';
import { urlFor } from '../../lib/client';
import getStripe from '../../lib/getStripe';
import { loadStripe } from '@stripe/stripe-js';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;
    
    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
        type="button"
        className="cart-heading"
        onClick={() => setShowCart(false)}>
          <ChevronLeftIcon />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <ShoppingCartIcon size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item._id}>
              <img src={urlFor(item?.image[0])} className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                  <p className="quantity-desc">
                    <span className="minus" onClick={() => toggleCartItemQuanitity(item._id, 'dec') }>
                    <RemoveIcon />
                    </span>
                    <span className="num" >{item.quantity}</span>
                    <span className="plus" onClick={() => toggleCartItemQuanitity(item._id, 'inc') }><AddIcon /></span>
                  </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <HighlightOffIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={handleCheckout}>
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart