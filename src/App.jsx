import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const months = Array.from({ length: 13 }, (_, i) => `${i} mo`);

const heightData = {
  labels: months,
  datasets: [
    {
      label: 'Height (cm)',
      data: [50, 54, 57, 60, 62, 64, 66, 68, 69.5, 71, 72.5, 74, 75],
      fill: false,
      borderColor: '#A3C4DC',
      backgroundColor: '#A3C4DC',
      tension: 0.3,
      pointBackgroundColor: '#A3C4DC',
      pointBorderColor: '#A3C4DC',
    }
  ],
};

const weightData = {
  labels: months,
  datasets: [
    {
      label: 'Weight (kg)',
      data: [3.2, 4.5, 5.6, 6.3, 7.0, 7.5, 8.0, 8.4, 8.8, 9.1, 9.3, 9.6, 10],
      fill: false,
      borderColor: '#A3C4DC',
      backgroundColor: '#A3C4DC',
      tension: 0.3,
      pointBackgroundColor: '#A3C4DC',
      pointBorderColor: '#A3C4DC',
    }
  ],
};

const chartOptions = (yLabel) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#e0e0e0',
        font: {
          family: "'Segoe UI', Roboto, sans-serif",
          size: 14,
        }
      }
    },
    tooltip: {
      backgroundColor: '#333',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: '#aaa',
      borderWidth: 1,
      titleFont: {
        family: "'Segoe UI', Roboto, sans-serif",
      },
      bodyFont: {
        family: "'Segoe UI', Roboto, sans-serif",
      }
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Baby Age (Months)',
        color: '#ccc',
        font: {
          family: "'Segoe UI', Roboto, sans-serif",
          size: 14,
        }
      },
      ticks: {
        color: '#ccc',
        font: {
          family: "'Segoe UI', Roboto, sans-serif"
        }
      },
      grid: {
        color: 'rgba(255,255,255,0.05)'
      }
    },
    y: {
      title: {
        display: true,
        text: yLabel,
        color: '#ccc',
        font: {
          family: "'Segoe UI', Roboto, sans-serif",
          size: 14,
        }
      },
      ticks: {
        color: '#ccc',
        font: {
          family: "'Segoe UI', Roboto, sans-serif"
        }
      },
      grid: {
        color: 'rgba(255,255,255,0.05)'
      }
    }
  }
});

const FullscreenChart = ({ data, options }) => (
  <div style={{
    width: '100vw',
    height: '100vh',
    backgroundColor: '#121212',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box'
  }}>
    <Line data={data} options={options} />
  </div>
);

const BabyGrowthPage = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <FullscreenChart data={heightData} options={chartOptions('Height (cm)')} />
      <FullscreenChart data={weightData} options={chartOptions('Weight (kg)')} />
    </div>
  );
};

export default BabyGrowthPage;
