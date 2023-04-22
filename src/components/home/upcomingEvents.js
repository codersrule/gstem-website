import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-chart-pie"></i>,
    title: 'Announcement 1',
    content: "",
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'Announcement 2',
    content:"No upcoming events.",
  },
  {
    key: '3',
    icon: <i className="fas fa-database"></i>,
    title: 'Announcement 3',
    content:"",
  },
]

function UpcomingEvents() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Upcoming Events</h2>
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

export default UpcomingEvents;