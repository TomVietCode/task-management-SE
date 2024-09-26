import { Tabs } from "antd";
import "./TaskDetail.scss";
import ProjectContent from "./indexDetail";
import TimeLine from "../../components/TimeLine";
import {loadingTasksDetail} from "../../components/Skeleton"
import CreateTask from "../../components/Task/CreateTask";
import MemberManagement from "../../components/MemberManagement"

function TaskDetail() {
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
  ];

  return (
    <>
      <div className="Container" >
        <div className="Container__firstBox">
          <div className="box1">
            <p>Project Name:</p>
            <p>Status</p>
          </div>
          <div className="box2">
            <p>Description:</p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>
          <div className="box3">
            <p>Role:</p>
            <p>Deadline:</p>
          </div>
          <div className="box4">
            <div className="CreatTask">
              <CreateTask name="New Task" />
            </div>
            <div className="MemberManagement">
              <MemberManagement/>
            </div>
          </div>

          {loadingTasksDetail()}
          <div style={{ padding: "20px" }}>
            <Tabs items={items} />
          </div>
        </div>
        <div className="Container__secondBox">
          <TimeLine />
        </div>
      </div>
    </>
  );
}

export default TaskDetail;
