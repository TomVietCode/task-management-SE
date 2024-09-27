import { Row, Col, Statistic, Button } from "antd";
import CountUp from "react-countup";
import { useState } from "react"; // Import useState để quản lý trạng thái
import "./style.scss";
import EditTaskModal from "../../components/Task/EditTask";
import ResetPasswordModal from "../../components/ForgotPassword/ReserPassword";

const formatter = (value) => <CountUp end={value} separator="," />;

function Home() {
  const [isModalVisiblePass, setIsModalVisiblePass] = useState(false);

  const showModalPass = () => {
    setIsModalVisiblePass(true);
  };
  const handleClose = () => {
    setIsModalVisiblePass(false); // Đóng modal
  };

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
      <div>
        <Button type="primary" onClick={showModalPass}>
          Reset Password
        </Button>
        <ResetPasswordModal
          visible={isModalVisiblePass}
          onClose={handleClose}
        />
      </div>
    </>
  );
}

export default Home;
