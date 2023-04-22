import React from 'react';
import { PlayCircleOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';

class AppWorks extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div id="works" className="block worksBlock">
        <div className="container-fluid">
          <div className="contentHolder">
            <Button shape='circle' icon = {<PlayCircleOutlined />} onClick={this.showModal}></Button>
          </div>
          <Modal
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={null}
            destroyOnClose = {true}
          >
            <iframe title='youtube' width="350" height="350" src="https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU"></iframe>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AppWorks;