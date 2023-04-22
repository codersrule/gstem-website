import React from 'react';

import { Form, Input, Button, Select, InputNumber, Checkbox } from 'antd';
const { TextArea } = Input;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const {Option} = Select;

function AppContact() {

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  const onFinish = (values) => {
    console.log(values);
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
      name={['user', 'name']}
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          required: true,
          type: 'email',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
        name="gender"
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
    <Form.Item name={['user', 'subject']} label="Subject">
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'message']} label="Message">
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