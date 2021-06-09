import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
import ReactFusioncharts from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Countries With Most Oil Reserves [2017-18]",
    subcaption: "In MMbbl = One Million barrels",
    xaxisname: "Country",
    yaxisname: "Reserves (MMbbl)",
    //numbersuffix: "K",
    showBorder: "0",
    theme: "candy",
  },
  data: [
    {
      label: "Venezuela",
      value: "290",
    },
    {
      label: "Saudi",
      value: "260",
    },
    {
      label: "Canada",
      value: "180",
    },
    {
      label: "Iran",
      value: "140",
    },
    {
      label: "Russia",
      value: "115",
    },
    {
      label: "UAE",
      value: "100",
    },
    {
      label: "US",
      value: "30",
    },
    {
      label: "China",
      value: "30",
    },
  ],
};

export default class Chart extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="column2d"
        width="100%"
        height="50%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}
