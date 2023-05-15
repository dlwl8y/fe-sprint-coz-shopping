import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
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
      <Footer />
    </Router>
  );
}

export default App;
