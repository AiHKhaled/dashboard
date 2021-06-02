import React, { useState, useEffect } from "react";
import { Table, Form, Input, Button, Select } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Sex",
    dataIndex: "sex",
    key: "sex",
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
  },
  {
    title: "Region",
    dataIndex: "region",
    key: "region",
  },
  {
    title: "zip code",
    dataIndex: "zip",
    key: "zip",
  },
  {
    title: "Churn",
    dataIndex: "churn",
    key: "churn",
  },
];

const CustomerSegmentation = () => {
  const [Data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/api/customers/")
      .then((res) => res.json())
      .then((Data) => {
        setData(Data);
      });
  }, []);
  return (
    <div>
      <Table dataSource={Data} columns={columns} />;
    </div>
  );
};
export default CustomerSegmentation;
