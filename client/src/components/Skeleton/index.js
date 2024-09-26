import React from "react";
import { Skeleton } from "antd";
import "./style.scss";

//  const loadingSkeleton = () => {
//   return (
//     <Skeleton
//       loading={true}
//       title={false}
//       active={true}
//       paragraph={{
//         rows: 5,
//         width: ["100%", "100%", "100%", "100%", "100%"],
//       }}
//     />
//   );
// };
// export default loadingSkeleton;

const loadingTasksDetail = () => (
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
export default loadingTasksDetail;
