import React from "react";
import "./style.scss";

import LayoutTask from "../../layout/LayoutTask";
import ActionBar from "../../components/ActionBar";
import PageNumber from "../../components/PageNumber";

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
      project: "Project DE",
      tasks: 12,
      role: "Member",
      timeStart: "21-12-2022",
      deadline: "22-12-2022",
      status: "Not finished",
    },
  ];
  return (
    <>
      <ActionBar />
      <div className="LayoutTask">
        <LayoutTask data={data} />
      </div>
      <div className="PageNumber">
        <PageNumber />
      </div>
    </>
  );
};

export default ProjectContent;
