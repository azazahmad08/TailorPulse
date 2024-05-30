import { useState, useEffect } from 'react';
import orderData from '../JSON/orderData.json'; // Assuming orderData.json is in the same directory as this component

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Set orders with the data imported directly
    setOrders(orderData.map(order => ({ ...order, selected: false })));
  }, []);

  const handleCheckboxChange = (orderId) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, selected: !order.selected } : order
    ));
  };

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-xl font-bold mb-4">Order Information</h2>
      <table className="border-collapse w-full">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="border p-2">OID</th>
            <th className="border p-2">Order No</th>
            <th className="border p-2">Customer ID</th>
            <th className="border p-2">Product ID</th>
            <th className="border p-2">Cutting Master</th>
            <th className="border p-2">Delivery Date</th>
            <th className="border p-2">Issue Date</th>
            <th className="border p-2">Action</th>
            {/* Add more headers here */}
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="bg-white">
              <td className="border p-2">
                <input
                  type="checkbox"
                  checked={order.selected}
                  onChange={() => handleCheckboxChange(order.id)}
                />
                <span className="ml-2">{index + 1}</span>
              </td>
              <td className="border p-2">{order.orderNo}</td>
              <td className="border p-2">{order.customerId}</td>
              <td className="border p-2">{order.sewingOrderDtl[0].itemId}</td>
              <td className="border p-2">{order.sewingOrderDtl[0].cuttingMasterId}</td>
              <td className="border p-2">{order.deliveryDate}</td>
              <td className="border p-2">{order.trailDate}</td>
              <td className="border p-2 m-auto ">
                <button className="mr-2 ">
                  <img src="visible.png" alt="View" className="w-5 h-5" />
                </button>
                <button className="mr-2">
                  <img src="update.png" alt="Update" className="w-5 h-5" />
                </button>
                <button>
                  <img src="trash.png" alt="Delete" className="w-5 h-5" />
                </button>
              </td>
              {/* Add more cells here */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
