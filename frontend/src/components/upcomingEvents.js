import { Row, Col } from "antd";

const items = [
  {
    key: "1",
    title: "Announcements",
    content: "No current announcement",
  },
  {
    key: "2",
    title: "Upcoming Events",
    content: "No upcoming events.",
  },
];

function UpcomingEvents() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2> NEWS </h2>
        </div>
        <Row gutter={[]}>
          {items.map((item) => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">{item.icon}</div>
                  <h2>
                    <b>{item.title}</b>
                  </h2>
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
