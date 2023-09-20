import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import faker from 'faker';
//   return (
    // <div>
      


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July','Aug','Sept','Oct','Nov','Dec'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Net working Capital',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: '#E8E6C2',
      backgroundColor: '#E8E6C2',
    },
    {
      label: 'Gross working Capital',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: '#9DA6AF',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
const Linegraph = () => {
    return <Line options={options} data={data} />;
}

export default Linegraph
