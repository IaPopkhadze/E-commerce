import React from "react";
import ForSale from "../../Assets/sale.gif";
import Iphones from "../../Assets/iphones.png";
import "./sale.css"
import '../MotionDiv/motionDiv.css'

function Sale() {
  return (
    <div className="sale">
      <div className="sale_images">
        <div className="sale_images_1">
          <img src={ForSale} alt="" />
        </div>
        <div className="sale_images_2_3">
          <div className="sale_images_2">
            <img src={Iphones} alt="" />
          </div>
          <div className="sale_images_3">
       <ul>
        <li>IPhone 3G, 3GS. Apple released the second-generation iPhone and iPhone operating system (OS) 2.0 on June 9, 2008</li>
        <li className="iphone_descrition">Apple also released in 2008 a software development kit (SDK) for custom applications</li>
        <li>The iPhone 3G also featured assisted GPS</li>
        <li>It did not support Flash, Java or Multimedia Messaging Service (MMS).</li>
        <li> on June 8, 2009, Apple released the iPhone 3GS and iPhone OS 3.0. Available in 16 GB and 32 GB models</li>
        <li className="iphone_descrition">ratio and 1136 x 640-pixel resolution.</li>
       </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale;
