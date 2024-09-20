import React, { useState } from 'react'

export const Product = ({ name, price, description }) => {
  const [count, setCount] = useState(0); // Initialiser le count 

  const handleAddClick = () => { //Création variable pour incrémenter le count +1
    setCount(prevCount => prevCount + 1);
  };

  const handleRemoveClick = () => { // Création variable pour décrémenter le count en prenant compte de l'incrémentation précédente
    setCount(prevCount => Math.max(0, prevCount - 1)); // The Math.max() method returns the number with the highest value.
    // prevCount =>  prend comme argument la valeur précédente de count (qu'on appelle ici prevCount).

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

