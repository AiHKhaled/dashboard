import React, { Component } from "react";
import Chart from "./Kpi1";
import Map from "./Map";
import Piechart from "./Piechart";
import { Typography } from "antd";

const { Title } = Typography;

export default class Churnsection extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <section
        style={{ width: "100%" }}
        id="subscribers"
        className="section is-top-padded"
      >
        <Title level={3}>Churn</Title>
        <br />
        <div className="tile is-ancestor">
          <div className="tile is-6 is-parent">
            <div className="tile is-12 is-child box">
              <p className="sub-caption"> Subscription by Region</p>
              <Map />
            </div>
          </div>
          <div className="tile is-6 is-vertical is-parent">
            <div className="tile is-child box">
              <p className="sub-caption">Global Subscribers</p>
              <p className="is-smaller">Year Wise(In Million)</p>
              <Piechart />
            </div>
            <div className="tile is-child box">
              <p className="sub-caption">Demographic Subscription</p>
              <Chart />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
