import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const chartLabels = ['Points Earned', 'Consecutive Days', 'Time Completed'];
const chartDataValues = [50, 35, 15];
const chartColors = ['#40C1BD', '#F6D776', '#9FF0F7'];

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
            display: false,
        },
        tooltip: {
            enabled: false,
        },
        datalabels: {
            color: '#fff',
            font: {
                weight: 'bold',
                size: 10,
            },
            formatter: (value) => `${value}%`,
        },
    },
};

export default function PatientSec2() {
    return (
        <div className="w-full bg-[#F5F5F5] rounded-xl shadow p-6 h-full">
            <h2 className="text-md font-semibold text-black mb-4">
                Patient Recovery Status Overview
            </h2>
            <div className="flex gap-6">
                <div className="w-1/2 flex items-center justify-center">
                    <div className="w-40 h-40">
                        <Doughnut data={data} options={options} plugins={[ChartDataLabels]} />
                    </div>
                </div>
                <div className="w-1/2 flex flex-col justify-center gap-4 pl-4">
                    {chartLabels.map((label, i) => (
                        <div key={label} className="flex items-center space-x-2">
                            <span
                                className="inline-block w-3 h-3 rounded-full"
                                style={{ backgroundColor: chartColors[i] }}
                            ></span>
                            <div className="flex justify-between items-center gap-8">
                                <span className="text-sm text-gray-700 flex font-normal">
                                    {label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
