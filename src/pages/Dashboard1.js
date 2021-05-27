import React from "react";
import Chart from "../components/Chart";
import TreeView from "../components/TreeView";
import ProgressCircle from "../components/ProgressCircle";
import KPI from "../components/KPI";
import StepsS from "../components/Steps";
import styled from "styled-components";
import {
  Steps,
  DatePicker,
  Space,
  Divider,
  Breadcrumb,
  Button,
  message,
} from "antd";
const steps = [
  {
    title: "First",
  },
  {
    title: "Second",
  },
  {
    title: "Last",
  },
];
const { Step } = Steps;
const { RangePicker } = DatePicker;
const Dashboard1 = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div>
      <StyledSteps>
        <div className="appBar">
          <div
          /* style={{
              marginTop: "-1%",
              marginRight: "40%",

              fontSize: "50px",
            }} */
          >
            <Steps current={current}>
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <Divider />
            <div className="steps-content">{steps[current].content}</div>
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item href="">KPI</Breadcrumb.Item>
              <Breadcrumb.Item href="">KPI Setup</Breadcrumb.Item>
              <Breadcrumb.Item>Customize</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div style={{ marginTop: "-2%", marginLeft: "auto", width: "30%" }}>
            <Space direction="vertical" size={12}>
              <RangePicker showTime />
            </Space>
          </div>
        </div>
        <Divider />

        <div>
          <KPI />
        </div>
        <br />
        <hr />
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </StyledSteps>
    </div>
  );
};
export default Dashboard1;
const StyledSteps = styled.div`
  steps-content {
    min-height: 200px;
    margin-top: 16px;
    padding-top: 80px;
    text-align: center;
    background-color: #fafafa;
    border: 1px dashed #e9e9e9;
    border-radius: 2px;
  }

  steps-action {
    margin-top: 24px;
  }
`;
