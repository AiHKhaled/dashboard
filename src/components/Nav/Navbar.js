import React from "react";
import ReactDOM from "react-dom";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  SlidersFilled,
  PieChartFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const Sider = () => {
  const [openKeys, setOpenKeys] = React.useState([]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ paddingLeft: "20px", height: "100vh", width: 240 }}
    >
      <Link primary="Goals" to="/Goals">
        <SubMenu
          style={{ fontSize: "15px" }}
          key="sub1"
          icon={<SlidersFilled style={{ fontSize: "30px" }} />}
          title="Goals"
        >
          <Link primary="setup" to="/SetUp">
            <SubMenu key="sub3" title="SubGoals">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </Link>
          <Menu.Item key="1">KPI</Menu.Item>
        </SubMenu>
      </Link>
      <SubMenu
        key="sub2"
        icon={<AppstoreOutlined style={{ fontSize: "30px" }} />}
        title="Segmentation"
      >
        <Menu.Item key="5">Customers</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub4"
        icon={<PieChartFilled style={{ fontSize: "30px" }} />}
        title="Dashboard"
      >
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default Sider;
