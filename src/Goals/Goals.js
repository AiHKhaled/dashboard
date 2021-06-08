import React, { Component, useState, useEffect } from "react";

import {
  Form,
  Input,
  Button,
  Card,
  Select,
  Divider,
  Steps,
  Layout,
  Anchor,
  InputNumber,
  Typography,
} from "antd";
import axios from "axios";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AnchorExample from "./Anchor";
import Fetching from "../components/Nav/Fetching";
const { Title } = Typography;

//const { Sider, Content } = Layout;
const { Step } = Steps;
//const { Link } = Anchor;
const { TextArea } = Input;

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 10,
  },
};
const data = [
  {
    key: "1",
    name: "first kpi",
    description: "this is a kpi",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "second kpi",
    description: "this is a kpi",
    tags: ["nice"],
  },
  {
    key: "3",
    name: "third kpi",
    description: "this is a kpi",
    tags: ["loser"],
  },
  {
    key: "4",
    name: "fourth kpi",
    description: "this is a kpi",
    tags: ["cool", "teacher"],
  },
  {
    key: "12",
    name: "twelveth kpi",
    description: "this is a kpi",
    tags: ["cool", "teacher"],
  },
  {
    key: "10",
    name: "tenth kpi",
    description: "this is a kpi",
    tags: ["cool", "teacher"],
  },
  {
    key: "11",
    name: "eleventh kpi",
    description: "this is a kpi",
    tags: ["cool", "teacher"],
  },
];
/* data = [
  ...data,
  {
    key: data.key,
    name: data.name,
    description: data.description,
  },
];
this.setState({
  details: data,
}); */

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
};
/* eslint-enable no-template-curly-in-string */

export default class Goals extends React.Component {
  state = {
    current: 0,
    goals: [],
    //persons: [],
  };

  onChange = (current) => {
    console.log("onChange:", current);
    this.setState({ current });
  };
  /*  AddData = (name, description) => {
    data.push({ name: name, description: description });
  };
  saveInput = (e) => {
    this.setState({ input: e.target.value });
  };
 */
  //componentDidMount() {
  //axios.get(`http://127.0.0.1:8000/api/Goals/`).then((res) => res.json());
  /*  {
      const Goals = res.Goals;
      this.setState({ Goals });
    }); */
  /* axios.get(`http://127.0.0.1:8000/api/Goals/`).then((res) => {
      const goals = res.Goals;
      this.setState({ goals });
    });
  } */
  render() {
    const { current } = this.state;
    const onFinish = (values) => {
      console.log(values);
    };

    const { Option } = Select;

    const children = [];
    /* {i: 1,
      name: first goal, 
      description: what is this, 
    } */
    for (let i = 10; i < 36; i++) {
      children.push(
        <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
      );
    }

    function handleChangeKPI(value) {
      console.log(`selected ${value}`);
    }

    /*   const [goals, setGoals] = React.useState([]);
    React.useEffect(() => {
      fetch("http://127.0.0.1:8000/api/Goals/")
        .then((res) => res.json())
        .then((Goals) => {
          setGoals(Goals);
        });
    }, []);
 */

    function onChange(value) {
      console.log("changed", value);
    }

    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    return (
      <div style={{ overflowX: false }}>
        <AnchorExample />

        <Card id="Goals" grid={{ gutter: 16, column: 4 }}>
          <Title style={{ textAlign: "center" }} level={3}>
            Goals
          </Title>

          <br></br>
          <div>
            <Select
              mode="tags"
              style={{ paddingLeft: 93, width: "50%" }}
              onChange={this.onChange}
              tokenSeparators={[","]}
            >
              {/* {goals && this.state.goals.map((goal) => <li>{goal.name}</li>)} */}

              {/* 
              {this.props.state.Goals.map((goal) => (
                <li>{goal.name}</li>
              ))} */}

              {data.map((element) => (
                <Option key={element.key} value={element.key}>
                  {element.name}
                </Option>
              ))}
            </Select>
          </div>
          <br />
          <br />
          <Divider orientation="left">Define another Goal:</Divider>
          <br />
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "name"]}
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={["user", "Description"]} label="Description">
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 21 }}>
              <Link to="/">
                <Button type="primary" htmlType="submit" onClick={this.AddData}>
                  Submit
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Card>
        <br />
        <Card id="Subgoals">
          <Title style={{ textAlign: "center" }} level={3}>
            Subgoals
          </Title>

          <br />
          <div>
            <Select
              mode="tags"
              style={{ paddingLeft: 93, width: "50%" }}
              onChange={handleChange}
              tokenSeparators={[","]}
            >
              {children}
            </Select>
          </div>
          <br />

          <Divider orientation="left">Define another subgoal:</Divider>
          <div>
            <br />
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <Form.Item
                name={["user", "name"]}
                label="Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item name={["user", "Description"]} label="Description">
                <Input.TextArea />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 21 }}>
                <Link to="/">
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Link>
              </Form.Item>
            </Form>
          </div>
        </Card>
        <br />
        <Card id="KPI">
          <Title style={{ textAlign: "center" }} level={3}>
            KPI
          </Title>

          <Divider orientation="left">Define KPI:</Divider>
          <br />
          <div>
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <Form.Item label="Name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </Form>
          </div>

          <div style={{ paddingLeft: "90px" }}>
            <br /> <br />
            <InputNumber Name="input" min={1} max={10} onChange={onChange} />
            <br /> <br />
            <InputNumber name="input" min={1} max={10} onChange={onChange} />
            <br /> <br />
            <InputNumber name="input" min={1} max={10} onChange={onChange} />
            <br /> <br />
            <Select
              defaultValue="Sum"
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="division">Division</Option>
              <Option value="sum">Sum</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
            </Select>
            <br /> <br /> <br />
          </div>
          <Form {...layout}>
            <Form.Item name={["user", "Description"]} label="Description">
              <Input.TextArea />
            </Form.Item>
          </Form>
          <Form.Item wrapperCol={{ offset: 21 }}>
            <Link to="/">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Link>
          </Form.Item>
        </Card>
      </div>
    );
  }
}

const StyledIn = styled.div`
  .input {
    margin: 50px;
  }
`;
