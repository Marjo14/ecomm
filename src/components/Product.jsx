import React from 'react'

export const Product = ({name,price,description}) => {
  return (
    <div className='product_card'>
       
        <h2>{name}</h2>
        <p> {description}</p>
        <p>{price}</p>
    </div>
  )
}
