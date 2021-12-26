import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img, price} = props.product;
    return (
        <div className='flex'>
            <img src={img} alt=""></img>
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => props.handleAddToCart(props.product)} className="btn">Add To Order</button>
        </div>
    );
};

export default Product;