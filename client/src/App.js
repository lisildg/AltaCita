import React, { useEffect } from 'react';
import Heart from './pages/Heart';
import './styles.css';
import CustomButton from './components/Button';
import { NavBar } from './components/NavBar';





function App() {
    
  return (
    <div>
      <NavBar />
      <h1 className="pt-16">Alta Cita</h1>
      <Heart  />
      <CustomButton defaultColor="#9B59B6" text="hola"/>
      
      <CustomButton defaultColor="red" text="te amo franquito" /> 
      
     
    </div>
  );
}

export default App;
