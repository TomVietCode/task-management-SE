import { notification, Button, Space, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
//input ( Success, Warning ,Error, Info )
// function () {
// const showWarning = () => {
//   notify(
//     "Warning",
//     "This is a warning notice about copywriting.",
//     "warning"
//   );
// };

// return (
//   <>
//     <button onClick={showWarning}>Show Warning</button>
//   </>
// );

export const notifi = (type, message) => {
  notification[type]({
    message,
    placement: "topRight", // Vị trí hiển thị
    duration: 2, // Thời gian tồn tại (giây)
  });
};

export const AlertNoti = () => {
  const [modal, contextHolder] = Modal.useModal();
  const confirm = () => {
    modal.confirm({
      title: "Are you sure to delete this task ?",
      icon: <ExclamationCircleOutlined />,
      okText: "Delete",
      cancelText: "Cancel",
    });
  };
  return (
    <>
      <Space>
        <Button onClick={confirm}>Confirm</Button>
      </Space>
      {contextHolder}
    </>
  );
};
