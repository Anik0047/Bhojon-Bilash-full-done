import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, img, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className='flex'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={() => handleRemove(key)} className='btn'>Remove</button>
        </div>
    );
};

export default ReviewItem;