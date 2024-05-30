// OtherChart.js
import  { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';

const OrderChart = ({ isActive }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    const chartInstance = chartRef.current;
    const chart = chartInstance.chartInstance;

    if (chart) {
      chart.destroy();
    }

    const newChartInstance = chartInstance.chartConstructor(chartInstance.chartRef.current, chartInstance.options);
    chartInstance.setChartInstance(newChartInstance);

    return () => {
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
        label: 'Other Data',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Other Chart</h2>
      <Bar ref={chartRef} data={data} />
    </div>
  );
};

export default OrderChart;
