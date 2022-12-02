import React from "react";
import Category from "./Category/Category";
import Header from "./Header/Header";
import Search from "./Search/Search";
import Section1 from "./Section/Section1";
import Explore from "./Explore/Explore";
import Sale from "./Sale/Sale";
import MotionDiv from "./MotionDiv/MotionDiv";
import ProductNavigation from "./Products/ProductNavigation";
import { useState } from "react";
import { CartCounter } from "./Context/Context";
import Modal from "./Modal/Modal";
import { data } from "./Data";
import CheckOut from "./CheckOut/CheckOut";


function Pages() {
  const [eachCartCounter, setEachCartCounter] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [myData, setMyData] = useState(data);
  const [checkOut,setCheckOut]=useState(false)

  return (
    <CartCounter.Provider value={{ eachCartCounter, setEachCartCounter }}>
     {checkOut?(<CheckOut listItems={listItems}/>): (<> <Header />
      <Search showModal={showModal} setShowModal={setShowModal} />

      <Section1 />
      <Category />
      <ProductNavigation
        myData={myData}
        setMyData={setMyData}
        listItems={listItems}
        setListItems={setListItems}
      />
      <Explore />
      <Sale />
      <MotionDiv />
 
      {/* <ProductNavigation
        myData={myData}
        setMyData={setMyData}
        listItems={listItems}
        setListItems={setListItems}
      /> */}
      <Modal
      setCheckOut={setCheckOut}
      checkOut={checkOut}
        listItems={listItems}
        setListItems={setListItems}
        showModal={showModal}
        setShowModal={setShowModal}
      /></>)}
    </CartCounter.Provider>
  );
}

export default Pages;
