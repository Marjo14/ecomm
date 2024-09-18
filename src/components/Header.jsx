import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <h1>Header</h1>
      <nav>
        <ul>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/basket">Basket</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;