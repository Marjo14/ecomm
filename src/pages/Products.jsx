import React, { useState } from 'react'
import Data from '../data/produits.json'
import { Product } from '../components/Product'


const Products = ({addToCart}) => {
    const [products, setproducts] = useState(Data);
    return (

        <div className='products'>
            {products.map((Element, index,) => (
                <Product key={Element.id} name={Element.name} description={Element.description} 
                price={Element.price} id={index} addToCart={addToCart} />
            ))}

        </div>

    )
}

export default Products