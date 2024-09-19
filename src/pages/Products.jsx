import React, { useState } from 'react'
import Data from '../data/produits.json'
import { Product } from '../components/Product'

const Products = () => {
    const [products, setproducts] = useState(Data)
    return (
        <div className='products'>
            <h2>Produits</h2>
            {products.map((Element) => (
                <Product key={Element.id} name={Element.name} price={Element.price}/>
            ))}
        </div>
    )
}

export default Products