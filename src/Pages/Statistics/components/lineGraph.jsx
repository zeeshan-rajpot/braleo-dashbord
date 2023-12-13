import React from 'react';
import ApexChart from 'react-apexcharts';

class LineGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Users',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      options: {
        chart: {
          height: 800, // Set the chart height to 500px
          width: '500px', // Set the width to 80% of the available width
          type: 'line',
          zoom: {
            enabled: false,
          },
        },
        stroke: {
          width: 5, // Set the width of the line
          colors: ['#26A51B'], // Set the line color
        },
        xaxis: {
          labels: {
            show: false, // Hide x-axis labels
          },
        },
        yaxis: {
          labels: {
            show: false, // Hide y-axis labels
          },
        },
        grid: {
          show: false, // Hide background grid lines
        },
      },
    };
  }

  render() {
    return (
      <div>
        <ApexChart series={this.state.series} options={this.state.options} />
      </div>
    );
  }
}

export default LineGraph;
