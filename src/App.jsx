import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import AboutUs from './Pages/About';
import BookMeeting from './components/BookMeeting/BookMeeting';
import Services from './Pages/Services';
import DomainHosting from './Pages/DomainHosting';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<BookMeeting />} />
        <Route path="/services" element={<Services />} />
        <Route path="/domain-hosting/details" element={<DomainHosting />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
