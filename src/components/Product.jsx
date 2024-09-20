import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Product = ({ name, price, description }) => {
  const [count, setCount] = useState(0); // Créer la variable pour initialiser à 0 
  // setCount pour mettre à jour cet été 
  
  const handleAddClick = () => { // Fonction qui incrémente count de +1
    setCount(prevCount => prevCount + 1); 
  };

  const handleRemoveClick = () => { //Fonction qui décrémente count de 1 mais pas en dessous de 0.
    setCount(prevCount => Math.max(0, prevCount - 1));
  };

  return (
    <div className='product_card'>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <button type="button" onClick={handleAddClick}>
        Add to cart ({count})
      </button>
      <button type="button" onClick={handleRemoveClick}>
        Remove ({count})
      </button>
    </div>
  )
}