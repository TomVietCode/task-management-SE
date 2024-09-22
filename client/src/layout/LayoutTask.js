import React from "react";
import { Row, Col, Tag, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import { MoreOutlined } from "@ant-design/icons";
import MenuDropdown from "../components/MenuDropDown";
import "./LayoutTask.scss";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md";

const LayoutTask = ({data}) => {
  // Dữ liệu mẫu cho bảng
  const dataTask = data;
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
    {
      key: "1",
      label: (
        <span>
          <MdOutlineRemoveRedEye style={{ marginRight: 8 }} />
          View
        </span>
      ),
    },
    {
      key: "2",
      label: (
        <span>
          <CiEdit style={{ marginRight: 8 }} />
          Edit
        </span>
      ),
    },
    {
      key: "3",
      label: (
        <span>
          <MdDeleteOutline style={{ marginRight: 8 }} />
          Delete
        </span>
      ),
    },
  ];
  //lấy trang dropdown
  const navigate = useNavigate(); // Hook để điều hướng

  const handleMenuSelect = (e) => {
    if (e.key === "1") {
      navigate("/TaskDetail"); // Điều hướng đến trang /TaskDetail
    }
  };

  // Hàm để render mỗi hàng dữ liệu
  const renderRow = (record) => (
    <>
      <Row
        className="Row"
        key={record.key}
        gutter={[16, 16]}
        style={{ padding: "10px 0",border: "none"}}
      >
        <Col xs={3} sm={2} md={1} lg={1} xl={1} xxl={1}>
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
        <Col
          xs={6}
          sm={4}
          md={3}
          lg={3}
          xl={3}
          xxl={3}
          style={{ textAlign: "center" }}
        >
          <Tag color={getStatusColor(record.status)}>{record.status}</Tag>
        </Col>
        <Col xs={2} sm={2} md={1} lg={1} xl={1} xxl={1}>
          <MenuDropdown
            items={MenuItems}
            getSelection={handleMenuSelect}
            triggerElement={
              <span style={{ border: "none" }}>
                <MoreOutlined />
              </span>
            }
          />
        </Col>
      </Row>
    </>
  );

  return (
    <div style={{ padding: "20px" }}>
      <Row
        className="title-row" 
        gutter={[16, 16]}
        style={{ fontWeight: "bold", paddingBottom: "10px" }}
      >
        <Col xs={3} sm={2} md={1} lg={1} xl={1} xxl={1}>
          <Checkbox></Checkbox>
        </Col>
        <Col xs={12} sm={10} md={7} lg={7} xl={7} xxl={7}>
          <p>Project</p>
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
          <p>Tasks</p>
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
          <p>Role</p>
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
          <p>Creation Date</p>
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
          <p>Deadline</p>
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
          <p>Status</p>
        </Col>
        <Col xs={2} sm={2} md={1} lg={1} xl={1} xxl={1}></Col>
      </Row>

      {dataTask.map((record) => renderRow(record))}
    </div>
  );
};

export default LayoutTask;
