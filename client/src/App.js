import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './styles.css';
import { NavBar } from './components/NavBar';
import AboutUs from './pages/AboutUs'; 
import Loader from './components/Loader';
import Categories from './pages/Categories';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Landing from './pages/Landing';
import Cita from './pages/Cita';
import Detail from './pages/DetailCategorie';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga inicial
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Tiempo de carga simulado: 2 segundos
  }, []);
  
  useEffect(() => {
    
  }, [])
  
  return (
    <Router>
       {loading && <Loader />} 
      <div className="pt-16">
        <NavBar />
      {/* <AnimatedCard><h2>Hola mi franquito</h2>
      <span className='text-primari'>TE amo muchooooooooo</span></AnimatedCard> */}
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<RegisterPage />} />
          <Route path="/" element={<Landing />} />
          <Route path="/categories" element={<Categories />} /> 
          <Route path="/cita-personalizada" element={<Cita />} /> 
          <Route path="/categories/:id" render={(props) => <Detail {...props} categorias={categorias} />} />

        </Routes>
       
        
      </div>
    </Router>
  );
}

export default App;
