import React, { Component } from "react";
import styled from "styled-components";
import Line from "./Line";
import { Typography } from "antd";

const { Title } = Typography;

class KpiSection extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section id="kpi" className="section">
        <span className="has-image">
          <span className="badge is-feed">
            <img alt="image" />
          </span>
          <Title level={3}> Subscribers</Title>
        </span>
        <br />
        <div className="tile is-ancestor">
          <div className="tile is-12 is-parent">
            <div className="tile is-vertical is-child box">
              <div className="card-content">
                <p className="sub-caption">Global Revenue</p>
                <p className="is-smaller"></p>
                <Line />
              </div>
            </div>
          </div>
        </div>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css"
        ></link>
      </section>
    );
  }
}
export default KpiSection;
const IconStyled = styled.div`
  .card {
    border: 1px solid rgba(72, 72, 72, 0.17) !important;
    border-radius: 4px !important;
    background-color: #282a2e !important;
  }
  .card-content {
    padding: 0.5rem !important;
  }
`;
