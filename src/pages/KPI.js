import React from "react";
import CheckOut from "../components/CheckOut";

import StepsS from "../components/Steps";
import KPITable from "../KPI/KPITable";
import Tabletrial from "../components/Tabletrial";
//import App from "../trial/TableF";
import { Divider } from "antd";
import CustomerSegmentation from "../Customers/CustomerSegmentation";

const KPI = () => {
  return (
    <div>
      {/* <StepsS /> */}
      <Divider />
      {/* <Tabletrial />
       */}
      <KPITable />
      <CustomerSegmentation />
    </div>
  );
};

export default KPI;
