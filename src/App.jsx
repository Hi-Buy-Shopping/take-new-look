import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import AboutUs from './Pages/About';
import BookMeeting from './components/BookMeeting/BookMeeting';
import Services from './Pages/Services';
import DomainHosting from './Pages/Services/DomainHosting';
import WebDevelopment from './Pages/Services/WebDevelopment';
import ApplicationDevelopment from './Pages/Services/AppDevelopment';
import ContentWriting from './Pages/Services/ContentWriting';
import SocialMediaMarketing from './Pages/Services/SocialMediaMarketing';
import SEO from './Pages/Services/Seo';
import ProductPhotography from './Pages/Services/ProductPhotography';
import EcommerceSolutions from './Pages/Services/EcommerceSolutions';
import UIUXDesign from './Pages/Services/UIUXDesign';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<BookMeeting />} />
        <Route path="/services" element={<Services />} />
        <Route path="/domain-hosting" element={<DomainHosting />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/app-development" element={<ApplicationDevelopment />} />
        <Route path="/services/content-writing" element={<ContentWriting />} />
        <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="/services/seo" element={<SEO />} />
        <Route path="/services/product-photography" element={<ProductPhotography />} />
        <Route path="/services/ecommerce-solutions" element={<EcommerceSolutions />} />
        <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
