import React from 'react';
import { Breadcrumb } from 'antd';
import Home from "../../pages/Home"


const App = () => (
  <Breadcrumb
    items={[
      {
        title: <a href="Home">Home</a>,
      },
      {
        title: <a href="">Application List</a>,
      },
      {
        title: 'An Application',
      },
    ]}
  />
);
export default App;