import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, ChartData } from "chart.js";
import React, { useRef, useEffect, useState } from "react";

import "chart.js/auto";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      display: true,
    },
  },
  elements: {
    arc: { weight: 0.5, borderWidth: 1 },
  },
  cutout: 60,
};

const labels = ["Paracetamol", "Chloroquine", "Capsule"];

const weight = [160.0, 130.2, 119.1];
const backgroundColor = ["rgb(2,88,255)", "rgb(249,151,0)", "rgb(255,199,0)"];

export const data = {
  labels,
  datasets: [
    {
      label: "Best 3 Sales",
    },
  ],
};

const DoughnutComponent = () => {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<"bar">>({
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
        backgroundColor: backgroundColor,
        data: weight,

        hoverOffset: 4,
      })),
    };

    setChartData(chartData);
  }, []);

  return (
    <div className="w-full h-[240px] rounded-sm p-3">
      <div>
        <p>Top 3 Sales</p>
      </div>
      <Chart
        ref={chartRef}
        type="doughnut"
        data={chartData}
        options={options}
        width="200px"
        height="150px"
      />
    </div>
  );
};

export default DoughnutComponent;
