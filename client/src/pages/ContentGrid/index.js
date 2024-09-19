import { Col, Row } from "antd";
import "./style.scss";

function Grid() {
  return (
    <>
      <Row gutter={[10, 20]}>
        <Col xxl={2} xl={2} lg={2} sm={2} xs={2}>
          <div className="box">Cột 1</div>
        </Col>
        <Col xxl={4} xl={4} lg={4} sm={2} xs={2}>
          <div className="box">Cột 2</div>
        </Col>
        <Col xxl={8} xl={8} lg={8} sm={2} xs={2}>
          <div className="box">Cột 3</div>
        </Col>
        <Col xxl={10} xl={10} lg={12} sm={2} xs={2}>
          <div className="box">Cột 4</div>
        </Col>
      </Row>
    </>
  );
}

export default Grid;
