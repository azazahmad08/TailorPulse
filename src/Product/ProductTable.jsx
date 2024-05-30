import { useState, useEffect } from 'react';

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('/dashboardDataTwo.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, []);

  return (
    <div className="bg-gray-200 p-4 mt-8">
      <h2 className="text-xl font-bold mb-4">Product Information</h2>
      <table className="border-collapse w-full">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="border p-2">UID</th>
            <th className="border p-2">Product</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Stock</th>
            <th className="border p-2">Order</th>
            <th className="border p-2">Sales</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.Uid} className="bg-white">
              <td className="border p-2">{product.Uid}</td>
              <td className="border p-2">{product.Product}</td>
              <td className="border p-2">{product.Category}</td>
              <td className="border p-2">${product.Price}</td>
              <td className="border p-2">{product.Stock}</td>
              <td className="border p-2">{product.Order}</td>
              <td className="border p-2">{product.Sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
