import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  HomeOutlined,
  ProfileOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Button,
  Input,
  Row,
  Col,
  Space,
  Layout,
  Menu,
  theme,
  Modal,
  notification,
  DatePicker,
} from "antd";
import "./style.scss";
import ModalTreeSelect from "../../components/TreeSelect";
import ProjectContent from "../../components/Content";
import PageNumber from "../../components/PageNumber";
import ActionBar from "../../components/ActionBar"
const { Header, Sider, Content } = Layout;
const { Search } = Input;

function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Hàm xử lý tìm kiếm
  const onSearch = (value) => console.log(value);
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
      <Layout className="home">
        <Sider
          className="home__sider"
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="home__logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <HomeOutlined />,
                label: "Home",
              },
              {
                key: "2",
                icon: <ProfileOutlined />,
                label: "Project",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          />
        </Sider>
        <Layout>
        <ActionBar
            onSearch={onSearch}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            openModal={openModal}
            isModalOpen={isModalOpen}
            cancelCloseModal={cancelCloseModal}
            OkCloseModal={OkCloseModal}
            // projectName={projectName}
            // setProjectName={setProjectName}
            // description={description}
            // setDescription={setDescription}
          />
          <Content
            className="home__content"
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <ProjectContent />
            <div className="PageNumber">
              <PageNumber />
            </div>
          </Content>
        </Layout>
      </Layout>
      {/* <Modal
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
          <div>
            <p>Label</p>
            <ModalTreeSelect />
          </div>

          <div>
            <p>Due Date</p>
            <DatePicker placeholder="Select due date" />
          </div>
        </Space>
      </Modal> */}
    </>
  );
}

export default Home;
