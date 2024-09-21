import React, { useState } from "react";
import { Row, Col, Progress, Tag, Button, Input, Checkbox } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import MenuDropdown from "../MenuDropDown";
import "./style.scss";
const ProjectContent = () => {
  // Dữ liệu mẫu cho bảng
  const data = [
    {
      key: "1",
      project: "Project A",
      tasks: 10,
      role: "Member",
      timeStart: "21-12-2022",
      deadline: "22-22-2022",
      status: "Initial",
    },
    {
      key: "2",
      project: "Project B",
      tasks: 7,
      role: "Leader",
      timeStart: "21-12-2022",
      deadline: "22-12-2022",
      status: "Doing",
    },
    {
      key: "3",
      project: "Project C",
      tasks: 5,
      role: "Member",
      timeStart: "21-12-2022",
      deadline: "22-12-2022",
      status: "Doing",
    },
    {
      key: "4",
      project: "Project D",
      tasks: 12,
      role: "Member",
      timeStart: "21-12-2022",
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
    <Row
      className="Row"
      key={record.key}
      gutter={[16, 16]}
      style={{ padding: "10px 0", borderBottom: "1px solid #f0f0f0" }}
    >
      <Col xs={4} sm={3} md={2} lg={2} xl={2} xxl={2}>
        <Checkbox></Checkbox>
      </Col>
      <Col xs={12} sm={10} md={7} lg={7} xl={7} xxl={7}>
        {record.project}
      </Col>
      <Col
        xs={4}
        sm={3}
        md={2}
        lg={2}
        xl={2}
        xxl={2}
        style={{ textAlign: "center" }}
      >
        {record.tasks}
      </Col>
      <Col
        xs={6}
        sm={4}
        md={3}
        lg={3}
        xl={3}
        xxl={3}
        style={{ textAlign: "center" }}
      >
        <Tag color={getRoleColor(record.role)}>{record.role}</Tag>
      </Col>
      <Col
        xs={6}
        sm={4}
        md={3}
        lg={3}
        xl={3}
        xxl={3}
        style={{ textAlign: "center" }}
      >
        {record.timeStart}
      </Col>
      <Col
        xs={6}
        sm={4}
        md={3}
        lg={3}
        xl={3}
        xxl={3}
        style={{ textAlign: "center" }}
      >
        {record.deadline}
      </Col>
      <Col xs={6} sm={4} md={3} lg={3} xl={3} xxl={3}>
        <Tag color={getStatusColor(record.status)}>{record.status}</Tag>
      </Col>
      <Col xs={2} sm={2} md={1} lg={1} xl={1} xxl={1}>
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
        <Col xs={4} sm={3} md={2} lg={2} xl={2} xxl={2}>
          <Checkbox></Checkbox>
        </Col>
        <Col xs={12} sm={10} md={7} lg={7} xl={7} xxl={7}>
          Project
        </Col>
        <Col
          xs={4}
          sm={3}
          md={2}
          lg={2}
          xl={2}
          xxl={2}
          style={{ textAlign: "center" }}
        >
          Tasks
        </Col>
        <Col
          xs={6}
          sm={4}
          md={3}
          lg={3}
          xl={3}
          xxl={3}
          style={{ textAlign: "center" }}
        >
          Role
        </Col>
        <Col
          xs={6}
          sm={4}
          md={3}
          lg={3}
          xl={3}
          xxl={3}
          style={{ textAlign: "center" }}
        >
          Creation Date
        </Col>
        <Col
          xs={6}
          sm={4}
          md={3}
          lg={3}
          xl={3}
          xxl={3}
          style={{ textAlign: "center" }}
        >
          Deadline
        </Col>
        <Col xs={6} sm={4} md={3} lg={3} xl={3} xxl={3}>
          Status
        </Col>
        <Col xs={2} sm={2} md={1} lg={1} xl={1} xxl={1}></Col>
      </Row>

      {data.map((record) => renderRow(record))}
    </div>
  );
};

export default ProjectContent;
  