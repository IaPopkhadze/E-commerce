import React from "react";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterLine } from "react-icons/ri";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import {IoIosArrowDown} from 'react-icons/io'
import './header.css'
function Header() {
  return (
    <div className="header">
      <div className="h_left">
        <a href="https://www.instagram.com/iako_popkhadze/" target="_blank">
          <BsInstagram className="h_icon"/>
        </a>
        <a href="https://twitter.com/?lang=en" target="_blank">
          <RiTwitterLine className="h_icon"/>
        </a>

        <a
          href="https://www.linkedin.com/in/ia-fofkhadze-b79b11244/"
          target="_blank"
        >
         
          <AiOutlineLinkedin className="h_icon"/>
        </a>

        <a href="https://www.facebook.com/" target="_blank">
          <FiFacebook className="h_icon" />
        </a>
      </div>
      <div className="h_center">
        <span>FREE SHIPPING THIS WEEK ORDER OVER - $55</span>
      </div>
      <div className="h_right">
        <div className="h_right_item"><span>USD $</span> <span><IoIosArrowDown/></span></div>
        <div className="h_right_item"><span>ENGLISH</span> <span><IoIosArrowDown/></span></div>
      </div>
    </div>
  );
}

export default Header;
