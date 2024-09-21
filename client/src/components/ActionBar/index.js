import { Row, Col, Button, theme, Space, Input } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import "../../layout/DefaultLayout.scss"
import CreateTask from "../Task/CreateTask" 

function ActionBar({
  onSearch,
  collapsed,
  setCollapsed,
}) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  

  return (
    <>
      <header
        className="home__header"
        style={{
          background: colorBgContainer,
        }}
      >
        <Row justify="space-between" align="middle" gutter={[16, 16]}>
          <Col>
            <div className="box-home__toggle-button">
              <Button
                className="home__toggle-button"
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)} // Đóng mở menu
              />
            </div>
          </Col>

          <Col flex="auto">
            <div className="box-search">
              <Input.Search
                placeholder="search project"
                enterButton
                size="large"
                allowClear
                onSearch={onSearch}
              />
            </div>
          </Col>

          <Col>
            <div className="box-NewProject">
              <Space size="middle">
                <CreateTask/>
              </Space>
            </div>
          </Col>
        </Row>
      </header>
    </>
  );
}

export default ActionBar;
