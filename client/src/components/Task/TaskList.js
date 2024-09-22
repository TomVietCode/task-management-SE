import { Row, Col, Tag, Checkbox } from "antd"
import moment from "moment"
import MenuDropdown from "../../components/MenuDropDown"
import { MoreOutlined } from "@ant-design/icons"
import { CiEdit } from "react-icons/ci"
import { MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md"

function TaskList(props) {
  const { data, token, changeStatus } = props

  // Hàm trả về màu của trạng thái
  const getStatusColor = (status) => {
    return status === "finish"
      ? "green"
      : status === "pending"
      ? "volcano"
      : status === "initial"
      ? "blue"
      : status === "doing"
      ? "orange"
      : status === "notFinish"
      ? "red"
      : "gray"
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
      label: (
        <span>
          <MdDeleteOutline style={{ marginRight: 8 }} />
          Delete
        </span>
      ),
    },
  ]

  const renderRow = (record) => (
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
        <Tag color={record.createdBy === token ? "red" : "green"}>
          {record.createdBy === token ? "Leader" : "Member"}
        </Tag>
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
        <Tag
          style={{ cursor: "pointer", userSelect: "none" }}
          color={getStatusColor(record.status)}
          onClick={() => changeStatus(record)}
        >
          {record.status}
        </Tag>
      </Col>
      <Col xs={2} sm={2} md={1} lg={1} xl={1} xxl={1}>
        <MenuDropdown
          items={MenuItems}
          triggerElement={
            <span style={{ border: "none" }}>
              <MoreOutlined />
            </span>
          }
          // getSelection={handleClickAction}
        />
      </Col>
    </Row>
  )
  
  return (
    <>
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
      </Row>
      {data.taskList && data.taskList.map((record) => renderRow(record))}
    </>
  )
}

export default TaskList
