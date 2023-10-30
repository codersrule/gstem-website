import { Row, Col } from "antd";

const items = [
  {
    key: "1",
    title: "VISION",
    content:
      "To assist with increasing the minority scientific and technological workforce in the United States",
  },
  {
    key: "2",
    title: "Mission",
    content:
      " The mission of the program is to increase students' interest in the STEM area through on and off campus recruiting, educational and research activities.",
  },
  {
    key: "3",
    title: "Goal",
    content:
      "The goal of the program is to provide student enrichment in the STEM areas through a redesigned curriculum, research experience along with applied theory and practice of STEM activities",
  },
];

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About GSTEM</h2>
        </div>
        <div className="contentHolder ">
          <p>
            Welcome to our Graduate STEM program at the{" "}
            <b>University of Arkansas at Pine Bluff!</b> Our program is designed
            to provide students with advanced knowledge and skills in the fields
            of science, technology, engineering, and mathematics. Our faculty
            members are renowned experts in their respective disciplines and are
            committed to providing students with a high-quality education. Our
            program offers a diverse range of coursework, research
            opportunities, and professional development resources to help
            students succeed in their chosen fields. Students have the
            flexibility to tailor their programs to their individual interests
            and career goals, with options for specializations and
            interdisciplinary studies. Whether you are interested in pursuing a
            career in academia, industry, or government, our program will equip
            you with the skills and knowledge necessary to excel. We are
            dedicated to supporting our students throughout their graduate
            studies and beyond, with resources such as career services,
            mentoring, and networking opportunities. If you are passionate about
            STEM and are ready to take your education to the next level, we
            invite you to explore our program and consider applying to join our
            community of scholars and researchers.
          </p>
        </div>

        <Row gutter={[16, 16]}>
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

export default AppAbout;
