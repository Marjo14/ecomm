import React from 'react'

const Cart = ({cart}) => { //Initialiser les props 

  return (
    <div className='cart'>
    <h1>Cart</h1>
    {cart.length === 0 ? ( //Commencer par la condition if
        <p>Your cart is empty</p>
      ) : ( //else 
        <ul>
          {cart.map((item, index) => (
            <li key={index}> {item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
    
    
    </div>
  )
}

export default Cart;