import React from "react";
import "./modal.css";
import Img from "../../Assets/batumi.jpg";
import { GrClose } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import { useContext } from "react";
import { CartCounter } from "../Context/Context";
import { data } from "../Data";
import { useRef } from "react";
import { useEffect } from "react";

function Modal({
  
  setCheckOut,
  checkOut,
  myRef,
  myData,
  setMyData,
  listItems,
  setListItems,
  showModal,
  setShowModal,
}) {  const { eachCartCounter, setEachCartCounter } = useContext(CartCounter);
  
  const [priceCounter, setPriceCounter] = useState(1);
 const handleTotalRemove=()=>{
  setListItems([])
  setEachCartCounter(0)

 }
  const handleIncrease = (id) => {
    const newAmount = listItems.map((element) =>
      element.id === id
        ? {
            ...element,
            quantity: element.quantity + 1,
          }
        : element
    );
    setListItems(newAmount);
  };

  const handleDecrease = (id, itemPrice) => {
    const newAmount = listItems.map((element) =>
      element.id === id && element.quantity > 1
        ? { ...element, quantity: element.quantity - 1 }
        : element
    );
    setListItems(newAmount);
    console.log(`this is ${newAmount}`);
  };



  const handleRemove = (id, element) => {
    const removedElement = listItems.filter((element) => element.id !== id);
    setListItems(removedElement);
    // listItems.find((element) => element.id === id).isSelected = false;
    //  const updatedList = myData.map((item) =>
    //     item.id === id ? { ...item, isSelected: false } : item
    //   );
    // setMyData(updatedList);
    setEachCartCounter(eachCartCounter - 1);
  };

  return (
    <div>
      {showModal ? (
        <div className="overlay">
          <div className="modal_container">
            <div className="modalHeader">
              <p className="shopping_cart_title">Your Shopping Cart</p>
              <GrClose
                className="closeBtn"
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </div>
            {listItems?.map((element) => {
              return (
                <div key={element.id} className="shopping_cart_item">
                  <div className="shopping_cart_image_container">
                    <img
                      className="shopping_cart_image"
                      src={element.img}
                      alt="image"
                    />
                  </div>
                  <div className="shopping_cart_content">
                    <p className="item_name">{element.title}</p>
                    <p className="item_description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa dolores placeat suscipit praesentium dolore
                      reiciendis
                    </p>
                  </div>
                  <div className="quantity">
                    <button
                      className="decrease"
                      onClick={() => handleDecrease(element.id, element.price)}
                    >
                      <AiOutlineMinus />
                    </button>
                    <span className="value">{element.quantity}</span>
                    <button
                      className="increase"
                      onClick={() => handleIncrease(element.id, element.price)}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <div className="item_price">
                    ${element.price * element.quantity}
                  </div>
                  <div className="remove">
                    <GrClose
                      onClick={() => handleRemove(element.id, element)}
                      className="close_icon"
                    />
                  </div>
                </div>
              );
            })}

            {listItems.length ? (
              <div className="payment">
                <div className="totalItemQuantity">
                  Subtotal:{" "}
                  {listItems.reduce(
                    (first, second) => first + second.price * second.quantity,
                    0
                  )}{" "}
                   Gel
                </div>
                <div className="modalButtons">
                <button  onClick={handleTotalRemove} className="clearCart">Clear Cart</button>
                <button onClick={()=>setCheckOut(true)} className="checkOut">Checkout</button>
                </div>
              </div>
            ):(<div className="emptyCart"> <p>Your Shopping Cart Is Empty</p></div>)}

          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;
