import { Table, Button, Space, Tag } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import CollectionsPage from "../components/MakeKPI";
const data = [
  {
    key: "1",
    name: ["first kpi"],
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

class KPITable extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: "key",
      },
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        filters: [
          { text: "nic", value: "Joe" },
          { text: "Jim", value: "Jim" },
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: "description",
        dataIndex: "description",
        key: "description",
      },
      /* {
        title: "Address",
        dataIndex: "address",
        key: "address",
        filters: [
          { text: "London", value: "London" },
          { text: "New York", value: "New York" },
        ],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === "address" && sortedInfo.order,
        ellipsis: true,
      }, */
      {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        render: (tags) => (
          <>
            {tags.map((tag) => {
              let color = tag.length > 5 ? "geekblue" : "green";
              if (tag === "loser") {
                color = "volcano";
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),

        filters: [
          { text: "nice", value: "nice" },
          { text: "cool", value: "cool" },
        ],
        filteredValue: filteredInfo.tags || null,
        onFilter: (value, record) => record.tags.includes(value),
        sorter: (a, b) => a.tags.length - b.tags.length,
        sortOrder: sortedInfo.columnKey === "tags" && sortedInfo.order,
        ellipsis: true,
      },
    ];
    return (
      <>
        <Space style={{ marginBottom: 16 }}>
          <Button onClick={this.setAgeSort}>Sort age</Button>
          <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>

          <CollectionsPage />
        </Space>
        <Table
          columns={columns}
          dataSource={data}
          onChange={this.handleChange}
        />
      </>
    );
  }
}

export default KPITable;
