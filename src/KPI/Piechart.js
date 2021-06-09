import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import React from "react";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);
const dataSourcepie = {
  piechart: {
    caption: "Market Share of Web Servers",
    plottooltext: "<b>$percentValue</b> of web servers run on $label servers",
    showlegend: "1",
    showpercentvalues: "1",
    legendposition: "bottom",
    usedataplotcolorforlabels: "1",
    theme: "candy",
  },

  data: [
    {
      label: "Apache",
      value: "32647479",
    },
    {
      label: "Microsoft",
      value: "22100932",
    },
    {
      label: "Zeus",
      value: "14376",
    },
    {
      label: "Other",
      value: "18674221",
    },
  ],
};

export default class Piechart extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="pie2d"
        width="100%"
        height="25%"
        dataFormat="JSON"
        dataSource={dataSourcepie}
      />
    );
  }
}

{
  /* <div
  class="container"
  style={{
    textAlign: "left",
    padding: "1.8rem ",
    display: "flex",
    width: "50%",
    position: "relative",
    bottom: "21rem",
  }}
></div>; */
}
