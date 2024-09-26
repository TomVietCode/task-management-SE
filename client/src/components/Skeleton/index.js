import React from "react";
import { Skeleton } from "antd";
import "./style.scss";

export const LoadingSkeleton = () => {
  return (
    <Skeleton
      style={{ marginTop: "20px" }} 
      loading={true}
      title={false}
      active={true}
      paragraph={{
        rows: 8,
        width: ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"]
      }}
    />
  );
};

export const loadingTasksDetail = () => (
  <Skeleton
    loading={true}
    title={false}
    active={true}
    paragraph={{
      rows: 5,
      width: ["100%", "100%", "100%", "100%", "100%"],
    }}
  />
);
