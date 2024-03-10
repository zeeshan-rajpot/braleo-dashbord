import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export const SemiCircleChart = () => {
  const chartOptions = {
    labels: [
      'Business subscriptions',
      'Flat subscriptions',
      'Yellow subscriptions',
      'Canceled subscriptions',
      'Pending subscriptions',
    ],
    colors: ['#049B1C', '#1659DB', '#F2A40C', '#FF0000', '#B4BEC8'],
    bgcolors: ['#D4D7DA', '#B0C6F0', '#F6DEAE', '#FAA9AA', '#E2E6EA'],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
      },
    },
  };

  const chartData = [56, 47, 48, 37, 54];

  const totalSubscriptions = chartData.reduce(
    (total, value) => total + value,
    0
  );

  const [selectedLabel, setSelectedLabel] = useState(null);

  const handleRadioChange = label => {
    setSelectedLabel(label);
  };

  return (
    <div className='d-flex flex-column justify-content-start align-items-start'>
      <div className='chart-container'>
        <ReactApexChart
          options={chartOptions}
          series={chartData}
          type='donut'
        />
        <div className='chart-text'>
          <p className='total-subscriptions-text'>Total Subscriptions</p>
          <p className='total-subscriptions-value'>{totalSubscriptions}</p>
        </div>
      </div>
      <div className='d-flex flex-column align-items-start'>
        {chartOptions.labels.map((label, index) => (
          <div key={index} className='d-flex flex-column align-items-start'>
            <label className='radio-label d-flex justify-content-center align-items-center'>
              <>
                <div
                  className='me-3  d-flex justify-content-center align-items-center '
                  style={{
                    backgroundColor: chartOptions.bgcolors[index],
                    borderRadius: '50%',
                    width: '12.86px',
                    height: '12.86px',
                    boxShadow: chartOptions.colors[index],
                  }}
                >
                  <div
                    style={{
                      backgroundColor: chartOptions.colors[index],
                      borderRadius: '50%',
                      width: '6.43px',
                      height: '6.43px',
                      boxShadow: chartOptions.colors[index],
                    }}
                  ></div>
                </div>
              </>

              <div className='my-1 text-muted d-flex justify-content-between align-items-center '>
                <div className='my-1 text-muted '>
                  <p>{label}</p>
                </div>
                <div className='my-1 ms-5 d-flex flex-column justify-content-start align-items-start '>
                  <p>{chartData[index]}</p>
                </div>
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SemiCircleChart;
