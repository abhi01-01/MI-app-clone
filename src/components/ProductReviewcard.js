import React from 'react';
import "../styles/ProductReviewcard.css"

const ProductReviewcard = ({image,index,price,name,review}) => {
  return (
  <div className='ProductReviewcard'>
    <img src={image} alt={`${index} review`} />
    <h5>{review}</h5>
    <span>{name}</span>
    <b>{price}</b>
  </div>
  );
};

export default ProductReviewcard;
