import React from 'react';
import { Tabs } from 'antd';
import "./TaskDetail.scss"
import ProjectContent from "./indexDetail"

function TaskDetail() {
  const items = [
    {
      key: '1',
      label: 'Part 1',
      children: (
        <div
          style={{
            width: '100%',
            height: '100vh',
            textAlign: 'center',
            background: 'rgba(0,255,0,0.02)',
          }}
        >
          <ProjectContent/>
        </div>
      ),
    },
    {
      key: '2',
      label: 'Part 2',
      children: (
        <div
          style={{
            width: '100%',
            height: '100vh',
            textAlign: 'center',
            background: 'rgba(0,0,255,0.02)',
          }}
        >
          Content of Part 2
        </div>
      ),
    },
    {
      key: '3',
      label: 'Part 3',
      children: (
        <div
          style={{
            width: '100%',
            height: '100vh',
            textAlign: 'center',
            background: '#FFFBE9',
          }}
        >
          Content of Part 3
        </div>
      ),
    },
  ];

  return (
    <>
      <div>
        <div className='box1'>
          <p>Project Name:</p>
          <p>Status</p>
        </div>
        <div className='box2'>
          <p>Description:</p>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        <div className='box3'>
          <p>Role:</p>
          <p>Deadline:</p>
        </div>

        <div style={{ padding: '20px' }}>
          <Tabs items={items} />
        </div>
      </div>
    </>
  );
}

export default TaskDetail;
