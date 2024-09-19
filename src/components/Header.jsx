import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
        <header className='header'>
            <h1 className='header_title'>Mon site de e-commerce</h1>   
            <div>
                <nav className='header_nav'>
                    <ul>
                        <li className='header_item'><Link to="/products">Products</Link></li>
                        <li className='header_item'><Link to="/">Home</Link></li>
                        <li className='header_item'><Link to="/basket">Basket</Link></li>
                    </ul>
                    
                </nav>
            </div>
        </header>
    );
};

export default Header;