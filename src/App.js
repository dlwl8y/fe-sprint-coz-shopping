import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import ProductsListPage from './pages/ProductsListPage';
import BookMarkPage from './pages/BookMarkPage';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={ <MainPage/> }/>
        <Route path='/products/list' element={ <ProductsListPage/> }/>
        <Route path='/bookmark' element={ <BookMarkPage/> }/>
      </Routes>
    </Router>
  );
}

export default App;
