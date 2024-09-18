import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Basket from './pages/Basket';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {

  return (
    <div className="App">
      <Router>

        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/> (/* Qd on se connecte on tombe directement sur la page Home */)
          <Route path='/products' element={<Products/>}/>
          <Route path='/basket' element={<Basket/>}/>

        </Routes>

      </Router>
      <Footer />
    </div>
  );
}

export default App;
