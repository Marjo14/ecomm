import React, { useState } from 'react'
import nouveautesData from '../data/nouveautes.json'

const Home = () => {
    const [nouveautes, setNouveautes] = useState(nouveautesData);
    
    return (
        <div className='home'> 
            <h2>Venez découvrir nos dernières nouveautés</h2>
            <div className='nouveautes_products'>
                {nouveautes.map((nouveaute, index) => (
                    <div key={index} className="nouveaute-item">
                        <h3>{nouveaute.name}</h3>
                        <p>{nouveaute.description}</p>
                        <p>{nouveaute.price} €</p>
                        <p></p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home