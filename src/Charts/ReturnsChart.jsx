// ReturnChart.js
import  { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';

const ReturnChart = ({ isActive }) => {
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
        label: 'Returns',
        data: [12, 19, 3, 5, 2, 3, 10],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        lineTension: 0.1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Return Chart</h2>
      <Line ref={chartRef} data={data} />
    </div>
  );
};

export default ReturnChart;
