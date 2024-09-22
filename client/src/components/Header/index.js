import { Row, Col,theme, Space, Input } from "antd";
import CreateTask from "../Task/CreateTask";
import "./style.scss";

const { Search } = Input;
function ActionBar () {
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

          <Col span={8} flex="auto">
            <div>
              <Search
                className="box-search"
                placeholder="Search "
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
