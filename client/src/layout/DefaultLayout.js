import React, { useState } from "react";
import {
  UploadOutlined,
  HomeOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  theme,
} from "antd";
import "./DefaultLayout.scss";

import ProjectContent from "../components/Task";
import PageNumber from "../components/PageNumber";
import ActionBar from "../components/ActionBar";
const { Sider, Content } = Layout;

function DefaultLayout () {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
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
            collapsed = {collapsed}
            setCollapsed = {setCollapsed}
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
    </>
  )
}

export default DefaultLayout;