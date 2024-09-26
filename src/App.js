import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Products from './pages/Products';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]); //Avoir en global
  const addToCart= (product) => { //Ajouter un produit à la carte 
    setCart((prevCart)=>[...prevCart,product]) //Set = change la valeur, prend la valeur précédente de Cart ... = valeur précédente
  } //Fonction responsable d'ajouter un produit à la carte 

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;