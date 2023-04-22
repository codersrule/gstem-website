import React from 'react';
import { Button } from 'antd';
import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Welcome Message',
    content: ' Write a scintillating welcome message about GSTEM and why students should join.',
  },
  
]

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;