import React, { useState } from 'react';
import { Layout, Button, Menu, theme } from 'antd';
import ContentGrid from "../../components/ContentGrid"
import Sidebar from "../../components/Sidebar"
const { Header, Sider, Content } = Layout;

function Home(){
  return (
    <>  
      <Layout>
        <Sider>
          <Sidebar/>
        </Sider>
        <Content siderBg="red">
          <ContentGrid/>
        </Content>
        
      </Layout>

    </>
  );
};

export default Home;
