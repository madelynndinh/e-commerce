
import './App.css';
import React from 'react';
import Header from "./containers/Header"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />

        <Routes>
        <Route path="/" exact element={<ProductListing />} />
<Route path="/products/:productId" exact element={<ProductDetails />} />
       <Route>404 not found</Route>
       </Routes>
      </Router>
    </div>
  );
}

export default App;
