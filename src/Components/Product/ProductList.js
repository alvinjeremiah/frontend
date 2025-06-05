import React, { useEffect, useState } from 'react';
import ProductBox from './Productbox.js'; // Ensure the path and naming are consistent
import './ProductListStyles.css'; // Import custom styles


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/product.json') // Path relative to the public directory
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched products:', data); // Debug log
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching the products:', error);
      });
  }, []);

  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map(product => (
          <ProductBox key={product.id} product={product} />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
