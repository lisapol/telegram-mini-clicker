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

const labels = [
  '6 wk', '8 wk', '20 wk', '22 wk', '32 wk', '45 wk',
];


const weightData = {
  labels: labels,
  datasets: [
    {
      label: 'Weight (kg)',
      data: [5.0, 5.3, 6.7, 7.2, 8.0, 9.3],
      fill: false,
      borderColor: '#A3C4DC',
      tension: 0.3,
      pointBackgroundColor: '#A3C4DC',
      pointBorderColor: '#A3C4DC',
    },
    ...[
      { label: '2nd %', color: '#ff4d4d', values: [3.8, 4.1, 5.5, 5.8, 6.8, 7.9] },
      { label: '9th %', color: '#ff944d', values: [4.2, 4.5, 6.0, 6.3, 7.3, 8.4] },
      { label: '25th %', color: '#ffd24d', values: [4.6, 4.9, 6.4, 6.8, 7.7, 8.8] },
      { label: '50th %', color: '#a0e060', values: [5.0, 5.3, 6.8, 7.2, 8.2, 9.2] },
      { label: '75th %', color: '#4dd2ff', values: [5.4, 5.7, 7.2, 7.6, 8.7, 9.7] },
      { label: '91st %', color: '#3399ff', values: [5.7, 6.0, 7.5, 8.0, 9.1, 10.1] },
      { label: '98th %', color: '#9966ff', values: [6.0, 6.3, 7.8, 8.3, 9.4, 10.5] },
      { label: '99.6th %', color: '#cc33ff', values: [6.3, 6.6, 8.1, 8.6, 9.8, 10.9] }
    ].map(p => ({
      label: p.label,
      data: [...p.values, null, null, null],
      borderColor: p.color,
      borderDash: [5, 5],
      fill: false,
      tension: 0.3,
      pointRadius: 0,
    }))
  ]
};


const heightLabels = ['5 mo', '7.5 mo', '10 mo'];


// Height Data
const heightData = {
  labels: heightLabels,
  datasets: [
    {
      label: 'Height (cm)',
      data: [65, 68, 70],
      fill: false,
      borderColor: '#A3C4DC',
      tension: 0.3,
      pointBackgroundColor: '#A3C4DC',
      pointBorderColor: '#A3C4DC',
    },
    ...[
      { label: '2nd %', color: '#ff4d4d', values: [65, 68, 69] },
      { label: '9th %', color: '#ff944d', values: [66, 69, 70] },
      { label: '25th %', color: '#ffd24d', values: [67, 70, 71] },
      { label: '50th %', color: '#a0e060', values: [68, 71, 72] },
      { label: '75th %', color: '#4dd2ff', values: [69, 72, 73] },
      { label: '91st %', color: '#3399ff', values: [70, 73, 74] },
      { label: '98th %', color: '#9966ff', values: [71, 74, 75] },
      { label: '99.6th %', color: '#cc33ff', values: [72, 75, 76] }
    ].map(p => ({
      label: p.label,
      data: p.values,
      borderColor: p.color,
      borderDash: [5, 5],
      fill: false,
      tension: 0.3,
      pointRadius: 0,
    }))
  ]
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
