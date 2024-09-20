import React from 'react'
import { Link } from 'react-router-dom'

export const Product = ({ name, price, description }) => {
  const [count, setCount] = React.useState(0);
  
  const handleClick = () => {
    setCount(count + 1);

  };

  return (
    <div className='product_card'>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <button type="button" onClick={handleClick}>
        Add to cart ({count})
      </button>
      
    </div>
  )
}