import React, { useState } from "react";
import "./search.css";
import { HiOutlineSearch } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart4 } from "react-icons/bs";
import {useContext} from 'react'
import {CartCounter} from '../Context/Context'

function Search({showModal,setShowModal}) {
 const {eachCartCounter,setEachCartCounter}=useContext(CartCounter)
 const handleModal=()=>{
  setShowModal(true)
 }
  return (
    <div className="search">
      <div className="s_left">IAKO</div>
      <div className="s_center">
        <div className="s_form">
          <input
            className="s_form_input"
            type="text"
            placeholder="Enter your product name..."
          />
          <span className="s_search_icon">
            <HiOutlineSearch />
          </span>
        </div>
      </div>
      <div className="s_right">
        <div className="s_right_personIcon">
          <BsPerson />
        </div>
        <div className="s_right_heartIcon">
          <IoIosHeartEmpty />
          <span className="heartCounter">0</span>{" "}
        </div>
        <div className="s_right_cartIcon">
          <BsCart4 onClick={handleModal}/>
          <span className="itemCounter">{eachCartCounter}</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
