import React from 'react';
import { Button, Form, Input, Radio} from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrApplicationerCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
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
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};

const Application = () => (
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
    validateMessages={validateMessages}
  >
    <br />
    <br />
    <Form.Item name={['user', 'Fname']} label="First Name" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'Mname']} label="Middle Name" rules={[{ type: 'name'}]}>
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'Lname']} label="Last Name" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'email']} label="UAPB Email" rules={[{ type: 'email' }]}>
      <Input />
    </Form.Item>
    <Form.Item label="Gender">
          <Radio.Group>
            <Radio value="male"> M </Radio>
            <Radio value="female"> F </Radio>
          </Radio.Group>
        </Form.Item>
        {/**
         * 
         * <Form.Item label="Classification">
          <Select>
            <Select.Option value="demo">Freshman</Select.Option>
            <Select.Option value="demo">Sophomore</Select.Option>
            <Select.Option value="demo">Junior</Select.Option>
            <Select.Option value="demo">Senior</Select.Option>
          </Select>
        </Form.Item>
         */}
        
    <Form.Item name={['user', 'introduction']} label="Brief Introduction" >
      <Input.TextArea />
    </Form.Item>
    <Form.Item wrApplicationerCol={{ ...layout.wrApplicationerCol, offset: 8 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default Application;