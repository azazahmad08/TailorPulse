import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch("http://esafeit.xyz:5000/api/v1/Customer");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching customers:", error);
        setError("Error fetching customers. Please try again later.");
      }
    };

    fetchCustomers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://esafeit.xyz:5000/api/v1/Customer/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error(`Failed to delete customer: ${response.statusText}`);
      }

      setCustomers(customers.filter(customer => customer.id !== id));
      console.log('Customer deleted successfully');
    } catch (error) {
      console.error('Error deleting customer:', error);
      alert(error.message);
    }
  };

  return (
    <div>
      {error && <div className="error">{error}</div>}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={customer.id} className={index % 2 === 0 ? "bg-base-200" : ""}>
                <th>{index + 1}</th>
                <td>{customer.name}</td>
                <td>
                  <Link to={`/customer/${customer.id}`} className="btn btn-primary btn-sm">View</Link>
                  <Link to={`/customer/${customer.id}/update`} className="btn btn-secondary btn-sm ml-2">Update</Link>
                  <button
                    onClick={() => handleDelete(customer.id) }
                    className="btn btn-danger btn-sm ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
