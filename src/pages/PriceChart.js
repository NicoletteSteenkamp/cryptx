import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, TimeScale } from 'chart.js';
import 'chartjs-adapter-moment'; // Ensure this is imported
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, TimeScale);

const PriceChart = ({ assetId }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      label: 'Price (USD)',
      data: [],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
    }]
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://api.coincap.io/v2/assets/${assetId}/history?interval=d1`);
        const data = response.data.data;

        // Format the data
        const labels = data.map(item => new Date(item.date));
        const prices = data.map(item => parseFloat(item.priceUsd));

        setChartData({
          labels,
          datasets: [
            {
              label: 'Price (USD)',
              data: prices,
              borderColor: 'rgba(75,192,192,1)',
              backgroundColor: 'rgba(75,192,192,0.2)',
            }
          ]
        });
      } catch (error) {
        setError('Error fetching historical data');
        console.error('Error fetching historical data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistoricalData();
  }, [assetId]);

  if (loading) return <p>Loading chart...</p>;
  if (error) return <p>{error}</p>;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          tooltipFormat: 'll'
        },
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Price (USD)'
        }
      }
    }
  };

  return (
    <div>
      <h2>Price Chart for {assetId}</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default PriceChart;
