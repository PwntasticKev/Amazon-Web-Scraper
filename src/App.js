import React from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductList/>
    </div>
  );
}

export default App;
