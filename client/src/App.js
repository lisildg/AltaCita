import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Heart from './pages/Heart';
import './styles.css';
import CustomButton from './components/Button';
import { NavBar } from './components/NavBar';
import AboutUs from './pages/AboutUs'; 
import Loader from './components/Loader';
// import Card from './components/Card';
import AnimatedCard from './components/AnimatedCardViolet/AnimatedCard';
import Categories from './components/Categories';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga inicial
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Tiempo de carga simulado: 2 segundos
  }, []);
  
  return (
    <Router>
       {loading && <Loader />} 
      <div className="pt-16">
        <NavBar />
      {/* <AnimatedCard><h2>Hola mi franquito</h2>
      <span className='text-primari'>TE amo muchooooooooo</span></AnimatedCard> */}
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/" element={<Heart />} />
          <Route path="/categories" element={<Categories />} />
          
        </Routes>
        <CustomButton defaultColor="#9B59B6" text="Explorar categorias" route="/categories" />
      </div>
    </Router>
  );
}

export default App;
