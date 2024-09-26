import { Row, Col, Statistic, Button } from "antd";
import CountUp from "react-countup";
import { useState } from "react"; // Import useState để quản lý trạng thái
import "./style.scss";
import EditTaskModal from "../../components/Task/EditTask";
import ResetPasswordModal from "../../components/ForgotPassword/ReserPassword";

const formatter = (value) => <CountUp end={value} separator="," />;

function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisiblePass, setIsModalVisiblePass] = useState(false);
  const [taskData, setTaskData] = useState({
    id: 1,
    title: "Test Task",
    description: "This is a test task description.",
    status: "ongoing",
    createdBy: "User1",
    timeStart: new Date().toISOString(),
    timeFinish: new Date(
      new Date().setDate(new Date().getDate() + 7)
    ).toISOString(),
  });

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleModalClose = () => {
    setIsModalVisible(false);
  };

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
        <Button onClick={showModal}>Edit Task</Button>

        <EditTaskModal
          visible={isModalVisible}
          onClose={handleModalClose}
          task={taskData} // Gửi dữ liệu giả định vào modal
          onEdit={(editedTask) => {
            console.log("Edited Task: ", editedTask);
            // Cập nhật taskData nếu cần thiết
            handleModalClose();
          }}
        />
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
