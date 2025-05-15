import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import caln2 from '../../../../../assets/images/calendar-2.svg'

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// Labels for x-axis
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

// Chart data
const data = {
  labels,
  datasets: [
    {
      label: 'Recovered Cases This Month',
      data: [80, 50, 40, 45, 60, 55, 50],
      backgroundColor: '#2DC8C3',
      borderRadius: 6,
      barThickness: 16,
      categoryPercentage: 0.4,
      barPercentage: 0.5,
    },
    {
      label: 'Ongoing Cases Still Under Treatment',
      data: [30, 20, 60, 70, 80, 70, 85],
      backgroundColor: '#F9D261',
      borderRadius: 6,
      barThickness: 16,
      categoryPercentage: 0.4,
      barPercentage: 0.5,
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        padding: 20,
      },
    },
    tooltip: {
      callbacks: {
        label: (context) => `${context.dataset.label}: ${context.parsed.y}`,
      },
    },
  },
  scales: {
    x: {
      grid: { display: false },
    },
    y: {
      beginAtZero: true,
      grid: {
        drawBorder: false,
      },
    },
  },
};

export default function MonProgress() {
  return (
    <div className="w-full bg-[#F5F5F5] rounded-xl shadow p-6 h-[410px]">
     
      <div className='flex items-center justify-between'>
      <h2 className="text-md font-semibold text-black mb-4">
        Treatment Progress This Month
      </h2>
              <div className="bg-[#daf5f5] w-9 h-9 flex items-center justify-center rounded-md border-2 border-[#4d9d9c]">
                <img src={caln2} alt="" />
              </div>
      
            </div>
      <div className="h-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
