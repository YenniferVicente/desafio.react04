import React from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
//import Home from './components/Home'
import Footer from './components/Footer';
//import Cart from './components/Cart';
import Pizza from './components/Pizza';
//import Register from './components/Register';
//import Login from './components/Login';


function App() {
  

  return (
    <>
      <Header/>
      <Navbar/>
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Home/> */}
      {/* <Cart/> */}
      <Pizza/>
      <Footer/>
    </>
  );
};

export default App;

