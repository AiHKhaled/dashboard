import React from "react";
import CheckOut from "../components/CheckOut";

import StepsS from "../components/Steps";
import KPITable from "../KPI/KPITable";
import Tabletrial from "../components/Tabletrial";
//import App from "../trial/TableF";
import { Statistic, Card, Col, Divider, Row } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import CustomerSegmentation from "../Customers/CustomerSegmentation";
import KPIcard from "../utils/KPIcards";
//import kpiData from "../KPI/kpiData";
import dollar from "../assets/doller.svg";
import styled from "styled-components";
import circleCropped from "../assets/circleCropped.png";
import churn from "../assets/churn.svg";
import Chart from "../KPI/Kpi1";
import Map from "../KPI/Map";
import Piechart from "../KPI/Piechart";
import Line from "../KPI/Line";

import { Typography } from "antd";
import Churnsection from "../KPI/Churnsection";
import KpiSection from "../KPI/KpiSection";
import ChartTest from "../KPI/TestChart";
import Segmentation from "../KPI/Segmentation";
const { Title } = Typography;

const something = [
  {
    id: "1",
    name: "Revenue Attrition",
    icon: churn,
    iconType: "badge is-dollar",
    description: "Tracks your revenue",
  },
  {
    id: "2",
    name: "Customer lifetime value",
    icon: churn,
    description: "your customers's value",
  },
  {
    id: "3",
    name: "SAC",
    icon: churn,
    description: "represents the true cost of gaining a new customer. ",
  },
  {
    id: "4",
    name: "Customer Churn",
    icon: churn,
    description: "how many customers left the company ",
  },
  {
    id: "5",
    name: "Snacks",
    price: 0,
    description: "Free snacks!",
  },
  {
    id: "6",
    name: "Rubber Duckies",
    price: 3.5,
    description: "To help you solve your hardest coding problems.",
  },
  {
    id: "7",
    name: "Fidget Spinner",
    price: 21.99,
    description: "Because we like to pretend we're in high school.",
  },
  {
    id: "8",
    name: "Sticker Set",
    price: 14.99,
    description: "To prove to other devs you know a lot.",
  },
];

const KPI = () => {
  const [kpiData, setKpiData] = React.useState([something]);
  const children = [];
  for (let i = 0; i < something[3].id; i++) {
    children.push(
      <Col
        style={{
          //paddingLeft: " 0.75rem ",
          paddingBottom: "0.75rem",
        }}
        span={6}
      >
        <Card
          key={i}
          style={{
            width: 240,
            height: "150px",
            alignContent: "right",
            borderRadius: "25px",
          }}
          hoverable
          //title={something[i].name}
          img={churn}
          bordered={false}
        >
          <div style={{ textAlign: "right " }} className="stats">
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </div>
          {/* {something[i].description} */}

          <div
            style={{
              height: 50,
              width: 50,
              textAlign: "top",
              alignContent: " center",
              alignItems: "center",
              display: "flex",
              position: "relative",
              bottom: "120px",
              flexDirection: "column",
              justifyContent: "top",
              borderRadius: "50%",
              boxShadow: "0 8px 10px 0 rgba(8, 8, 8, 0.17)",
              backgroundColor: " rgba(147, 196, 191, 0.17)",
            }}
            //className={something[i].iconType}
          >
            <img
              style={{
                width: 40,
                height: 40,
              }}
              src={something[i].icon}
              alt="something's wrong"
            />
          </div>
        </Card>
      </Col>
    );
  }

  return (
    <div style={{ fontFamily: "Roboto" }} className="is-main">
      <Divider />

      <div className="site-card-wrapper">
        <a href="#">
          <Row gutter={16}>{children}</Row>
        </a>
        <Divider />
      </div>
      <Churnsection />
      <KpiSection />
      <Segmentation />

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css"
      ></link>
    </div>
  );
};

export default KPI;

const IconStyled = styled.div`
  height: 50;
  width: 50;
  text-align: top;
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: top;
  border-radius: 50%;
  box-shadow: 0 8px 10px 0 rgba(8, 8, 8, 0.17);
  background-color: rgba(147, 196, 191, 0.17);
  is-child {
    border-radius: 10px !important;
  }
  .is-main {
    align-content: center;
    align-items: center;
    display: flex;
  }
`;
