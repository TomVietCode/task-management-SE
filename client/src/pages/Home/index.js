import { Row, Col, Statistic } from "antd";
import CountUp from "react-countup";
import "./style.scss";
import IsEmpty from "../../components/Empty"

const formatter = (value) => <CountUp end={value} separator="," />;
function Home() {

  return (
    <>
      <div className="ContainerHome">
        <Row className="ContainerHome__Table" gutter={[30, 20]}>
          <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
            <div className="ContainerHome__Table__Col">
              <Statistic
                title="Published Project"
                value={112893}
                precision={2}
                formatter={formatter}
              />
            </div>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
            <div className="ContainerHome__Table__Col">
              <Statistic
                title="Completed Task"
                value={112893}
                precision={2}
                formatter={formatter}
              />
            </div>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
            <div className="ContainerHome__Table__Col">
              <Statistic
                title="Successful Task"
                value={112893}
                precision={2}
                formatter={formatter}
              />
            </div>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
            <div className="ContainerHome__Table__Col">
              <Statistic
                title="Ongoing Project"
                value={112893}
                precision={2}
                formatter={formatter}
              />
            </div>
          </Col>
        </Row>
      </div>
      <IsEmpty/>
    </>
  );
}

export default Home;
