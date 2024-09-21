import React, { useState } from "react";
import { TreeSelect } from "antd";
const { SHOW_PARENT } = TreeSelect;
// data TreeSelect
const treeData = [
  {
    title: "Web",
    value: "1",
  },
  {
    title: "mobile app",
    value: "2",
  },
];


function ModalTreeSelect() {
  const [value, setValue] = useState([]);

  // Hàm xử lý thay đổi giá trị khi người dùng chọn trong TreeSelect
  const onChange = (newValue) => {
    console.log("onChange", newValue);
    setValue(newValue);
  };

  // Các thuộc tính của TreeSelect
  const tProps = {
    treeData, 
    value, 
    onChange, 
    treeCheckable: true, 
    showCheckedStrategy: SHOW_PARENT, 
    placeholder: "Please select",
    style: {
      width: "100%",
    },
  };

  return <TreeSelect {...tProps} />;
}

export default ModalTreeSelect;
