import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Col, Row } from 'react-bootstrap';

const SemiCircleChart = () => {
  const data = [
    {
      title: 'Business subscriptions',
      value: '56',
      dotColor: '#049B1C',
      outerdotColor: '#D4D7DA',
    },
    {
      title: 'Flat subscriptions',
      value: '36',
      dotColor: '#1659DB',
      outerdotColor: '#B0C6F0',
    },
    {
      title: 'Yellow subscriptions',
      value: '46',
      dotColor: '#F2A40C',
      outerdotColor: '#F6DEAE',
    },
    {
      title: 'Canceled subscriptions',
      value: '30',
      dotColor: '#FF5733',
      outerdotColor: '#FAA9AA',
    },
    {
      title: 'Pending subscriptions',
      value: '30',
      dotColor: '#78828A',
      outerdotColor: '#E2E6EA',
    },
    // Add more data objects as needed
  ];
  const chartData = {
    series: [56, 47, 48, 38, 54],
    options: {
      chart: {
        type: 'donut',
        width: '100%',
      },
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
          donut: {
            size: '70%',
          },
        },
      },
      labels: ['Business', 'Flat', 'Yellow', 'Canceled', 'Pending'],
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
    },
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center '>
      <div>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type='donut'
        />
      </div>
      {data.map((item, index) => (
        <Row key={index} className='mt-2'>
          <Col className='d-flex align-items-center' xs='auto'>
            <div
              className='d-flex align-items-start justify-content-start  me-3'
              style={{ width: '20px' }}
            >
              <div
                className='d-flex justify-content-center align-items-center'
                style={{
                  backgroundColor: item.outerdotColor,
                  width: '12.86px',
                  height: '12.86px',
                  borderRadius: '8px',
                }}
              >
                <div
                  style={{
                    backgroundColor: item.dotColor,
                    width: '6.43px',
                    height: '6.43px',
                    borderRadius: '8px',
                  }}
                ></div>
              </div>

            </div>

            <p
              className='m-0'
              style={{
                fontSize: '12.86px',
                fontWeight: '500',
                color: '#000000',
              }}
            >
              {item.title}:
            </p>
          </Col>
          <Col>
            <div>
              <p
                style={{
                  fontSize: '12.86px',
                  fontWeight: '600',
                  color: '#75818D',
                }}
              >
                {item.value}
              </p>
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default SemiCircleChart;
