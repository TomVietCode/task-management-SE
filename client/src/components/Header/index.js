import { Row, Col, theme, Space, Input } from "antd"
import CreateTask from "../Task/CreateTask"
import "./style.scss"



function ActionBar() {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <>
      <header
        className="home__header"
        style={{
          background: colorBgContainer,
        }}
      >
        <Row justify="space-between" align="middle" gutter={[16, 16]}>
          <Col span={8} flex="auto"></Col>

          <Col span={4}>
            <div className="box-NewProject">
              <Space size="middle">
                <CreateTask name="Creat Project" />
              </Space>
            </div>
          </Col>
        </Row>
      </header>
    </>
  )
}

export default ActionBar
