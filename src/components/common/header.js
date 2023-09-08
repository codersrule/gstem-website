import React, { useState } from 'react';
import { Modal, Button, Drawer, Anchor, Row, Form, Input, Select, message, Space } from 'antd';
import { BarsOutlined } from '@ant-design/icons';


const { Link } = Anchor;
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



const AppHeader = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const [formValues, setFormValues] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    gender: '',
    message: '',
  });



  const [form] = Form.useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onFinish = (formValues) => {
    console.log('Received formValues of form: ', formValues.email);
    setTimeout(() => {
      setOpen(false);
    }, 1000);
    message.success("Success !!!")
  };



  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
    setFormValues({
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      gender: '',
      message: '',
    });
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
    setFormValues({
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      gender: '',
      message: '',
    });
  };



  return (
    <>
      <div className="container-fluid">
        <div className="header">
          <div className="logo">
            GSTEM
          </div>
          <div className="mobileHidden">
            <Row>
              <Button type='link' onClick={showModal}>Apply</Button>
              <Anchor>
                <Link href="#about" title="About" />
                <Link href="#feature" title="Recent Event" />
                <Link href="#faq" title="FAQ" />
                <Link target='_blank' href="https://uapb.tfaforms.net/31" title="Donate" />
                <Link href="#contact" title="Contact" />
              </Anchor>
            </Row>
          </div>

          <Modal
            open={open}
            destroyOnClose={true}

            onCancel={handleCancel}
            footer={null}

          >
            <Form 
            
           onFinish={onFinish}
            form={form} 
            name="validateOnly" 
            layout="vertical" 
            autoComplete="off">
              <br />
              <br />
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                  {
                    
                    required: true,
                    message: "First Name is required"
                  },
                  {
                    pattern: /^[A-Za-z]+$/,
                    message: "Please enter only alphabetic characters"
                  }
                ]}
              >
                <Input onChange={handleChange} />
              </Form.Item>


              <Form.Item
                name="middleName"
                label="Middle Name"
                rules={[
                 
                  {
                    pattern: /^[A-Za-z]+$/,
                    message: "Please enter only alphabetic characters"
                  }
                ]}
              >
                <Input onChange={handleChange} />
              </Form.Item>

              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                  {
                    required: true,
                    message: 'Last Name is Required',
                  },
                  {
                    pattern: /^[A-Za-z]+$/,
                    message: "Please enter only alphabetic characters"
                  }
                ]}
              >
                <Input onChange={handleChange} />
              </Form.Item>
              <Form.Item
                name="email"
                label="E-mail"
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
                <Input onChange={handleChange} />
              </Form.Item>

              <Form.Item
                name="gender"
                label="Gender"
                rules={[{ required: true, message: 'Please select gender!' }]}
              >
                <Select >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  { message: 'Please input your phone number!' },
                  {
                    pattern: /^[0-9]{10}$/,
                    message: "Please enter a 10-digit phone number"
                  }
                ]}
              >
                <Input style={{ width: '100%' }} onChange={handleChange} />
              </Form.Item>

              <Form.Item
                name="intro"
                label="Intro"
                rules={[{ required: true, message: 'Please enter a brief introduction' }]}
              >
                <Input.TextArea
                  placeholder='A brief introduction about yourself'
                  showCount maxLength={100} />
              </Form.Item>

                <br/>
              <Form.Item>
                <Space>
                  <SubmitButton form={form} />
                  <Button htmlType="reset">Reset</Button>
                </Space>
              </Form.Item>
            </Form>
          </Modal>

          <div className="mobileVisible">
            <Button type="primary" onClick={showDrawer}>
              <BarsOutlined />
            </Button>
            <Drawer
              placement="right"
              closable={true}
              onClose={onClose}
              open={visible}
            >
              <Anchor>
                <Button type='primary' onClick={showModal}>Apply</Button>
                <Link href="#about" title="About" />
                <Link href="#feature" title="Recent Event" />
                <Link href="#faq" title="FAQ" />
                <Link target='_blank' href="https://uapb.tfaforms.net/31" title="Donate" />
                <Link href="#contact" title="Contact" />
              </Anchor>
            </Drawer>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppHeader;
