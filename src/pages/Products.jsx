import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        const result = await response.json();
        setProducts(result); // Set the fetched products data
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-3x1 mb-6">Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-2 border-2 rounded-md">
            <img
              src={product.images[0]} // Access the first image of the product
              alt={product.title}
              className="w-full h-auto rounded-md"
            />
            <div className="truncate mt-2 font-bold">{product.title}</div>
            <div className="mt-1 text-gray-600">${product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
