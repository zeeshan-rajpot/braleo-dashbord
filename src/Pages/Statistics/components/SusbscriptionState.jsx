import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export const SubscriptionState = () => {
  const chartOptions = {
    labels: ['Business', 'Flat', 'Yellow', 'Canceled', 'Pending'],
    colors: ['#049B1C', '#1659DB', '#F2A40C', '#FF0000', '#B4BEC8'],
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

  const chartData = [100, 75, 50, 25, 10];

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
            <label
              className='radio-label d-flex justify-content-center align-items-center'
              // style={{ color: chartOptions.colors[index] }}
            >
              <div
                className='me-3'
                style={{
                  backgroundColor: chartOptions.colors[index],
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  boxShadow: chartOptions.colors[index],
                }}
              ></div>
              <p className='my-1 text-muted'>
                ({label}) subscriptions: {chartData[index]}
              </p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionState;
