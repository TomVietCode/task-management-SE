import { Form, Input, Button, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";

function Login() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);

    notification.success({
      message: "Đăng nhập thành công!",
      placement: "topRight",
      duration: 2,
      onClose: () => navigate("/Home"),
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container">
      <div className="container__login">
        <div className="container__login-title">ĐĂNG NHẬP</div>
        <div className="container__login-form">
          <Form
            name="login"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Nhập email của bạn!" },
                { type: "email", message: "Email không hợp lệ!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[{ required: true, message: "Nhập mật khẩu!" }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Đăng nhập
              </Button>
            </Form.Item>

            <Form.Item
              wrapperCol={{ offset: 3, span: 20 }}
              className="container__login-form-edit"
            >
              <span>
                Bạn chưa có tài khoản?
                <span className="container__login-form-edit-ToSignUp">
                  <Link to="/signup"> Đăng ký tài khoản</Link>
                </span>
              </span>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
