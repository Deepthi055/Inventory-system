import React from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

const App = () => (
  <div className="container mt-4">
    <h1 className="text-center">Inventory Management</h1>
    <ProductForm />
    <ProductList />
  </div>
);

export default App;
