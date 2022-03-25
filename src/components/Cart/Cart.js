import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart}=props;
    console.log(cart);
    let total=0;
    let shipping=0;
    let quantity=0;
    for(const product of cart){
        // quantity=quantity+product.quantity;
        quantity=quantity+product.quantity;
        
        total=total+product.price * product.quantity;
        shipping=shipping+product.shipping;
    }
    // console.log(quantity)
    let tax=parseFloat((total*.1).toFixed(2));
    let grand=shipping+tax;
    return (
        <div className='cart'>
             <h4> Order Summary</h4>
                <p>Selected Items:{quantity}</p>
                <p>Total Price:{total}</p>
                <p>Total Shipping:{shipping}</p>
                <p>Tax:{tax}</p>
                <h5>Grand Total:{grand.toFixed(2)}</h5>
        </div> 
    );
};

export default Cart;