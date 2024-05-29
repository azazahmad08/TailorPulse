// CustomerView.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CustomerView = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await axios.get(`http://esafeit.xyz:5000/api/v1/Customer/${id}`);
        setCustomer(response.data);
      } catch (error) {
        console.error('Error fetching customer:', error);
        setError('Error fetching customer. Please try again later.');
      }
    };

    fetchCustomer();
  }, [id]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Customer Details</h2>
      <div>
        <strong>Name:</strong> {customer.name}
      </div>
      <div>
        <strong>Description:</strong> {customer.description}
      </div>
      <div>
        <strong>Type:</strong> {customer.type}
      </div>
      {/* Add other fields as needed */}
    </div>
  );
};

export default CustomerView;
