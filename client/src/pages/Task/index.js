import { useEffect, useState } from "react"
import { notification, Pagination } from "antd"
import "./style.scss"
import { changeStatus, getTaskList } from "../../services/TaskService"
import { getCookie } from "../../helpers/cookie"
import { useSelector } from "react-redux"
import TaskList from "../../components/Task/TaskList"

const Task = () => {
  // Dữ liệu mẫu cho bảng
  const token = getCookie("tokenUser")
  const [data, setData] = useState([])
  const [reload, setReload] = useState(true)
  const state = useSelector((state) => state.TaskReducer)

  // Phân trang
  const [currentPage, setCurrentPage] = useState(1) // Trang hiện tại
  const [totalItems, setTotalItems] = useState(0) // Tổng số item từ backend
  const [limitItem, setLimitItem] = useState(0)

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getTaskList(token, currentPage)
      setData(result)
      setTotalItems(result.totalItem)
      setLimitItem(result.limitItem)
    }
    fetchApi()
  }, [reload, state, currentPage])

  const handleChangeStatus = async (record) => {
    // Logic để thay đổi status, ví dụ chuyển đổi qua các trạng thái
    let newStatus = ""
    switch (record.status) {
      case "initial":
        newStatus = "doing"
        break
      case "doing":
        newStatus = "finish"
        break
      case "finish":
        newStatus = "notFinish"
        break
      case "notFinish":
        newStatus = "pending"
        break
      case "pending":
        newStatus = "initial"
        break
      default:
        newStatus = record.status
    }

    record.status = newStatus
    setReload(!reload)
    notification.success({
      message: "Change status successfully!",
      placement: "topRight",
      duration: 2,
    })
    const result = await changeStatus(token, `change-status/${record._id}`, {
      status: newStatus,
    })
  }

  const handleChangePage = (page) => {
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
    </>
  )
}

export default Task
