import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CustomerUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [customer, setCustomer] = useState({
    name: '',
    description: '',
    type: '',
    // Add other fields as needed
  });

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await axios.get(`http://esafeit.xyz:5000/api/v1/Customer/${id}`);
        setCustomer(response.data);
      } catch (error) {
        console.error('Error fetching customer:', error);
      }
    };

    fetchCustomer();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://esafeit.xyz:5000/api/v1/Customer/${id}`, customer);
      navigate(`/customer/${id}`); // Redirect to view after update
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  };

  return (
    <div>
      <h2>Update Customer</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for updating customer */}
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={customer.name} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="description" value={customer.description} onChange={handleChange} />
        </div>
        {/* Add other fields as needed */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default CustomerUpdate;
