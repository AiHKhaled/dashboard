import { Steps, Button, message, Breadcrumb, Divider } from "antd";
import styled from "styled-components";
import React from "react";
import Dashboard1 from "../pages/Dashboard1";
import KPI from "../pages/KPI";
import SetUp from "../pages/SetUp";
import { Link } from "react-router-dom";
const { Step } = Steps;

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

const StepsS = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  function getStepContent(step) {
    switch (step) {
      case 0:
        return Error;
      case 1:
        return <KPI />;
      case 2:
        return <SetUp />;
      default:
        return Error;
    }
  }
  return (
    <StyledSteps>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div>
        <Divider />
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link primrary="KPI">KPI</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link primary="SetUp">KPI Setup</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Customize</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="steps-content">{steps[current].content}</div>
      {getStepContent(current)}
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
  );
};

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
export default StepsS;
