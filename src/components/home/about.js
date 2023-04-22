import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-chart-pie"></i>,
    title: 'VISION',
    content: "To assist with increasing the minority scientific and technological workforce in the United States",
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'Mission',
    content:" The mission of the program is to increase students' interest in the STEM area through on and off campus recruiting, educational and research activities.",
  },
  {
    key: '3',
    icon: <i className="fas fa-database"></i>,
    title: 'Goal',
    content:"The goal of the program is to provide student enrichment in the STEM areas through a redesigned curriculum, research experience along with applied theory and practice of STEM activities",
  },
]

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About GSTEM</h2>
        </div>
        <div className="contentHolder">
          <p> Write about GSTEM and what it stands for </p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h2><b>{item.title}</b></h2>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;