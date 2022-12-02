import React, { useState } from "react";
import "./productNavigation.css";
import { data } from "../Data";
import { AiFillStar } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { CartCounter } from "../Context/Context";
function ProductNavigation({ myData, setMyData, listItems, setListItems }) {
  const { eachCartCounter, setEachCartCounter } = useContext(CartCounter);

  const handleClick = (element, id) => {
    // listItems.push(element);
    setListItems([...listItems, element]);
    // myData.find((element) => element.id === id).isSelected = true;
    // const updatedData = myData.map(item => item.id === id? {...item, isSelected: true } : item)
    // setMyData(updatedData)

    setEachCartCounter(eachCartCounter + 1);
  };

  return (
    <div className="productCardContainer">
      {myData.map((element) => {
        const foundInCart = listItems.find((list) => list.id === element.id);

        return (
          <div key={element.id} className="productCard">
            <div className="product_image_container">
              <img src={element.img} alt="" />
            </div>
            <h2 className="productName">{element.title}</h2>
            <div className="stars">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="price_cart">
              <p className="productPrice">${element.price}</p>
              {foundInCart ? (
                <span className="added">Added</span>
              ) : (
                <span
                  onClick={() => handleClick(element, element.id)}
                  className="productCart"
                >
                  <BsCart4 />
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductNavigation;
