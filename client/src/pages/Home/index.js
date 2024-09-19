import React, { useState } from 'react';
import { Layout, Button, Menu, theme } from 'antd';
import Grid from '../ContentGrid';
import Sidebar from '../Sidebar'
const { Header, Sider, Content } = Layout;

function Home(){
  return (
    <>  
      <Layout>
        <Sider>
          <Sidebar/>
        </Sider>
        <Content siderBg="red">
          <Grid/>
        </Content>
        
      </Layout>

    </>
  );
};

export default Home;
