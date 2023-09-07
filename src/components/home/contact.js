import React from 'react';

import { Form, Input, Button, Select, message } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const { Option } = Select;

const AppContact = () =>{

  const validateMessages = {
    required: true,
  };

  const onFinish = (values) => {
    console.log(values);
    message.success("Success !!!");
   
  };

  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Reach Out To An Advisor</h2>
        </div>

        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name='name'
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please add your name'
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='email'
            label="Email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
            },
            {
                required: true,
                message: 'Please input your E-mail!',
            },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="advisor"
            label="Advisor"
            rules={[{ required: true, message: 'Please select an advisor' }]}
          >
            <Select placeholder="select an advisor">
              <Option value="kw">Dr. Karl Walker (Mathematics and Computer Science)</Option>
              <Option value="on">Dr. Obadiah Njue (Agriculture)</Option>
              <Option value="gw">Dr. Grant Wangila (Chemistry)</Option>
              <Option value="cc">Dr. Charles Colen(Industrial Technology)</Option>
            </Select>
          </Form.Item>
          <Form.Item 
          name="subject" 
          label="Subject"
          rules={[{ required: true, message: 'Please add a subject' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="message" 
          rules={[{ required: true, message: 'Please enter a message' }]}
          label="Message">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 8,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AppContact;