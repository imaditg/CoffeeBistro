import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home/home';
import ShopHome from './shop/shopHome';
import Electronic from './electronics/electronicHome';
import SportsBooks from './sportsbooks/sportsbooks';
import Sale from './sale/sale';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './contact/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<ShopHome />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/electronic' element={<Electronic />}/>
      <Route path='/books' element={<SportsBooks />}/>
      <Route path='/sale' element={<Sale />} />
    </Routes>
  </BrowserRouter>
);