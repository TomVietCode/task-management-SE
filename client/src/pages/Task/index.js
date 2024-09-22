import React from "react";
import "./style.scss";

import LayoutTask from "../../layout/LayoutTask";
import ActionBar from "../../components/ActionBar";
import PageNumber from "../../components/PageNumber";

const ProjectContent = () => {
  const data = [
import { useEffect, useState } from "react"
import { Row, Col, Progress, Tag, Button, Input, Checkbox } from "antd"
import { MoreOutlined } from "@ant-design/icons"
import MenuDropdown from "../../components/MenuDropDown"
import "./style.scss"
import { CiEdit } from "react-icons/ci"
import { MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md"
import { getTaskList } from "../../services/TaskService"
import { getCookie } from "../../helpers/cookie"
import moment from "moment"

const Task = () => {
  // Dữ liệu mẫu cho bảng
  const token = getCookie("tokenUser")
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getTaskList(token)
      setData(result)
    }
    fetchApi()
  }, [])

  const getStatusColor = (status) => {
    return status === "finished"
      ? "green"
      : status === "pending"
      ? "volcano"
      : status === "initial"
      ? "blue"
      : status === "doing"
      ? "orange"
      : status === "notFinished"
      ? "red"
      : "gray"
  }
  const getRoleColor = (createdBy) => {
    return {
      color: createdBy === token ? "red" : "green",
      role: createdBy === token ? "Leader" : "Member"
    }
  }
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
      project: "Project C",
      tasks: 5,
      role: "Member",
      timeStart: "21-12-2022",
      deadline: "22-12-2022",
      status: "Doing",
    },
    {
      key: "4",
      project: "Project DE",
      tasks: 12,
      role: "Member",
      timeStart: "21-12-2022",
      deadline: "22-12-2022",
      status: "Not finished",
    },
  ];

      label: (
        <span>
          <MdDeleteOutline style={{ marginRight: 8 }} />
          Delete
        </span>
      ),
    },
  ]

  // Hàm để render mỗi hàng dữ liệu
  const renderRow = (record) => (
    <>
      <Row
        className="Row"
        key={record._id}
        gutter={[16, 16]}
        style={{ padding: "10px 0", borderBottom: "1px solid #f0f0f0" }}
      >
        <Col xs={3} sm={2} md={1} lg={1} xl={1} xxl={1}>
          <Checkbox></Checkbox>
        </Col>
        <Col xs={12} sm={10} md={7} lg={7} xl={7} xxl={7}>
          {record.title}
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
          {5}
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
          <Tag color={getRoleColor(record.createdBy).color}>{getRoleColor(record.createdBy).role}</Tag>
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
          {moment(record.timeStart).format("DD-MM-YYYY HH:mm")}
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
          {moment(record.timeFinish).format("DD-MM-YYYY")}
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
            triggerElement={
              <span style={{ border: "none" }}>
                <MoreOutlined />
              </span>
            }
          />
        </Col>
      </Row>
    </>
  )

  return (
    <div className="project-content">
      <div className="action-bar">
        <ActionBar />
      </div>
      <div className="layout-task">
        <LayoutTask data={data} />
      </div>
      <div className="page-number">
        <PageNumber />
      </div>
    </div>
  );
};
    <div style={{ padding: "20px" }}>
      <Row
        gutter={[16, 16]}
        style={{ fontWeight: "bold", paddingBottom: "10px" }}
      >
        <Col xs={3} sm={2} md={1} lg={1} xl={1} xxl={1}>
          <Checkbox></Checkbox>
        </Col>
        <Col xs={12} sm={10} md={7} lg={7} xl={7} xxl={7}>
          Task Name
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
          Sub Tasks
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
          Start Time
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
        <Col
          xs={6}
          sm={4}
          md={3}
          lg={3}
          xl={3}
          xxl={3}
          style={{ textAlign: "center" }}
        >
          Status
        </Col>
        <Col xs={2} sm={2} md={1} lg={1} xl={1} xxl={1}></Col>
      </Row>
      {
        (data.taskList) && (data.taskList).map((record) => renderRow(record))
      }
    </div>
  )
}

export default Task