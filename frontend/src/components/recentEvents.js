import React from "react";

import image1 from "../assets/images/modern-design.jpg";
import image2 from "../assets/images/clean-design.jpg";
import image3 from "../assets/images/great-support.jpg";
import image4 from "../assets/images/easy-customise.jpg";
import image5 from "../assets/images/unlimited-features.jpg";
import image6 from "../assets/images/advanced-option.jpg";

import { Image, Space } from "antd";

class RecentEvent extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  imageUrls = [image1, image2, image3, image4, image5, image6];

  render() {
    return (
      <div id="feature" className="block featureBlock bgGray">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Recent Event</h2>
          </div>
          <Space wrap>
            {this.imageUrls.map((imageUrl, index) => (
              <Image
                width={250}
                key={index}
                src={imageUrl}
                className="responsive-image"
              />
            ))}
          </Space>
        </div>
      </div>
    );
  }
}

export default RecentEvent;
