import React from "react";
import "./checkOut.css";
import Buying from '../../Assets/buying.gif'
import { useState } from "react";
import Pages from "../Pages";
function CheckOut({ listItems }) {
  const [next, setNext] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [backToHome, setBackToHome]=useState(false);
  
  console.log("this is conskd,", listItems);
  return (
    <>
    {backToHome?(<Pages/>):( <div className="checkout">
      {successful ? (
        <div className="successful">
         
          <p>Thank you for your purchase !</p>
          <img className="buyingImg" src={Buying} alt="" />
          <div className="backToHome">
            <h4 onClick={()=>setBackToHome(true)}>BACK TO HOME</h4>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <div className="checkOutContainer">
            <div className="checkOutTitle">Checkout</div>
            <div className="shipping_payment">
              <div className="shipping_circle">1</div>
              <div className="shipping_adress_title">Shipping adress</div>
              <div className="checkoutLine"></div>
              <div
                style={next ? { backgroundColor: "green" } : null}
                className="payment_circle"
              >
                2
              </div>
              <div className="payment_details_title">Payment details</div>
            </div>

            {next ? (
              <>
                {" "}
                <div className="payment_details_container">
                  <div className="summary_title">Order Summary</div>

                  {listItems?.map((element) => {
                    return (
                      <div className="order_summary_item">
                        <div className="order_summary_left">
                          <p className="item_name">{element.title}</p>
                          <p className="qty">Quantity: {element.quantity}</p>
                        </div>
                        <div className="order_summary_right">
                          <p>{element.price} $</p>
                        </div>
                      </div>
                    );
                  })}
                  <div className="subtotal">
                    SUBTOTAL:{"  "}
                    {listItems.reduce(
                      (first, second) => first + second.price * second.quantity,
                      0
                    )}{" "}
                    $
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="shipping_adress_container">
                  <div className="shipping_adress_container_1">
                    <p>Shipping adress</p>
                    <input
                      className="firstName"
                      type="text"
                      placeholder="First name *"
                      required
                    />
                    <input
                      className="adress"
                      type="text"
                      placeholder="Address line 1 *"
                      required
                    />
                    <input
                      className="city"
                      type="text"
                      placeholder="City *"
                      required
                    />

                    <select
                      name=""
                      id=""
                      className="country"
                      placeholder="Shipping Country"
                    >
                      <option value="Georgia">Shipping Country</option>
                      <option value="Georgia">Georgia</option>
                      <option value="">Belgium</option>
                      <option value="Belgium">France</option>
                      <option value="	United States"> United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Greece">Greece</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Netherlands">Netherlands</option>
                    </select>
                    <select
                      name=""
                      id=""
                      className="options"
                      placeholder="Shipping Options"
                    >
                      <option value="">Shipping Options</option>
                      <option value="">International - ($10.00)</option>
                      <option value="">International - ($40.00)</option>
                      <option value="">International - ($14.00)</option>
                      <option value="	"> International - ($12.00) </option>
                      <option value=" ">International - ($14.00)</option>
                    </select>
                  </div>
                  <div className="shipping_adress_container_2">
                    <input type="text" placeholder="Last name *" required />
                    <input type="text" placeholder="Email *" required />
                    <input
                      type="text"
                      placeholder="Zip / Postal code *"
                      required
                    />
                    <select>
                      <option value="">Service 1</option>
                      <option value="">Service 2</option>
                      <option value="">Service 3</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            <div className="checkOutBtns">
              {next ? (
                <div onClick={() => setSuccessful(true)} className="pay">
                  Pay
                </div>
              ) : (
                <>
           
                  <div className="next" onClick={() => setNext(true)}>
                    <p>Next</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>)}
    {/* <div className="checkout">
      {successful ? (
        <div className="successful">
         
          <p>Thank you for your purchase !</p>
          <img className="buyingImg" src={Buying} alt="" />
          <div className="backToHome">
            <h4 onClick={()=>setBackToHome(true)}>BACK TO HOME</h4>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <div className="checkOutContainer">
            <div className="checkOutTitle">Checkout</div>
            <div className="shipping_payment">
              <div className="shipping_circle">1</div>
              <div className="shipping_adress_title">Shipping adress</div>
              <div className="checkoutLine"></div>
              <div
                style={next ? { backgroundColor: "green" } : null}
                className="payment_circle"
              >
                2
              </div>
              <div className="payment_details_title">Payment details</div>
            </div>

            {next ? (
              <>
                {" "}
                <div className="payment_details_container">
                  <div className="summary_title">Order Summary</div>

                  {listItems?.map((element) => {
                    return (
                      <div className="order_summary_item">
                        <div className="order_summary_left">
                          <p className="item_name">{element.title}</p>
                          <p className="qty">Quantity: {element.quantity}</p>
                        </div>
                        <div className="order_summary_right">
                          <p>{element.price} $</p>
                        </div>
                      </div>
                    );
                  })}
                  <div className="subtotal">
                    SUBTOTAL:{"  "}
                    {listItems.reduce(
                      (first, second) => first + second.price * second.quantity,
                      0
                    )}{" "}
                    $
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="shipping_adress_container">
                  <div className="shipping_adress_container_1">
                    <p>Shipping adress</p>
                    <input
                      className="firstName"
                      type="text"
                      placeholder="First name *"
                      required
                    />
                    <input
                      className="adress"
                      type="text"
                      placeholder="Address line 1 *"
                      required
                    />
                    <input
                      className="city"
                      type="text"
                      placeholder="City *"
                      required
                    />

                    <select
                      name=""
                      id=""
                      className="country"
                      placeholder="Shipping Country"
                    >
                      <option value="Georgia">Shipping Country</option>
                      <option value="Georgia">Georgia</option>
                      <option value="">Belgium</option>
                      <option value="Belgium">France</option>
                      <option value="	United States"> United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Greece">Greece</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Netherlands">Netherlands</option>
                    </select>
                    <select
                      name=""
                      id=""
                      className="options"
                      placeholder="Shipping Options"
                    >
                      <option value="">Shipping Options</option>
                      <option value="">International - ($10.00)</option>
                      <option value="">International - ($40.00)</option>
                      <option value="">International - ($14.00)</option>
                      <option value="	"> International - ($12.00) </option>
                      <option value=" ">International - ($14.00)</option>
                    </select>
                  </div>
                  <div className="shipping_adress_container_2">
                    <input type="text" placeholder="Last name *" required />
                    <input type="text" placeholder="Email *" required />
                    <input
                      type="text"
                      placeholder="Zip / Postal code *"
                      required
                    />
                    <select>
                      <option value="">Service 1</option>
                      <option value="">Service 2</option>
                      <option value="">Service 3</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            <div className="checkOutBtns">
              {next ? (
                <div onClick={() => setSuccessful(true)} className="pay">
                  Pay
                </div>
              ) : (
                <>
                  <div className="backToCart">
                    <p>Back to cart</p>
                  </div>
                  <div className="next" onClick={() => setNext(true)}>
                    <p>Next</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div> */}
    </>
    
  );
}

export default CheckOut;
