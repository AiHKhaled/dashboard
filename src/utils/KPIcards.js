import { Card, Col, Row } from "antd";
import kpiData from "../KPI/kpiData";

const KPIcard = (props) => {
  //this.props.cards.map((kpi) => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={8}>
        <Col
          style={{
            padding: " 0.75rem 0.75rem 0.5rem 0.75rem",
          }}
          span={8}
        >
          <Card
            style={{ width: 240 }}
            hoverable
            title="yes"
            bordered={false}
          ></Card>
        </Col>

        <Col span={8}>
          <Card title="second kpi" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  );
  // });
};
export default KPIcard;
