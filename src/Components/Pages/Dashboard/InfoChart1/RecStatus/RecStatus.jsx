import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// Sample data from image
const chartLabels = ['In Progress', 'Recovered', 'Delayed', 'New'];
const chartDataValues = [52.1, 22.8, 13.9, 11.2];
const chartColors = ['#2D8986', '#7FD5D3', '#FBB691', '#F9E4A3'];

const data = {
  labels: chartLabels,
  datasets: [
    {
      data: chartDataValues,
      backgroundColor: chartColors,
      borderWidth: 0,
      cutout: '70%',
    },
  ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Keep custom HTML legend
      },
      tooltip: {
        enabled: true, //  Enable tooltip on hover
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = context.parsed;
            return `${label}: ${value}%`;
          },
        },
      },
    },
    hover: {
      mode: 'nearest', 
      intersect: true,
    },
  };
  

export default function RecStatus() {
  return (
    <div className="w-full bg-[#F5F5F5] rounded-xl shadow p-6 h-full">
      <h2 className="text-md font-semibold text-black mb-4">
        Patient Recovery Status Overview
      </h2>
      <div className="flex">
        <div className="w-1/2 h-64 flex items-center justify-center">
          <Doughnut data={data} options={options} />
        </div>
        <div className="w-1/2 flex flex-col justify-center gap-4 pl-4">
          {chartLabels.map((label, i) => (
            <div key={label} className="flex items-center space-x-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: chartColors[i] }}
                  ></span>
                  <div className='flex justify-between items-center gap-8'>
                      
              <span className="text-sm text-gray-700 flex  font-normal">
                {label}  
                      </span>
                      <span className="font-semibold">{chartDataValues[i]}%</span>
                  </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
