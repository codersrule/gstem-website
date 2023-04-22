import React from 'react';

import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

function AppFaq() {
  return(
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
        </div>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="How do I apply" key="1">
            <p> Participants must be fully admitted to UAPB by completing the standard UAPB application form and other necessary admission forms. Contact us for an application</p>
          </Panel>
          <Panel header="What are the requirements to apply?" key="2">
            <p>High school graduates with a GPA of 3.0 or higher and composite ACT score of 19 or higher are 
                eligible to apply. The original schools are: Altheimer-Sherrill High School; Dollarway High 
                School; Dumas High School; Star City High School; Pine Bluff High School; Watson Chapel 
                High School; and White Hall High School. Today, eligible high school graduates from other 
                schools may apply.</p>
          </Panel>
          <Panel header="Do participants get financial support?" key="3">
            <p>Yes.</p>
          </Panel>
        </Collapse>
        
      </div>
    </div>  
  );
}

export default AppFaq;