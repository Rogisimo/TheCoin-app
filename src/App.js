import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CoinDetail from './pages/CoinDetail';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from "./pages/Home"

function App() {
  return (
    <section id='landing'>
      <NavBar/>
      <Routes>
        <Route path='/thecoin-app' element={<Home/>}/>
        <Route path='/coin/:id' element={<CoinDetail/>}/>
      </Routes>
      <Footer/>
    </section>
  );
}

export default App;
