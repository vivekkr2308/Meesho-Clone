import React, { useState } from 'react';
import './shoppingcart.css'
import { useCart } from 'react-use-cart';
import { NavLink } from 'react-router-dom';

const ShoppingCart = () => {
  
  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  // console.log(items);
 
  // const clearCart= ()=>{  
  //   emptyCart([]);
  // }

 
  return (
    <>
      <div class="shopping__cart">
        <h3 class="cartMainHeading">Shopping Cart</h3>
        <div class="cartTitles">
          <p class="cartitemDetails">Item Details</p>
          <p class="cartPrice">Price</p>
          <p class="cartQuantity">Quantity</p>
          <p class="cartSubTotal">Subtotal</p>
        </div>
        {items.map((item, index) => {
          const subtotal = item.price * item.quantity; // Calculate the subtotal for each item
          const TotalPrice = cartTotal.toFixed(2);
          return (
           

            <div class="shoppingProduct" key={index}>
              <div class='shoppingcart-product-img'>
                <img src={item.image} class='shoppingcart-img' alt='not-available'/>
              </div>
              <div class="shoppingcartTitle">
                <div>{item.title}</div>
                <button class="cartRemove" onClick={() => removeItem(item.id)}>REMOVE</button>
              </div>
          
              <span class="shoppingcartPrice">${item.price}</span>
              <select
                class="selectQuantity"
                onChange={(e) => updateItemQuantity(item.id, parseInt(e.target.value))}
                value={item.quantity}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
              <span class="shoppingcartSubtotal">${subtotal.toFixed(2)}</span>
            </div>
          );
        })}
      </div>
      
      
      <div class="cartFooter">
        <div class="cartDescription">
          <p class="cartFooterDeliveryTitle">Delivery and payment options can be selected later</p>
          <p class="cartFooterSafeTitle">Safe and Secure Payments</p>
          <p class="cartFooterPolicyTitle">100% Payment Protection, Easy Returns Policy</p>
        </div>
        <div class="cartCategoriesHead">
          <p class="cartSubTotal">Total Price: ${cartTotal.toFixed(2)}</p>
          <p class="cartDeliveryCharges">Delivery Charges: FREE</p>
        </div>
        {cartTotal > 0 ? ( // Show the payment button only if cartTotal is greater than 0
          <NavLink to={`/payment?total=${cartTotal}`}>
            <button class="cartPayBtn">PROCEED TO PAY ${cartTotal.toFixed(2)}</button>
          </NavLink>
          
        ) : (
          <p class="emptyCartMessage">Cart is empty. Please select products before proceeding.</p>
        )}
        {/* <button onClick={clearCart}>ClearCart</button> */}
      </div>

    </>
  );
};

export default ShoppingCart;
