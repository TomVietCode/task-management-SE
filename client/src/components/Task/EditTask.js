import React from "react";
import { Modal, Form, Input, DatePicker, Col, Button,Row } from "antd";
import moment from "moment";
import "./edit.scss";

const EditTaskModal = ({ visible, onClose, task }) => {
  

  return (
    <Modal
      title="Edit Task"
      visible={visible}
      onCancel={onClose}
      footer={null}
      className="edit-task-modal"
    >
      <Form layout="vertical" initialValues={{
        title: task.title,
        timeStart: moment(task.timeStart),
        timeFinish: moment(task.timeFinish),
      }}>
        <Form.Item
          label="Task Title"
          name="title"
          rules={[{ message: "Please enter the task title!" }]}
        >
          <Input placeholder="Enter task title" />
        </Form.Item>
        <div>
              <p>Description</p>
              <Form.Item
                name="content"
                rules={[
                  {
                    required: true,
                    message: "Please enter project description!",
                  },
                ]}
              >
                <Input.TextArea
                  placeholder="Enter project description"
                  className="login__form-group-input form-control"
                  rows={4}
                />
              </Form.Item>
            </div>
            <Row gutter={32}>
              <Col span={12}>
                <p>Date Create</p>
                <Form.Item
                  name="timeStart"
                  rules={[
                    { required: true, message: "Please select create date!" },
                  ]}
                >
                  <DatePicker
                    placeholder="Select create date"
                    showTime={{ format: "HH:mm" }}
                    format="YYYY-MM-DD HH:mm"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <p>Deadline</p>
                <Form.Item
                  name="timeFinish"
                  rules={[
                    { required: true, message: "Please select due date!" },
                  ]}
                >
                  <DatePicker
                    placeholder="Select create date"
                    showTime={{ format: "HH:mm" }}
                    format="YYYY-MM-DD HH:mm"
                  />
                </Form.Item>
              </Col>
            </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="edit-task-button">
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditTaskModal;
