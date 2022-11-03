import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, ChartData } from 'chart.js';
import React, { useRef, useEffect, useState } from 'react';

import 'chart.js/auto';

export const options = {
  maintainAspectRatio:false,
  plugins: {
    
    legend: {
      position: 'top' as const,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const colors = {
  default: 'rgba(102, 178, 255, 1)',
  half: 'rgba(102, 178, 255, 0.5)',
  quarter: 'rgba(102, 178, 255, 0.25)',
  zero: 'rgba(102, 178, 255, 0)',
};

const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2, 58.5, 61.6];

function createGradient(ctx: CanvasRenderingContext2D) {
  const gradient = ctx.createLinearGradient(0, 25, 0, 300);

  gradient.addColorStop(0, colors.half);
  gradient.addColorStop(0.35, colors.quarter);
  gradient.addColorStop(1, colors.zero);

  return gradient;
}

export const data = {
  labels,
  datasets: [
    {
      label: 'Total Revenue',
    },
  ],
 
};

const ChartComponent = () => {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (chart == null) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        fill: true,
        backgroundColor: createGradient(chart.ctx),
        pointBackgroundColor: colors.default,
        borderColor: colors.default,
        data: weight,
        lineTension: 0.2,
        borderWidth: 2,
        pointRadius: 3,
      })),
       options: {
        maintainAspectRatio: false,
     }
    };

    setChartData(chartData);
  }, []);

  return (
    <div className="w-full h-[376px] bg-white rounded-md p-6">
      <div>
        <p>Monthly Revenue Generated</p>
      </div>
      <Chart ref={chartRef} type="line" data={chartData} options={options} />
    </div>
  );
};

export default ChartComponent;