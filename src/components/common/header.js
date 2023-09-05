import React, { useState } from 'react';
import { Modal, Button, Drawer, Anchor, Row, Form, Input, Select } from 'antd';
import { BarsOutlined } from '@ant-design/icons';
const {Link} = Anchor;
const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const AppHeader = () => {
    const [visible, setVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        firstName: '',
        middleName:'',
        lastName: '',
        email: '',
        gender:'',
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
    };

 

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
    setFormValues({
        firstName: '',
        middleName:'',
        lastName: '',
        email: '',
        gender:'',
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
        middleName:'',
        lastName: '',
        email: '',
        gender:'',
        message: '',
      });
  };

 

  return (
    <>
      <div className="container-fluid">
        <div className="header">
          <div className="logo">
            <a href="/">GSTEM</a>
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
           destroyOnClose = {true}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            footer={null}
            
          >
            <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
            scrollToFirstError
        >
            <br />
            <br />
            <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                    {
                        required: true,
                        message: "First Name is required"
                    }
                ]}
            >
                <Input onChange={handleChange} />
            </Form.Item>

            <Form.Item
                name="middleName"
                label="Middle Name"
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
                <Input onChange={handleChange}/>
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
                rules={[{ message: 'Please input your phone number!' }]}
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

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
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



// import React from 'react';
// import { Anchor, Drawer, Button, Modal, Row} from 'antd';
// import { BarsOutlined } from '@ant-design/icons';
// import Application from '../home/application';
// const { Link } = Anchor;

// class AppHeader extends React.Component {
//   state = { visible: false, setOpen: false  };
//   state = { confirmLoading: false, setConfirmLoading: false  };
//   state = { modalText: '', setModalText: ''  };

//   showModal = () => {
//     this.setState({
//       setOpen: true,
//     });
//   };

//   handleCancel = e => {
//     this.setState({
//       setOpen: false,
//     });
//   };


//  showDrawer = () => {
//   this.setState({
//     visible: true
//   })
//   };

//  onClose = () => {
//     this.setState({
//       visible:false
//     })
//   };

//   render() {

//     return (
//       <>
//       <div className="container-fluid">
//         <div className="header">
//           <div className="logo">
//             <a href="/">GSTEM</a>
//           </div>
//           <div className="mobileHidden">
//             <Row>
//             <Button type='link' onClick = {this.showModal} >Apply</Button>
//             <Anchor>
//               <Link href="#about" title="About" />              
//               <Link href="#feature" title="Recent Event" />
//               <Link href="#faq" title="FAQ" />
//               <Link target='_blank' href="https://uapb.tfaforms.net/31" title="Donate" />
//               <Link href="#contact" title="Contact" />
//             </Anchor>
//             </Row>
//           </div>
  
//           <Modal
//             open={this.state.setOpen}
//             onCancel={this.handleCancel}
//             footer={null}
//             destroyOnClose = {true}
//           >
//             {
//                 /**
//          <Application />
//          */ 
//             }
         
//           </Modal>
  
//           <div className="mobileVisible">
//             <Button type="primary" onClick={this.showDrawer}>
//             <BarsOutlined />
//             </Button>
//             <Drawer
//               placement="right"
//               closable={true}
//               onClose={this.onClose}
//               open = {this.state.visible}
//             >
//               <Anchor>
//                 <Button type='primary' onClick = {this.showModal} > Apply </Button>
//                 <Link href="#about" title="About" />
//                 <Link href="#feature" title="Recent Event" />
//                 <Link href="#faq" title="FAQ" />
//                 <Link target='_blank' href="https://uapb.tfaforms.net/31" title="Donate" />
//                 <Link href="#contact" title="Contact" />
//               </Anchor>
//             </Drawer>
//           </div>
//         </div>
//       </div>
//       </>
      
//     );

//   }   
// }

// export default AppHeader;