import React from 'react';

import { Form, Input, Button, Select, message, Space } from 'antd';

const { Option } = Select;

const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      },
    );
  }, [values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Submit
    </Button>
  );
};


const AppContact = () => {

  const validateMessages = {
    required: true,
  };

  const onFinish = (values) => {
    console.log(values);
    message.success("Success !!!");

  };

  const [form] = Form.useForm();

  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Reach Out To An Advisor</h2>
        </div>
        <Form
          form={form}
          name="contact-us"
          layout="vertical"
          autoComplete="off"
          onFinish={onFinish}
          >

          <Form.Item
            name='name'
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please add your name'
              },
              {
                pattern: /^[A-Za-z]+$/,
                message: "Please enter only alphabetic characters"
              }
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
            rules={[
              { required: true, message: 'Please add a subject' },
              {
                pattern: /^[A-Za-z]+$/,
                message: "Please enter only alphabetic characters"
              }
              ]}>
            <Input />
          </Form.Item>
          <Form.Item name="message"
            rules={[{ required: true, message: 'Please enter a message' }]}
            label="Message">
            <Input.TextArea />
          </Form.Item>
          <Form.Item >
            <Space>
              <SubmitButton form={form} />
              <Button htmlType="reset">Reset</Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AppContact;
