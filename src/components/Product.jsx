import React from 'react'

export const Product = ({name,price}) => {
  return (
    <div className='product_card'>
       
        <h2>{name}</h2>
        <p>{price}</p>
    </div>
  )
}
