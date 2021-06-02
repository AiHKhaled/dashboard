import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import React from "react";
import { Progress } from "antd";

const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    href: "https://ant.design",
    title: `KPI ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description: "this is a KPI",
    content: "we usually use it to do this and that",
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const KPI = () => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={listData}
      /* footer={
        <div>
          <b>ant design</b> footer part
        </div>
      } */
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[]}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
          <div style={{ marginLeft: "auto", marginTop: "-1%", width: "30%" }}>
            <Progress
              strokeColor={{
                from: "#108ee9",
                to: "#87d068",
              }}
              percent={80}
              status="active"
            />
          </div>
        </List.Item>
      )}
    />
  );
};

export default KPI;
