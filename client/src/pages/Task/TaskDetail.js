import { Tabs, Tag } from "antd"
import "./TaskDetail.scss"
import TimeLine from "../../components/TimeLine"
import CreateTask from "../../components/Task/CreateTask"
import MemberManagement from "../../components/MemberManagement"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { getTaskList } from "../../services/TaskService"
import { getCookie } from "../../helpers/cookie"
import moment from "moment"
import TaskList from "../../components/Task/TaskList"

const TaskDetail = () => {
  const token = getCookie("tokenUser")
  const location = useLocation()
  const { task } = location.state || {}
  const [subTasks, setsubTasks] = useState({})
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
      const result = await getTaskList(token, `/sub-task/${task._id}`)
      setsubTasks({taskList: [...result]})
    }
    fetchApi()
  }, [])

  const items = [
    {
      key: "1",
      label: "List Sub Tasks",
      children: (
        <div
          style={{
            width: "100%",
            height: "100vh",
            textAlign: "center",
            background: "rgba(0,255,0,0.02)",
          }}
        >
          <TaskList isSubTaskList={true} data={subTasks}/>
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
            <p>Task Name: {task.title}</p>
            <p>
              Status:
              <Tag
                style={{
                  cursor: "pointer",
                  userSelect: "none",
                  marginLeft: "10px",
                }}
                color={getStatusColor(task.status)}
              >
                {task.status}
              </Tag>
            </p>
          </div>
          <div className="box2">
            <p>Description:</p>
            <span>{task.content}</span>
          </div>
          <div className="box3">
            <p>
              Role:   
              <Tag color={task.createdBy === token ? "red" : "green"} style={{ marginLeft: "10px"}}>
                {task.createdBy === token ? "Leader" : "Member"}
              </Tag>
            </p>
            <p>
              Time Start:{" "}
              {task && moment(task.timeStart).format("DD-MM-YYYY HH:mm")}
            </p>
            <p>
              Deadline:{" "}
              {task && moment(task.timeFinish).format("DD-MM-YYYY HH:mm")}
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
