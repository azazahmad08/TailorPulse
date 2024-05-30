import  { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';

const ProductChart = ({ isActive }) => {
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
        label: 'Products',
        data: [35, 49, 70, 91, 36, 45, 60],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Product Chart</h2>
      <Bar ref={chartRef} data={data} />
    </div>
  );
};

export default ProductChart;
