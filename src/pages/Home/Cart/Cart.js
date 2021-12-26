import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const deliveryCharge = total > 0 ? 10 : 0;
    const grandTotal = total + deliveryCharge;
    return (
        <div className="cart-file">
            <h3>Order Sumary</h3>
            <h4>Items Order: {totalQuantity} </h4>
            <br />
            <p>Total: {total}</p>
            <p>Delivery Charge: {deliveryCharge}</p>
            <p>Grand Total: {grandTotal}</p>
            {props.children}
        </div>
    );
};

export default Cart;