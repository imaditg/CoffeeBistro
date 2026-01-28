import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
// import Aboutus from './Aboutus';
import AboutMain from './about/about_main';
import Shop from './shop/shop_main';
import Contact from './contact/contact';
// import Productpage from './Productpage';
import ProductMain from './products/product_main';
import App from './app_loader';
import Login from './Login';
import Signup from './Signup';
import GoToTop from './GoToTop';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path='/about' element={<AboutMain />} />
      {/* <Route path ="/about" element={<Aboutus/>} /> */}
      <Route path='/shop' element={<Shop />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/product' element={<ProductMain />} />
      {/* <Route path='/product' element={<Productpage />} /> */}
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
    <GoToTop />
  </BrowserRouter>
);