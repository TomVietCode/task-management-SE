import { Tabs, Tag } from "antd"
import "./TaskDetail.scss"
import ProjectContent from "./indexDetail"
import TimeLine from "../../components/TimeLine"
import { loadingTasksDetail } from "../../components/Skeleton"
import CreateTask from "../../components/Task/CreateTask"
import MemberManagement from "../../components/MemberManagement"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getTaskDetail } from "../../services/TaskService"
import { getCookie } from "../../helpers/cookie"
import moment from "moment"
const TaskDetail = () => {
  const token = getCookie("tokenUser")
  const [data, setData] = useState({})
  const { id } = useParams()

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
  useEffect(() => {
    const fetchApi = async () => {
      const result = await getTaskDetail(token, id)
      if (result.code === 200) {
        setData(result.detail)
      }
    }
    fetchApi()
  }, [])

  console.log(data)

  const items = [
    {
      key: "1",
      label: "Tasks on project",
      children: (
        <div
          style={{
            width: "100%",
            height: "100vh",
            textAlign: "center",
            background: "rgba(0,255,0,0.02)",
          }}
        >
          <ProjectContent />
        </div>
      ),
    },
    {
      key: "2",
      label: "Comment",
      children: (
        <div
          style={{
            width: "100%",
            height: "100vh",
            textAlign: "center",
            background: "rgba(0,0,255,0.02)",
          }}
        >
          Content of Part 2
        </div>
      ),
    },
  ]

  return (
    <>
      <div className="Container">
        <div className="Container__firstBox">
          <div className="box1">
            <p>Task Name: {data.title}</p>
            <p>
              Status:  
              <Tag
                style={{ cursor: "pointer", userSelect: "none", marginLeft: "10px"}}
                color={getStatusColor(data.status)}
              >
                {data.status}
              </Tag>
            </p>
          </div>
          <div className="box2">
            <p>Description:</p>
            <span>{data.content}</span>
          </div>
          <div className="box3">
            <p>Role: {data.createdBy === token ? "Leader" : "Member"}</p>
            <p>
              Time Start:{" "}
              {data && moment(data.timeStart).format("DD-MM-YYYY HH:mm")}
            </p>
            <p>
              Deadline:{" "}
              {data && moment(data.timeFinish).format("DD-MM-YYYY HH:mm")}
            </p>
          </div>
          <div className="box4">
            <div className="CreatTask">
              <CreateTask name="New Task" />
            </div>
            <div className="MemberManagement">
              <MemberManagement />
            </div>
          </div>

          <div style={{ padding: "20px" }}>
            <Tabs items={items} />
          </div>
        </div>
        <div className="Container__secondBox">
          <TimeLine />
        </div>
      </div>
    </>
  )
}

export default TaskDetail
