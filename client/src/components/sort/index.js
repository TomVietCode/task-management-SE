import React from 'react';
import TreeSelectComponent from '../TreeSelect';

const data = [
  {
    value: 'Deadline',
    title: 'Deadline',
  },
  {
    value: 'status',
    title: 'Status',
  },
];

const Sort = () => {
  
  return (
    <>
       <TreeSelectComponent data={data} />
    </>
  );
};

export default Sort;
