import { notification, Modal, Button, Space, Input, DatePicker, Row, Col} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./style.scss";

function CreateTask() {
  //thêm project
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const cancelCloseModal = () => setIsModalOpen(false);
  const OkCloseModal = () => {
    notification.success({
      message: "Creat project complated!",
      placement: "topLeft",
      duration: 3,
    });
    setIsModalOpen(false);
  };
  return (
    <>
      <Button size="large" type="primary" onClick={openModal}>
        <PlusOutlined />
        Create Project
      </Button>
      <Modal
        className="Modal"
        title="Create New Project"
        open={isModalOpen}
        onOk={OkCloseModal}
        onCancel={cancelCloseModal}
        width={1000}
        footer={[
          <Button key="cancel" onClick={cancelCloseModal}>
            Cancel
          </Button>,
          <Button key="create" type="primary" onClick={OkCloseModal}>
            Create
          </Button>,
        ]}
      >
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <div>
            <p>Project Name</p>
            <Input
              type="text"
              name="projectName"
              placeholder="Enter project name"
              className="login__form-group-input form-control"
            />
          </div>

          <div>
            <p>Description</p>
            <Input.TextArea
              name="description"
              placeholder="Enter project description"
              className="login__form-group-input form-control"
              rows={4}
            />
          </div>

          <Row>
            <Col span={8}>
              <p>Date create</p>
              <DatePicker placeholder="Select due date" />
            </Col>
            <Col span={8}>
              <p>Deadline</p>
              <DatePicker placeholder="Select due date" />
            </Col>
          </Row>
        </Space>
      </Modal>
    </>
  );
}

export default CreateTask;
