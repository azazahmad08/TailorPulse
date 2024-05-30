import { useState, useEffect } from 'react';
import ProductTable from '../../Product/ProductTable';

const Home = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch('/dashboardData.json');
        const data = await response.json();
        setDashboardData(data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl font-bold mb-8 bg-white border-2 shadow-gray-800 rounded-xl p-2">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        {dashboardData && Object.entries(dashboardData).map(([key, value]) => (
          <div key={key} className="bg-blue-950 rounded-2xl shadow p-4">
            <h2 className="text-lg font-semibold mb-2 text-white">{key}</h2>
            <p className='text-white font-bold text-2xl'>{typeof value === 'object' ? `${value.totalRevenue} ${value.currency}` : value}</p>
          </div>
        ))}
      </div>
      <ProductTable />
    </div>
  );
};

export default Home;
