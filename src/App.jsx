import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Companies from './components/Companies/Companies';
import Buyers from './components/Buyers/index';
import Provide from './components/Provide/index';
import Why from './components/Why/index';
import Network from './components/Network/index';
import Clientsay from './components/Clientsay/index';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
   <BrowserRouter>
   <Navbar />
   <main>
      <Banner />
      <Companies />
      <Buyers />
      <Provide />
      <Why />
      <Network />
      <Clientsay />
      <Newsletter />
    </main>
    <Footer/>
   </BrowserRouter>
  )
}

export default App
