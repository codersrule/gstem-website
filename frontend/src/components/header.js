import React, { useState } from "react";
import {
  Modal,
  Button,
  Drawer,
  Anchor,
  Row,
  Form,
  Input,
  //Select,
  message,
  Space,
} from "antd";
import { BarsOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";

const { Link } = Anchor;
//const { Option } = Select;

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
      }
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

  // Get current date

  let currentDate = new Date();
  let fullDate = currentDate.toLocaleString();

  const [formValues, setFormValues] = useState({
    id: uuidv4(), // generate unique id for each submission
    Date_Created: fullDate,
    First_Name: "",
    Middle_Name: "N/A",
    Last_Name: "",
    Email: "",
    Gender: "",
    Phone: "",
    Introduction: "",
  });

  const handleChange = (e, fieldName) => {
    const value = e.target.value;
    setFormValues({
      ...formValues,
      [fieldName]: value,
    });
  };

  console.log(formValues);
  const [form] = Form.useForm();

  const onFinish = () => {
    // Send form data to the server for processing
    fetch("http://localhost:3001/api/saveFormData", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          message.success("Application submitted successfully!!!");
          setOpen(false);
        } else {
          message.error("Error submitting application. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error submitting application:", error);
        message.error("Error submitting application. Please try again.");
      });
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="header">
          <div className="logo">GSTEM</div>
          <div className="mobileHidden">
            <Row>
              <Button type="link" onClick={showModal}>
                Apply
              </Button>
              <Anchor>
                <Link href="#about" title="About" />
                <Link href="#feature" title="Recent Event" />
                <Link href="#faq" title="FAQ" />
                <Link
                  target="_blank"
                  href="https://uapb.tfaforms.net/31"
                  title="Donate"
                />
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
              autoComplete="off"
            >
              <br />
              <br />
              <Form.Item
                name="First_Name"
                label="First Name"
                rules={[
                  {
                    required: true,
                    message: "First Name is required",
                  },
                  {
                    pattern: /^[A-Za-z]+$/,
                    message: "Please enter only alphabetic characters",
                  },
                ]}
              >
                <Input
                  onChange={(e) => handleChange(e, "First_Name")}
                  value={formValues.First_Name}
                />
              </Form.Item>

              <Form.Item
                name="Middle_Name"
                label="Middle Name"
                rules={[
                  {
                    pattern: /^[A-Za-z]+$/,
                    message: "Please enter only alphabetic characters",
                  },
                ]}
              >
                <Input
                  onChange={(e) => handleChange(e, "Middle_Name")}
                  value={formValues.Middle_Name}
                />
              </Form.Item>

              <Form.Item
                name="Last_Name"
                label="Last Name"
                rules={[
                  {
                    required: true,
                    message: "Last Name is Required",
                  },
                  {
                    pattern: /^[A-Za-z]+$/,
                    message: "Please enter only alphabetic characters",
                  },
                ]}
              >
                <Input
                  onChange={(e) => handleChange(e, "Last_Name")}
                  value={formValues.Last_Name}
                />
              </Form.Item>
              <Form.Item
                name="Email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input
                  onChange={(e) => handleChange(e, "Email")}
                  value={formValues.Email}
                />
              </Form.Item>

              <Form.Item
                name="Gender"
                label="Gender"
                rules={[
                  { required: true, message: "Please enter your gender." },
                ]}
              >
                <Input
                  onChange={(e) => handleChange(e, "Gender")}
                  value={formValues.Gender}
                />
              </Form.Item>
              <Form.Item
                name="Phone"
                label="Phone Number"
                rules={[
                  { message: "Please input your phone number!" },
                  {
                    pattern: /^[0-9]{10}$/,
                    message: "Please enter a 10-digit phone number",
                  },
                ]}
              >
                <Input
                  onChange={(e) => handleChange(e, "Phone")}
                  value={formValues.Phone}
                />
              </Form.Item>

              <Form.Item
                name="Introduction"
                label="Intro"
                rules={[
                  {
                    required: true,
                    message: "Please enter a brief introduction",
                  },
                ]}
              >
                <Input.TextArea
                  placeholder="A brief introduction about yourself"
                  showCount
                  maxLength={100}
                  onChange={(e) => handleChange(e, "Introduction")}
                  value={formValues.Introduction}
                />
              </Form.Item>

              <br />
              <Form.Item>
                <Space>
                  <SubmitButton form={form} />
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
                <Button type="primary" onClick={showModal}>
                  Apply
                </Button>
                <Link href="#about" title="About" />
                <Link href="#feature" title="Recent Event" />
                <Link href="#faq" title="FAQ" />
                <Link
                  target="_blank"
                  href="https://uapb.tfaforms.net/31"
                  title="Donate"
                />
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
