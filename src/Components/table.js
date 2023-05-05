import React, { Component } from "react";
import Chart from "react-apexcharts";
import Page from "../utlis/page/page";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  }

  render() {
    return (
      <Page>
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="700"
                height="300"
              />
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default Table;
