import { Modal, Button, Space, Input, Form, Avatar, Tag } from "antd"
import { PlusOutlined, UserOutlined } from "@ant-design/icons"
import { IoPersonAddSharp } from "react-icons/io5";
import { useState } from "react"
import "./style.scss"
import { get } from "../../utils/request"
// Dữ liệu mẫu cho người dùng
const userData = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "a@gmail.com",
    role: "Leader",
  },
  {
    id: 2,
    name: "Nguyễn Văn A",
    email: "a@gmail.com",
    role: "Leader",
  },
]

function MemberManagement({ token }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [users, setUsers] = useState([])
  const [form] = Form.useForm()
  const openModal = () => setIsModalOpen(true)
  const cancelCloseModal = () => {
    form.resetFields()
    setIsModalOpen(false)
  }

  const handleInputChange = async (e) => {
    const value = e.target.value
    if(e.target.value === "") {
      setUsers([])
    }
    const result = await get(token, `user/list?keyword=${value}`)
    setUsers(result.users)
  }

  const handleClickAdd = (e) => {
    
  }

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
        <div className="find">
          <Input
            type="text"
            placeholder="Enter your member name"
            className="login__form-group-input form-control"
            onChange={handleInputChange}
          />
          {users.length > 0 && (
            <div className="suggestions">
              {users.map((user, index) => (
                <div key={index} className="suggestions__user">
                  <div className="avata">
                    <Avatar size={36} icon={<UserOutlined />} />
                  </div>
                  <div className="suggestions__info">
                    <p className="suggestions__fullname">{user.fullname}</p>
                    <p className="suggestions__email">{user.email}</p>
                  </div>
                <div className="suggestions__add" onClick={handleClickAdd}>
                  <IoPersonAddSharp />
                </div>
                  
                </div>
              ))}
            </div>
          )}
        </div>

        {/* <div className="infoUser suggestUser">
          <div className="avata">
            <Avatar size={48} icon={<UserOutlined />} />
          </div>
          <div className="Infor">
            <p>User</p>
            <p>XXX@gmail.com</p>
          </div>
        </div> */}
        <div>
          <p>Your team size: {userData.length} members</p>
        </div>
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
      </Modal>
    </>
  )
}

export default MemberManagement
