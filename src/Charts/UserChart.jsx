import  { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';

const UserChart = ({ isActive }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    const chartInstance = chartRef.current;
    const chart = chartInstance.chartInstance;

    // If chart instance exists, destroy it before rendering a new one
    if (chart) {
      chart.destroy();
    }

    // Render new chart
    const newChartInstance = chartInstance.chartConstructor(chartInstance.chartRef.current, chartInstance.options);
    chartInstance.setChartInstance(newChartInstance);

    return () => {
      // Cleanup function to destroy the chart when component is unmounted
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, [isActive]);

  if (!isActive) return null;

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Users',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>User Chart</h2>
      <Bar ref={chartRef} data={data} />
    </div>
  );
};

export default UserChart;
