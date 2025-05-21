import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [product, setProduct] = useState({ name: '', description: '', price: '', quantity: '' });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/products', product);
    setProduct({ name: '', description: '', price: '', quantity: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input className="form-control mb-2" name="name" value={product.name} onChange={handleChange} placeholder="Name" />
      <input className="form-control mb-2" name="description" value={product.description} onChange={handleChange} placeholder="Description" />
      <input className="form-control mb-2" name="price" value={product.price} onChange={handleChange} placeholder="Price" type="number" />
      <input className="form-control mb-2" name="quantity" value={product.quantity} onChange={handleChange} placeholder="Quantity" type="number" />
      <button className="btn btn-primary">Add Product</button>
    </form>
  );
};

export default ProductForm;
