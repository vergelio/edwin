import { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold">Our Products</h1>
      <ul className="mt-4">
        {products.map((product) => (
          <li key={product.id} className="border p-2 mb-2">{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
