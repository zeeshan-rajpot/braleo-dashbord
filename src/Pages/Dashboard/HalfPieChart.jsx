import { useState } from 'react';
import './HalfPieChart.css';
import ReactApexChart from 'react-apexcharts';

const HalfPieChart = () => {
  const [chartData, setChartData] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut',
        height: '200%',
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10,
        },
      },
      grid: {
        padding: {
          bottom: -80,
        },
      },
      // responsive: [{
      //   breakpoint: 900,
      //   options: {
      //     chart: {
      //       width: 200
      //     },
      //     legend: {
      //       position: 'bottom'
      //     }
      //   }
      // }],
      labels: ['Business', 'Flat', 'Yellow', 'Canceled', 'Pending'],
    },
  });

  return (
    <>
      <div id='chart'>
        <ReactApexChart
          className='mobilemargin ms-2 w-100 h-100'
          options={chartData.options}
          series={chartData.series}
          type='donut'
        />
        <p className=' text-center pt-2 pb-4 '>Total Subscription : 189</p>
      </div>
    </>
  );
};

export default HalfPieChart;

{
  /*  */
}
