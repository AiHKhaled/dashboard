import React from "react";
import CheckOut from "../components/CheckOut";

import StepsS from "../components/Steps";
import KPITable from "../components/KPITable";
import Tabletrial from "../components/Tabletrial";
import { Divider } from "antd";

const KPI = () => {
  return (
    <div>
      {/* <StepsS /> */}
      <Divider />
      {/* <Tabletrial />
       */}
      <KPITable />
    </div>
  );
};

export default KPI;
