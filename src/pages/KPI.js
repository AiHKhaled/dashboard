import React from "react";
import CheckOut from "../components/CheckOut";
import CheckboxLists from "../components/Checkbox";
import Steps from "../components/Steps";
import EditableTable from "../components/KPITable";
import Tabletrial from "../components/Tabletrial";
import { Divider } from "antd";

const KPI = () => {
  return (
    <div>
      <Steps />
      <Divider />
      {/* <Tabletrial /> */}
      <CheckboxLists />
      <EditableTable />
    </div>
  );
};

export default KPI;
