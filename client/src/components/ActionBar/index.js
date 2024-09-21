import { Row, Col, Button, theme, Space, Input } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "../../layout/DefaultLayout.scss";
import CreateTask from "../Task/CreateTask";
import "./style.scss";
import ModalTreeSelect from "../TreeSelect";
const { Search } = Input;
function ActionBar({ collapsed, setCollapsed }) {
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
          <Col span={4}>
            <div className="box-home__toggle-button">
              <Button
                className="home__toggle-button"
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)} // Đóng mở menu
              />
            </div>
          </Col>
          <Col span={6} >
            <span className="filter">
              <p>Filter : </p>
              <div className="Box-Filter"><ModalTreeSelect /></div>
            </span>
          </Col>

          <Col span={8} flex="auto">
            <div>
              <Search
                className="box-search"
                placeholder="input search text"
                style={{
                  width: 200,
                  height: 50,
                }}
              />
            </div>
          </Col>

          <Col span={4}>
            <div className="box-NewProject">
              <Space size="middle">
                <CreateTask />
              </Space>
            </div>
          </Col>
        </Row>
      </header>
    </>
  );
}

export default ActionBar;
