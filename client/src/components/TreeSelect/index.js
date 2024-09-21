import React, { useState } from 'react';
import { TreeSelect } from 'antd';
import { FaDotCircle } from "react-icons/fa";

const treeData = [
  {
    value: 'role',
    title: 'Role',
    children: [
      {
        value: 'role1',
        title: 'Leader',
      },
      {
        value: 'role2',
        title: 'Member',
      },
    ],
  },
  {
    value: 'status',
    title: 'Status',
    children: [
      {
        value: 'status0',
        title: (
          <span>
            <FaDotCircle style={{ marginRight: 8 , color:'blue'}} />
            Initial
          </span>
        ),
      },
      {
        value: 'status1',
        title: <span>
        <FaDotCircle style={{ marginRight: 8, color:'origin' }} />
        Doing
      </span>
      },
      {
        value: 'status2',
        title: <span>
        <FaDotCircle style={{ marginRight: 8, color:'yellow' }} />
        Pending
      </span>
      },
      {
        value: 'status3',
        title: <span>
        <FaDotCircle style={{ marginRight: 8, color:'green' }} />
        Finished
      </span>
      },
      {
        value: 'status4',
        title: <span>
        <FaDotCircle style={{ marginRight: 8, color:'red' }} />
        Not finished
      </span>
      },
      
    ],
  },
];

const App = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 500,
        overflow: 'auto',
      }}
      treeData={treeData}
      placeholder="Please select"
      treeDefaultExpandAll
      onChange={onChange}
    />
  );
};

export default App;
