import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Basket from './pages/Basket';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;