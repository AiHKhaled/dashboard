import React, { useState } from "react";
import { Tree, Switch } from "antd";
import { CarryOutOutlined, FormOutlined } from "@ant-design/icons";
const treeData = [
  {
    title: "behavioral analysis",
    key: "0-0",
    icon: <CarryOutOutlined />,
    children: [
      {
        title: "preferences",
        key: "0-0-0",
        icon: <CarryOutOutlined />,
        children: [
          {
            title: "leaf",
            key: "0-0-0-0",
            icon: <CarryOutOutlined />,
          },
          {
            title: "leaf",
            key: "0-0-0-1",
            icon: <CarryOutOutlined />,
          },
          {
            title: "leaf",
            key: "0-0-0-2",
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        icon: <CarryOutOutlined />,
        children: [
          {
            title: "leaf",
            key: "0-0-1-0",
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        title: "parent 1-2",
        key: "0-0-2",
        icon: <CarryOutOutlined />,
        children: [
          {
            title: "leaf",
            key: "0-0-2-0",
            icon: <CarryOutOutlined />,
          },
          {
            title: "leaf",
            key: "0-0-2-1",
            icon: <CarryOutOutlined />,
            switcherIcon: <FormOutlined />,
          },
        ],
      },
    ],
  },
  {
    title: "parent 2",
    key: "0-1",
    icon: <CarryOutOutlined />,
    children: [
      {
        title: "parent 2-0",
        key: "0-1-0",
        icon: <CarryOutOutlined />,
        children: [
          {
            title: "leaf",
            key: "0-1-0-0",
            icon: <CarryOutOutlined />,
          },
          {
            title: "leaf",
            key: "0-1-0-1",
            icon: <CarryOutOutlined />,
          },
        ],
      },
    ],
  },
];

const TreeView = () => {
  const [showLine, setShowLine] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const [showLeafIcon, setShowLeafIcon] = useState(true);

  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  const onSetLeafIcon = (checked) => {
    setShowLeafIcon(checked);
    setShowLine({
      showLeafIcon: checked,
    });
  };

  const onSetShowLine = (checked) => {
    setShowLine(
      checked
        ? {
            showLeafIcon,
          }
        : false
    );
  };

  return (
    <div>
      <Tree
        showLine={showLine}
        showIcon={showIcon}
        defaultExpandedKeys={["0-0-0"]}
        onSelect={onSelect}
        treeData={treeData}
      />
    </div>
  );
};

export default TreeView;
