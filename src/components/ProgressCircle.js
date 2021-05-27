import { Progress } from "antd";
import "antd/dist/antd.css";

const ProgressCircle = () => (
  <>
    <Progress
      strokeColor={{
        from: "#108ee9",
        to: "#87d068",
      }}
      percent={80}
      status="active"
    />
  </>
);

export default ProgressCircle;
