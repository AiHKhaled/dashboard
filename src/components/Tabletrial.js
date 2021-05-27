import { Table, Tag, Space } from "antd";
import React, { useContext, useState, useEffect, useRef } from "react";

const { Column, ColumnGroup } = Table;

export default function Tabletrial() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/KPIs/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <Table dataSource={data}>
      <>
        <Column title="id" dataIndex="id" key="id" />

        <Column title="name" dataIndex="name" key="name" />
        <Column title="description" dataIndex="description" key="description" />
      </>

      {/* <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        render={(tags) => (
          <>
            {tags.map((tag) => (
              <Tag color="blue" key={tag}>
                {tag}
              </Tag>
            ))}
          </>
        )}
      />
 */}
      <Column
        title="Action"
        key="action"
        render={(data) => (
          <Space size="middle">
            <a>Add {data.name} to </a>
            <a>Delete</a>
          </Space>
        )}
      />
    </Table>
  );
}
