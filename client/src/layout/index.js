import React, { useState } from "react";
import {
  UploadOutlined,
  HomeOutlined,
  ProfileOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";


import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import './style.scss'


const { Sider } = Layout;



function MenuLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();

  const hanldeGetMenuPage = (e)=>{
    if(e.key==='1'){
      navigate('/')
    }else if(e.key === '2'){
      navigate('/task')
    }else if (e.key === '3'){
      navigate('/task/detail')
    }
  }

  
  return (
    <>
      <Layout className="box_container">
        <Layout className="home">
          <div className="box-home__toggle-button">
            <Button
              className="home__toggle-button"
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{ left: collapsed ? "80px" : "200px" }}
            />
          </div>
          <Sider
            className="home__sider"
            trigger={null}
            collapsible
            collapsed={collapsed}
          >
            <div className="home__logo" />
            <Menu
              onClick={hanldeGetMenuPage}
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
          <Layout >
            <div className="ActionBar">
              <Header /> 
            </div>
            <div className="Outlet">
              <Outlet />
            </div>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default MenuLayout;
