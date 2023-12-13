import { PureComponent, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const item = payload[0];
    return (
      <div
        className='custom-tooltip p-2 rounded-3'
        style={{ backgroundColor: 'black' }}
      >
        <p className='text-light'>{`Month : ${item.payload.name}`}</p>
        <p className='text-light'>{`$ ${item.value}`}</p>
      </div>
    );
  }
  return null;
};

const LineCharts = () => {
  const [selectedYear, setSelectedYear] = useState('2023');

  const handleYearChange = e => {
    setSelectedYear(e.target.value);
  };

  const getDataForYear = () => {
    switch (selectedYear) {
      case '2023':
        return [
          { name: 'Jan', Profit: 4000, Sales: 2400, amt: 2400 },
          { name: 'Feb', Profit: 3000, Sales: 1398, amt: 2210 },
          { name: 'Mar', Profit: 2000, Sales: 9800, amt: 2290 },
          { name: 'Apr', Profit: 2780, Sales: 3908, amt: 2000 },
          { name: 'May', Profit: 1890, Sales: 4800, amt: 2181 },
          { name: 'Jun', Profit: 2390, Sales: 3800, amt: 2500 },
          { name: 'Jul', Profit: 3490, Sales: 4300, amt: 2100 },
        ];
      case '2021':
        return [
          { name: 'Jan', Profit: 3000, Sales: 2000, amt: 2000 },
          { name: 'Feb', Profit: 2500, Sales: 1500, amt: 1500 },
          { name: 'Mar', Profit: 1800, Sales: 3500, amt: 3000 },
          { name: 'May', Profit: 1890, Sales: 4800, amt: 2181 },
          { name: 'Jun', Profit: 2390, Sales: 3800, amt: 2500 },
          { name: 'Jul', Profit: 3490, Sales: 4300, amt: 2100 },
          // Add data for 2021 here
        ];
      case '2020':
        return [
          { name: 'Jan', Profit: 3500, Sales: 2200, amt: 2200 },
          { name: 'Feb', Profit: 2800, Sales: 8600, amt: 1600 },
          { name: 'Mar', Profit: 2100, Sales: 5200, amt: 3200 },
          { name: 'May', Profit: 1890, Sales: 4800, amt: 2181 },
          { name: 'Jun', Profit: 2390, Sales: 6800, amt: 2500 },
          { name: 'Jul', Profit: 3490, Sales: 4300, amt: 2100 },
          // Add data for 2020 here
        ];
      default:
        return [];
    }
  };

  return (
    <>
      <Row className='my-1 my-md-3'>
        <Col className='d-flex align-items-center justify-content-between'>
          <h4>Total Sales</h4>
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className=' border p-2 rounded-3 pe-3'
          >
            <option value='2023'>2023</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
          </select>
        </Col>
      </Row>

      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          width={500}
          height={300}
          data={getDataForYear()}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey='name' style={{ fontSize: '10px' }} />
          <YAxis style={{ fontSize: '10px' }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line
            type='monotone'
            dataKey='Sales'
            stroke='#F3A000'
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />
          <Line
            type='monotone'
            dataKey='Profit'
            stroke='#FFE8BA'
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineCharts;
