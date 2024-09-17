import { Form, Input, Button, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";

function SignUp() {
    // pops up đăng ký thành công
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);

    notification.success({
      message: 'Đăng ký thành công!',
      description: 'Bạn đã đăng ký tài khoản thành công !',
      placement: 'topRight',
      duration: 2, 
      onClose: () => navigate('/login'), 
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container">
      <div className="container__signup">
        <div className="container__signup-title">ĐĂNG KÝ</div>
        <div className="container__signup-form">
          <Form
            name="signup"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 700,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Nhập email của bạn!",
                },
                {
                  type: 'email',
                  message: 'Email không hợp lệ!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Nhập mật khẩu!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Nhập lại mật khẩu"
              name="confirmPassword"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Nhập lại mật khẩu của bạn!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Mật khẩu không khớp!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Đăng ký
              </Button>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 3,
                span: 20,
              }}
              className="container__signup-form-edit"
            >
              Bạn đã có tài khoản?
              <span className="container__signup-form-ToSignUp">
                <Link to="/login"> Đăng nhập</Link>
              </span>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
