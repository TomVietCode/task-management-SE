import React, { useState } from "react";
import { Row, Col, Progress, Tag, Button, Input,Checkbox  } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import MenuDropdown from "../MenuDropDown";

const ProjectContent = () => {
  // Dữ liệu mẫu cho bảng
  const data = [
    {
      key: "1",
      project: "Project A",
      tasks: 10,
      role: "Member",
      timeStart:"21-12-2022",
      deadline: "22-22-2022",
      status: "Initial",
    },
    {
      key: "2",
      project: "Project B",
      tasks: 7,
      role: "Leader",
      timeStart:"21-12-2022",
      deadline: "22-12-2022",
      status: "Doing",
    },
    {
      key: "3",
      project: "Project C",
      tasks: 5,
      role: "Member",
      timeStart:"21-12-2022",
      deadline: "22-12-2022",
      status: "Doing",
    },
    {
      key: "4",
      project: "Project D",
      tasks: 12,
      role: "Member",
      timeStart:"21-12-2022",
      deadline: "22-12-2022",
      status: "Not finished",
    },
  ];
  const getStatusColor = (status) => {
    return status === "Finished"
      ? "green"
      : status === "Pending"
      ? "volcano"
      : status === "Initial"
      ? "blue"
      : status === "Doing"
      ? "orange"
      : status === "Not finished"
      ? "red"
      : "gray";
  };
  const getRoleColor = (role) => {
    return role === "Leader" ? "red" : role === "Member" ? "green" : "gray";
  };
  // Các item cho dropdown
 

  const MenuItems = [
    { key: "1", label: "View" },
    { key: "2", label: "Edit" },
    { key: "3", label: "Delete" },
  ];
  // Hàm để render mỗi hàng dữ liệu
  const renderRow = (record) => (
    <Row className="Row"
      key={record.key}
      gutter={[16, 16]}
      style={{ padding: "10px 0", borderBottom: "1px solid #f0f0f0" }}
    >
      <Col span={2}><Checkbox></Checkbox></Col>
      <Col span={7}>{record.project}</Col>
      <Col style={{ textAlign: "center" }} span={2}>
        {record.tasks}
      </Col>
      <Col style={{ textAlign: "center" }} span={3}>
        <Tag color={getRoleColor(record.role)}>{record.role}</Tag>
      </Col>
      <Col style={{ textAlign: "center" }} span={3}>
        {record.timeStart}
      </Col>
      <Col style={{ textAlign: "center" }} span={3}>
        {record.deadline}
      </Col>
      <Col span={3}>
        <Tag color={getStatusColor(record.status)}>{record.status}</Tag>
      </Col>
      <Col span={1}>
        <MenuDropdown
          items={MenuItems}
          triggerElement={
            <span style={{ border: "none" }}>
              <MoreOutlined />
            </span>
          }
        />
      </Col>
    </Row>
  );

  return (
    <div style={{ padding: "20px" }}>
      <Row
        gutter={[16, 16]}
        style={{ fontWeight: "bold", paddingBottom: "10px" }}
      >
        <Col span={2}><Checkbox ></Checkbox></Col>
        <Col span={7}>Project</Col>
        <Col style={{ textAlign: "center" }} span={2}>
          Tasks
        </Col>
        <Col style={{ textAlign: "center" }} span={3}>
          Role
        </Col>
        <Col style={{ textAlign: "center" }} span={3}>Creation Date</Col>
        <Col style={{ textAlign: "center" }} span={3}>Deadline</Col>
        <Col span={3}>Status</Col>
        <Col span={1}></Col>
      </Row>

      {data.map((record) => renderRow(record))}
    </div>
  );
};

export default ProjectContent;
