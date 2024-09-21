import { Row, Col, Button, theme, Space, Input, Modal, DatePicker } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import ModalTreeSelect from "../../components/TreeSelect"; // Đảm bảo import đúng
import "../../pages/Home/style.scss"

function ActionBar({
  onSearch,
  collapsed,
  setCollapsed,
  openModal,
  isModalOpen,
  cancelCloseModal,
  OkCloseModal,
  projectName,
  setProjectName,
  description,
  setDescription,
}) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <header
        className="home__header"
        style={{
          background: colorBgContainer,
        }}
      >
        <Row justify="space-between" align="middle" gutter={[16, 16]}>
          <Col>
            <div className="box-home__toggle-button">
              <Button
                className="home__toggle-button"
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)} // Đóng mở menu
              />
            </div>
          </Col>

          <Col flex="auto">
            <div className="box-search">
              <Input.Search
                placeholder="search project"
                enterButton
                size="large"
                allowClear
                onSearch={onSearch}
              />
            </div>
          </Col>

          <Col>
            <div className="box-NewProject">
              <Space size="middle">
                <Button size="large" type="primary" onClick={openModal}>
                  <PlusOutlined />
                  Create Project
                </Button>
              </Space>
            </div>
          </Col>
        </Row>
      </header>

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
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="login__form-group-input form-control"
            />
          </div>

          <div>
            <p>Description</p>
            <Input.TextArea
              name="description"
              placeholder="Enter project description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="login__form-group-input form-control"
              rows={4}
            />
          </div>

          <div>
            <p>Label</p>
            <ModalTreeSelect />
          </div>

          <div>
            <p>Due Date</p>
            <DatePicker placeholder="Select due date" />
          </div>
        </Space>
      </Modal>
    </>
  );
}

export default ActionBar;
