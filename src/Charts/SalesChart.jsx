// SalesChart.js
import  { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';

const SalesChart = ({ isActive }) => {
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
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Sales',
        data: [300, 50, 100],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Sales Chart</h2>
      <Doughnut ref={chartRef} data={data} />
    </div>
  );
};

export default SalesChart;
