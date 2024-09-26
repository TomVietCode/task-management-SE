import React, { useState } from "react";
import { Modal, Form, Input, Button, notification } from "antd";
import OTPform from "./OTP"; // Nhập OTPform từ file tương ứng

const ResetPasswordModal = ({ visible, onClose }) => {
  const [form] = Form.useForm();
  const [otpVerified, setOtpVerified] = useState(false); // Trạng thái xác thực OTP

  const handleSubmit = async (values) => {
    // Kiểm tra xác thực OTP trước khi tiếp tục
    if (!otpVerified) {
      notification.error({
        message: "OTP Verification Failed",
        description: "Please verify your OTP before resetting the password.",
        placement: "topRight",
      });
      return;
    }

    // Giả sử bạn sẽ gọi một API để reset mật khẩu ở đây
    console.log("New Password:", values.newPassword);

    // Thông báo thành công
    notification.success({
      message: "Password Reset Successfully",
      description: "Your password has been reset successfully.",
      placement: "topRight",
    });

    // Đóng modal
    onClose();
  };

  const handleOtpVerification = () => {
    // Xác thực OTP ở đây, có thể là một API call
    // Giả lập xác thực thành công
    setOtpVerified(true);
    notification.success({
      message: "OTP Verified",
      description: "Your OTP has been verified. You can now reset your password.",
      placement: "topRight",
    });
  };

  return (
    <Modal
      title="Reset Password"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      {/* Thêm OTPform ở đây */}
      <OTPform onVerify={handleOtpVerification} />

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="New Password"
          name="newPassword"
          rules={[
            { required: true, message: "Please input your new password!" },
            { min: 6, message: "Password must be at least 6 characters." },
          ]}
        >
          <Input.Password placeholder="Enter new password" />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[
            { required: true, message: "Please confirm your password!" },
            {
              validator: (_, value) =>
                value && value !== form.getFieldValue('newPassword')
                  ? Promise.reject(new Error('Passwords do not match!'))
                  : Promise.resolve(),
            },
          ]}
        >
          <Input.Password placeholder="Confirm new password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Reset Password
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ResetPasswordModal;
