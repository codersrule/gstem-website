import React from 'react';
import { Anchor, Drawer, Button, Modal, Row} from 'antd';
import { BarsOutlined } from '@ant-design/icons';
import Application from '../home/application';
const { Link } = Anchor;

class AppHeader extends React.Component {
  state = { visible: false, showApplicationModal: false  };

  showModal = () => {
    this.setState({
      showApplicationModal: true,
    });
  };

  handleCancel = e => {
    this.setState({
      showApplicationModal: false,
    });
  };


 showDrawer = () => {
  this.setState({
    visible: true
  })
  };

 onClose = () => {
    this.setState({
      visible:false
    })
  };

  render() {

    return (
      <>
      <div className="container-fluid">
        <div className="header">
          <div className="logo">
            <a href="/">GSTEM</a>
          </div>
          <div className="mobileHidden">
            <Row>
            <Button type='link' onClick = {this.showModal} >Apply</Button>
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
            open={this.state.showApplicationModal}
            onCancel={this.handleCancel}
            footer={null}
            destroyOnClose = {true}
          >
          <Application />
          </Modal>
  
          <div className="mobileVisible">
            <Button type="primary" onClick={this.showDrawer}>
            <BarsOutlined />
            </Button>
            <Drawer
              placement="right"
              closable={true}
              onClose={this.onClose}
              open = {this.state.visible}
            >
              <Anchor>
                <Button type='link' onClick = {this.showModal} > Apply </Button>
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

  }   
}

export default AppHeader;