import React, { useState } from 'react';
import { Button, Drawer, Row, Col, Avatar, Divider, Modal, Form, Input, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import { deleteCookie } from '../../helpers/cookie';


const UserProfileDrawer = ({ visible, setVisible }) => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm(); // Tạo form

  const onClose = () => {
    setVisible(false); // Đóng Drawer
  };

  const showEditModal = () => {
    setIsModalVisible(true); // Hiện modal
  };

  const handleOk = () => {
    setIsModalVisible(false); // Đóng modal
    form.resetFields(); // Reset form
  };

  const handleCancel = () => {
    setIsModalVisible(false); // Đóng modal
  };

  const userData = {
    fullName: 'An Design',
    email: 'A@Admin.com',
    birthday: 'February 3, 2004',
    skills: 'JavaScript, React, Node.js',
    phone: '+818111111',
    github: 'https://github.com/TranAn32',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png', // URL avatar
  };

  const handleLogout = () => {
    deleteCookie("tokenUser")
    navigate('/user/login'); // Điều hướng đến trang đăng nhập
    notification.success({
      message: "Logged out successfully",
      placement: "top",
      duration: 2,
    });
  };

  return (
    <>
      <Drawer
        title="My Profile"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={400}
      >
        <div className="user-profile">
          <Avatar
            size={64}
            src={userData.avatar}
            style={{ marginBottom: 16, display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
          />
          <Row>
            <Col span={24}>
              <p><strong>Full Name:</strong> {userData.fullName}</p>
              <p><strong>Email:</strong> {userData.email}</p>
              <p><strong>Birthday:</strong> {userData.birthday}</p>
              <p><strong>Skills:</strong> {userData.skills}</p>
              <p><strong>Phone:</strong> {userData.phone}</p>
              <p>
                <strong>GitHub:</strong> <a href={userData.github} target="_blank" rel="noopener noreferrer">{userData.github}</a>
              </p>
            </Col>
          </Row>
          <Divider />
          <Button 
            type="default" 
            style={{ width: '100%', marginBottom: '10px' }} 
            onClick={showEditModal} // Mở modal chỉnh sửa
          >
            Edit Profile
          </Button>
          <Button type="primary" danger style={{ width: '100%' }} onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </Drawer>

      {/* Modal Form cho Edit Profile */}
      <Modal
        title="Edit User Profile"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            fullName: userData.fullName,
            email: userData.email,
            birthday: userData.birthday,
            skills: userData.skills,
            phone: userData.phone,
          }}
        >
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[{ required: true, message: 'Please input your full name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="birthday"
            label="Birthday"
            rules={[{ required: true, message: 'Please input your birthday!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="skills"
            label="Skills"
            rules={[{ required: true, message: 'Please input your skills!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UserProfileDrawer;
