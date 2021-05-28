import React from "react";
import KPI from "../components/KPI";
import styled from "styled-components";
import SetUp from "./SetUp";
import { Link } from "react-router-dom";
import {
  DatePicker,
  Space,
  Divider,
  Breadcrumb,
  Button,
  message,
  Steps,
} from "antd";
import StepsS from "../components/Steps";
const { RangePicker } = DatePicker;

const Dashboard1 = () => {
  return (
    <div>
      <StepsS />
      <div className="appBar">
        <div style={{ marginTop: "-2%", marginLeft: "auto", width: "30%" }}>
          <Space direction="vertical" size={12}>
            <RangePicker showTime />
          </Space>
        </div>
      </div>
      <Divider />
      <br />
      <hr />
    </div>
  );
};
export default Dashboard1;
