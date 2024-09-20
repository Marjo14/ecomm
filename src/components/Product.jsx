import React, { useState } from 'react'

export const Product = ({ name, price, description }) => {
  const [count, setCount] = useState(0);

  const handleAddClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleRemoveClick = () => {
    setCount(prevCount => Math.max(0, prevCount - 1));
  };

  return (
    <div className='product_card'>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <button className="add-button" 
        type="button" onClick={handleAddClick}>
        Add to cart ({count})
      </button>
      <button className="remove-button"

        type="button"
        onClick={handleRemoveClick}
        aria-label="Remove from cart"
      >
        🗑️
      </button>
    </div>
  )
}

