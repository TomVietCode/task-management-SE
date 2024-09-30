import React, { useEffect, useState } from "react"
import {
  UploadOutlined,
  HomeOutlined,
  ProfileOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons"
import { Layout, Menu, Button } from "antd"

import { Outlet, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import "./style.scss"
import Profile from "../components/UserPage"
import { getCookie } from "../helpers/cookie"
import { get } from "../utils/request"

const { Sider } = Layout

function MenuLayout() {
  const token = getCookie("tokenUser")
  const [profileData, setProfileData] = useState({})
  const [collapsed, setCollapsed] = useState(false)
  const [showProfile, setShowProfile] = useState(false) // An đã thêm dòng code này

  const navigate = useNavigate()

  const hanldeGetMenuPage = (e) => {
    if (e.key === "1") {
      navigate("/")
    } else if (e.key === "2") {
      navigate("/task")
    } else if (e.key === "0") {
      setShowProfile(true) //An đã thêm dòng code này
    }
  }

  useEffect(() => {
    const fetchApi = async () => {
      const result = await get(token, "user/detail")
      setProfileData(result.info)
    }
    fetchApi()
  }, [])

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
            <div className="home__logo"></div>
            <Menu
              onClick={hanldeGetMenuPage}
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "0",
                  icon: <UserOutlined />,
                  label: profileData.fullname,
                },
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
              ]}
            />
            <Profile visible={showProfile} setVisible={setShowProfile} profileData={profileData}/>
          </Sider>
          <Layout>
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
  )
}

export default MenuLayout
