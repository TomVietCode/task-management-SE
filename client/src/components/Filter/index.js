import React from 'react';
import { FaDotCircle } from "react-icons/fa";
import TreeSelectComponent from '../TreeSelect';

const data = [
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
            <FaDotCircle style={{ marginRight: 8, color: 'blue' }} />
            Initial
          </span>
        ),
      },
      {
        value: 'status1',
        title: (
          <span>
            <FaDotCircle style={{ marginRight: 8, color: 'orange' }} />
            Doing
          </span>
        ),
      },
      {
        value: 'status2',
        title: (
          <span>
            <FaDotCircle style={{ marginRight: 8, color: 'yellow' }} />
            Pending
          </span>
        ),
      },
      {
        value: 'status3',
        title: (
          <span>
            <FaDotCircle style={{ marginRight: 8, color: 'green' }} />
            Finished
          </span>
        ),
      },
      {
        value: 'status4',
        title: (
          <span>
            <FaDotCircle style={{ marginRight: 8, color: 'red' }} />
            Not finished
          </span>
        ),
      },
    ],
  },
];

const Filter = () => {
  return (
    <>
      <TreeSelectComponent style={{with : "300px"}} data={data} />
    </>
  );
};

export default Filter;
