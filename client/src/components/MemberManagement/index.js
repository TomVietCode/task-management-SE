import { Modal, Button, Space, Input, Form, Avatar, Tag } from "antd";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./style.scss"
// Dữ liệu mẫu cho người dùng
const userData = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "a@gmail.com",
    role: "Leader",
  },
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "a@gmail.com",
    role: "Leader",
  },
];

function MemberManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const openModal = () => setIsModalOpen(true);
  const cancelCloseModal = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  return (
    <>
      <Button size="large" type="primary" onClick={openModal}>
        <PlusOutlined />
        Member Management
      </Button>
      <Modal
        title="Member Management"
        className="Modal"
        open={isModalOpen}
        onCancel={cancelCloseModal}
        footer={null}
      >
        <Form form={form} style={{ marginTop: "100" }}>
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <div>
              <Form.Item
                name="title"
                rules={[
                  { required: true, message: "Please enter member name!" },
                ]}
              >
                <Input
                  type="text"
                  placeholder="Enter your member name"
                  className="login__form-group-input form-control"
                />
              </Form.Item>
            </div>

            <div>
              <p>Your team size: {userData.length} members</p>
            </div>
          </Space>

          {/* Hiển thị thông tin người dùng từ dữ liệu */}
          {userData.map((user) => (
            <div className="infoUser" key={user.id}>
              <div className="avata">
                <Avatar size={48} icon={<UserOutlined />} />
              </div>
              <div className="Infor">
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>
              <div className="role">
                <Tag color={user.role === "Leader" ? "red" : "green"}>
                  {user.role}
                </Tag>
              </div>
            </div>
          ))}
        </Form>
      </Modal>
    </>
  );
}

export default MemberManagement;
