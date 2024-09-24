<<<<<<< HEAD
import { useEffect, useState } from "react"
import { notification, Pagination } from "antd"
import "./style.scss"
import { changeStatus, getTaskList } from "../../services/TaskService"
import { getCookie } from "../../helpers/cookie"
import { useSelector } from "react-redux"
import TaskList from "../../components/Task/TaskList"
=======
import { useEffect, useState } from "react";
import { Row, Col, Tag, Checkbox, notification, Pagination } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import MenuDropdown from "../../components/MenuDropDown";
import "./style.scss";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md";
import { changeStatus, getTaskList } from "../../services/TaskService";
import { getCookie } from "../../helpers/cookie";
import moment from "moment";
import { useSelector } from "react-redux";
import ActionBar from "../../components/ActionBar";
>>>>>>> b7b66f3562b9d8ae0831bd36c765bd9674b5a372

const Task = () => {
  // Dữ liệu mẫu cho bảng
  const token = getCookie("tokenUser");
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(true);
  const state = useSelector((state) => state.TaskReducer);

  // Phân trang
<<<<<<< HEAD
  const [currentPage, setCurrentPage] = useState(1) // Trang hiện tại
  const [totalItems, setTotalItems] = useState(0) // Tổng số item từ backend
  const [limitItem, setLimitItem] = useState(0)
=======
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [totalItems, setTotalItems] = useState(0); // Tổng số item từ backend
  const [limitItem, setLimitItem] = useState(0);
>>>>>>> b7b66f3562b9d8ae0831bd36c765bd9674b5a372

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getTaskList(token, currentPage);
      setData(result);
      setTotalItems(result.totalItem);
      setLimitItem(result.limitItem);
    };
    fetchApi();
  }, [reload, state, currentPage]);

<<<<<<< HEAD
=======
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
      : "gray";
  };

  const getRoleColor = (createdBy) => {
    return {
      color: createdBy === token ? "red" : "green",
      role: createdBy === token ? "Leader" : "Member",
    };
  };

>>>>>>> b7b66f3562b9d8ae0831bd36c765bd9674b5a372
  const handleChangeStatus = async (record) => {
    // Logic để thay đổi status, ví dụ chuyển đổi qua các trạng thái
    let newStatus = "";
    switch (record.status) {
      case "initial":
        newStatus = "doing";
        break;
      case "doing":
        newStatus = "finish";
        break;
      case "finish":
        newStatus = "notFinish";
        break;
      case "notFinish":
        newStatus = "pending";
        break;
      case "pending":
        newStatus = "initial";
        break;
      default:
        newStatus = record.status;
    }

    record.status = newStatus;
    setReload(!reload);
    notification.success({
      message: "Change status successfully!",
      placement: "topRight",
      duration: 2,
    });
    const result = await changeStatus(token, `change-status/${record._id}`, {
      status: newStatus,
    });
  };

  const handleChangePage = (page) => {
<<<<<<< HEAD
    setCurrentPage(page)
  }

  return (
    <>
      <div style={{ padding: "20px" }}>
        <TaskList data={data} token={token} changeStatus={handleChangeStatus} />
      </div>

      <Pagination
        className="pagination"
        current={currentPage} // Trang hiện tại
        total={totalItems} // Tổng số item từ backend
        pageSize={limitItem} // Số item trên mỗi trang
        onChange={handleChangePage} // Xử lý khi người dùng đổi trang
      />
=======
    setCurrentPage(page);
  };
  // const handleClickAction = (e) => {
  //   if (e.key === "3") {
  //     console.log(e)
  //   }
  // }
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

  // Hàm để render mỗi hàng dữ liệu
  const renderRow = (record) => (
    <Row
      className="Row"
      key={record._id}
      gutter={[16, 16]}
      style={{ border: "none", paddingBottom: "10px", paddingTop: "10px" }}
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
        <Tag color={getRoleColor(record.createdBy).color}>
          {getRoleColor(record.createdBy).role}
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
          onClick={() => handleChangeStatus(record)}
        >
          {record.status}
        </Tag>
      </Col>
      <Col xs={2} sm={2} md={1} lg={1} xl={1} xxl={1}>
        <MenuDropdown
          items={MenuItems}
          triggerElement={
            <span style={{ border: "none", cursor: "pointer" }}>
              <MoreOutlined />
            </span>
          }
          // getSelection={handleClickAction}
        />
      </Col>
    </Row>
  );

  return (
    <>
      <div style={{padding:"24px"}}>
        <ActionBar />
        <div style={{ paddingTop: "20px", padding: "10px" }}>
          <Row
            className="Title-row"
            gutter={[16, 16]}
            style={{ fontWeight: "bold" }}
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
        </div>

        <Pagination
          className="pagination"
          current={currentPage} // Trang hiện tại
          total={totalItems} // Tổng số item từ backend
          pageSize={limitItem} // Số item trên mỗi trang
          onChange={handleChangePage} // Xử lý khi người dùng đổi trang
        />
      </div>
>>>>>>> b7b66f3562b9d8ae0831bd36c765bd9674b5a372
    </>
  );
};

export default Task;
