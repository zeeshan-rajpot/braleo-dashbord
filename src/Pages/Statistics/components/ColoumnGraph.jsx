import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const ColoumnGraph = () => {
  const [selectedData, setSelectedData] = useState('last15Days');

  const dataOptions = {
    last15Days: {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
      series: [
        {
          name: 'Day Color #DEE2E6',
          data: [30, 0, 20, 0, 5, 0, 15],
        },
        {
          name: 'Day Color #26A51B',
          data: [0, 40, 0, 32, 0, 40, 0],
        },
      ],
    },
    '2Days': {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
      series: [
        {
          name: 'Day Color #DEE2E6',
          data: [30, 0],
        },
        {
          name: 'Day Color #26A51B',
          data: [0, 30, 0, 20, 0, 5, 0, 15],
        },
      ],
    },
    '1Month': {
      labels: [
        'Day 1',
        'Day 2',
        'Day 3',
        'Day 4',
        'Day 5',
        'Day 6',
        'Day 7',
        'Day 8',
        'Day 9',
        'Day 10',
        'Day 11',
        'Day 12',
        'Day 13',
        'Day 14',
        'Day 15',
        'Day 16',
        'Day 17',
        'Day 18',
        'Day 19',
        'Day 20',
        'Day 21',
        'Day 22',
        'Day 23',
        'Day 24',
        'Day 25',
        'Day 26',
        'Day 27',
        'Day 28',
        'Day 29',
        'Day 30',
      ],
      series: [
        {
          name: 'Day Color #DEE2E6',
          data: [
            30, 0, 20, 0, 5, 0, 15, 10, 0, 20, 5, 0, 15, 10, 0, 20, 5, 0, 15,
            10, 0, 20, 5, 0, 15, 10, 0, 20, 5, 0,
          ],
        },
        {
          name: 'Day Color #26A51B',
          data: [
            0, 40, 0, 32, 0, 40, 0, 0, 40, 0, 32, 0, 40, 0, 0, 40, 0, 32, 0, 40,
            0, 0, 40, 0, 32, 0, 40, 0, 0,
          ],
        },
      ],
    },
  };

  const columnData = dataOptions[selectedData];

  const options = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: columnData.labels,
    },
    colors: ['#DEE2E6', '#26A51B'],
    legend: {
      show: false,
    },
  };

  return (
    <div className='border p-4 rounded-3 '>
      <div className='d-flex justify-content-between align-items-center '>
        <div>
          <h4
            style={{ color: '#75818D', fontSize: '25.22px', fontWeight: '600' }}
          >
            Total Access
          </h4>
        </div>
        <div>
          <select
            value={selectedData}
            className='text-muted border-0 p-3 rounded-3 bg-light'
            onChange={e => setSelectedData(e.target.value)}
          >
            <option value='2Days'>2 Days</option>
            <option value='last15Days'>Last 15 Days</option>
            <option value='1Month'>1 Month</option>
          </select>
        </div>
      </div>
      <Chart
        className='w-100'
        options={options}
        series={columnData.series}
        type='bar'
        height={350}
      />
    </div>
  );
};

export default ColoumnGraph;
