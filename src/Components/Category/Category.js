import React from "react";
import "./category.css";
import ClothesIcon from "../../Assets/clothesIcon.png";

import FootwearIcon from "../../Assets/FootwearIcon.png";
import jewelryIcon from "../../Assets/jewelryIcon.png";
import ParfumeIcon from "../../Assets/ParfumeIcon.png";
import CosmeticIcon from "../../Assets/CosmeticIcon.png";
import GlassesIcon from "../../Assets/GlassesIcon.png";
import BagIcon from "../../Assets/BagIcon.png";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

import bestseller1 from "../../Assets/bestseller1.png";
import bestseller2 from "../../Assets/bestseller2.png";

import bestseller3 from "../../Assets/bestseller3.png";
import bestseller4 from "../../Assets/bestseller4.png";
import bestseller5 from "../../Assets/bestseller5.png";

import bestseller6 from "../../Assets/bestseller6.png";
import bestseller7 from "../../Assets/bestseller7.png";
import bestseller8 from "../../Assets/bestseller8.png";
import bestseller9 from "../../Assets/bestseller9.png";
import bestseller10 from "../../Assets/bestseller10.png";
import bestseller11 from "../../Assets/bestseller11.png";
import bestseller12 from "../../Assets/bestseller12.png";

function Category() {
  const [clothes, setClothes] = useState(false);
  const [footwear, setFootwear] = useState(false);
  const [jewelry, setJewelry] = useState(false);
  const [perfume, setPerfume] = useState(false);
  const [cosmetic, setCosmetic] = useState(false);
  const [glasses, setGlasses] = useState(false);
  const [bags, setBags] = useState(false);
  return (
    <div className="category">
      <div className="category_Container">
        <h2 className="categoryTitle">Category</h2>

        <div className="Clothes category_item">
          <div className="visible_child">
            <p>
              <img className="categoryIcons" src={ClothesIcon} alt="" /> Clothes
            </p>
            <div className="plusMinus" onClick={() => setClothes(!clothes)}>
              {clothes ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>
          {clothes ? (
            <div className="hidden_child">
              <ul>
                <li>
                  <span>Shirt</span> <span>300</span>
                </li>
                <li>
                  <span>Shorts & Jeans</span> <span>60</span>
                </li>
                <li>
                  <span>Jackets</span> <span>245</span>
                </li>
                <li>
                  <span>Dress & Frock</span> <span>18</span>
                </li>
              </ul>
            </div>
          ) : null}
        </div>

        <div className="Footwear category_item">
          <div className="visible_child">
            <p>
              <img className="categoryIcons" src={FootwearIcon} alt="" />{" "}
              Footwear
            </p>
            <div className="plusMinus" onClick={() => setFootwear(!footwear)}>
              {footwear ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>
          {footwear ? (
            <div className="hidden_child">
              <ul>
                <li>
                  <span>Sports</span> <span>30</span>
                </li>
                <li>
                  <span>Formal </span> <span>689</span>
                </li>
                <li>
                  <span>SAfety Shoes</span> <span>45</span>
                </li>
                <li>
                  <span>Casual</span> <span>18</span>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        <div className="jewelry category_item">
          <div className="visible_child">
            <p>
              <img className="categoryIcons" src={jewelryIcon} alt="" /> Jewelry
            </p>
            <div className="plusMinus" onClick={() => setJewelry(!jewelry)}>
              {jewelry ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>
          {jewelry ? (
            <div className="hidden_child">
              <ul>
                <li>
                  <span>Earrings</span> <span>30</span>
                </li>
                <li>
                  <span>Couple Rings</span> <span>698</span>
                </li>
                <li>
                  <span>Neckles</span> <span>55</span>
                </li>
                <li>
                  <span>Earrings & Neckles</span> <span>18</span>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        <div className="parfume category_item">
          <div className="visible_child">
            <p>
              <img className="categoryIcons" src={ParfumeIcon} alt="" /> Perfume
            </p>
            <div className="plusMinus" onClick={() => setPerfume(!perfume)}>
              {perfume ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>
          {perfume ? (
            <div className="hidden_child">
              <ul>
                <li>
                  <span>Clothes Parfume</span> <span>300</span>
                </li>
                <li>
                  <span>Deodorant</span> <span>60</span>
                </li>
                <li>
                  <span>Another parfume</span> <span>245</span>
                </li>
                <li>
                  <span>Expensive Parfume</span> <span>18</span>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        <div className="Cosmetic category_item">
          <div className="visible_child">
            <p>
              <img className="categoryIcons" src={CosmeticIcon} alt="" />{" "}
              Cosmetic
            </p>
            <div className="plusMinus" onClick={() => setCosmetic(!cosmetic)}>
              {cosmetic ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>
          {cosmetic ? (
            <div className="hidden_child">
              <ul>
                <li>
                  <span>Shampoo</span> <span>30</span>
                </li>
                <li>
                  <span>Sunscreen  </span> <span>60</span>
                </li>
                <li>
                  <span>Body Wash</span> <span>25</span>
                </li>
                <li>
                  <span>Make Up Kit</span> <span>8</span>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        <div className="Glasses category_item">
          <div className="visible_child">
            <p>
              <img className="categoryIcons" src={GlassesIcon} alt="" /> Glasses
            </p>
            <div className="plusMinus" onClick={() => setGlasses(!glasses)}>
              {glasses ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>
          {glasses ? (
            <div className="hidden_child">
              <ul>
                <li>
                  <span>Sunglasses</span> <span>110</span>
                </li>
                <li>
                  <span>Lenses</span> <span>60</span>
                </li>
                <li>
                  <span>Modern Glasses</span> <span>25</span>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        <div className="Bags category_item">
          <div className="visible_child">
            <p>
              <img className="categoryIcons" src={BagIcon} alt="" /> Bags &
              Luggage
            </p>
            <div className="plusMinus" onClick={() => setBags(!bags)}>
              {bags ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>
          {bags ? (
            <div className="hidden_child">
              <ul>
                <li>
                  <span> Shopping Bags</span> <span>30</span>
                </li>
                <li>
                  <span>Purse</span> <span>6</span>
                </li>
                <li>
                  <span>Gym Backkpack</span> <span>45</span>
                </li>
                <li>
                  <span>Wallet</span> <span>15</span>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
      <div className="bestSellerContainer">
        <div className="lines">
          <div className="line1"></div>
          <div className="contentBetweenLines">Best Selling Products</div>
          <div className="line2"></div>
        </div>
        <div className="bunchOfItems">
          <div className="bestSellerItem">
            <img src={bestseller1} alt="" />
            <div className="content">
              <p className="title"> Winter weater for Women</p>
              <p className="text">Sport</p>
              <div className="priceContainer">
                <p className="newPrice">$48.00</p>
                <p className="oldPrice">$60.50</p>
              </div>
            </div>
          </div>
          <div className="bestSellerItem">
            <img src={bestseller2} alt="" />
            <div className="content">
              <p className="title">Heels Shoes </p>
              <p className="text">Sport</p>
              <div className="priceContainer">
                <p className="newPrice">$55.00</p>
                <p className="oldPrice">$110.50</p>
              </div>
            </div>
          </div>
          <div className="bestSellerItem">
            <img src={bestseller3} alt="" />
            <div className="content">
              <p className="title">Jacket for men</p>
              <p className="text">Sport</p>
              <div className="priceContainer">
                <p className="newPrice">$55.00</p>
                <p className="oldPrice">$110.50</p>
              </div>
            </div>
          </div>
          <div className="bestSellerItem">
            <img src={bestseller4} alt="" />
            <div className="content">
              <p className="title">Travel Duffle Bag</p>
              <p className="text">Sport</p>
              <div className="priceContainer">
                <p className="newPrice">$233.00</p>
                <p className="oldPrice">$222.50</p>
              </div>
            </div>
          </div>
          <div className="bestSellerItem">
            <img src={bestseller5} alt="" />
            <div className="content">
              <p className="title">Personal Computer</p>
              <p className="text">Sport</p>
              <div className="priceContainer">
                <p className="newPrice">$55.00</p>
                <p className="oldPrice">$110.50</p>
              </div>
            </div>
          </div>
          <div className="bestSellerItem">
            <img src={bestseller6} alt="" />
            <div className="content">
              <p className="title">Hat for Man</p>
              <p className="text">Sport</p>
              <div className="priceContainer">
                <p className="newPrice">$11.00</p>
                <p className="oldPrice">$5.50</p>
              </div>
            </div>
          </div>
          <div className="bestSellerItem">
            <img src={bestseller7} alt="" />
            <div className="content">
              <p className="title">Wall Clock</p>
              <p className="text">Sport</p>
              <div className="priceContainer">
                <p className="newPrice">$23.00</p>
                <p className="oldPrice">$12.50</p>
              </div>
            </div>
          </div>
          <div className="bestSellerItem">
            <img src={bestseller8} alt="" />
            <div className="content">
              <p className="title">Yellow Socks</p>
              <p className="text">Sport</p>
              <div className="priceContainer">
                <p className="newPrice">$55.00</p>
                <p className="oldPrice">$110.50</p>
              </div>
            </div>
          </div>
          <div className="bestSellerItem">
            <img src={bestseller9} alt="" />
            <div className="content">
              <p className="title">Pen and Pencil</p>
              <p className="text">Sport</p>
              <div className="priceContainer">
                <p className="newPrice">$55.00</p>
                <p className="oldPrice">$22.50</p>
              </div>
            </div>
          </div>
          <div className="bestSellerItem">
            <img src={bestseller10} alt="" />
            <div className="content">
              <p className="title">Running and Treckking Shoes</p>
              <p className="text">Sport</p>
              <div className="priceContainer">
                <p className="newPrice">$322.00</p>
                <p className="oldPrice">$23.50</p>
              </div>
            </div>
          </div>
          <div className="bestSellerItem">
            <img src={bestseller11} alt="" />
            <div className="content">
              <p className="title">Sweater for men</p>
              <p className="text">Sport</p>
              <div className="priceContainer">
                <p className="newPrice">$234.00</p>
                <p className="oldPrice">$11.50</p>
              </div>
            </div>
          </div>
          <div className="bestSellerItem">
            <img src={bestseller12} alt="" />
            <div className="content">
              <p className="title">Orange watch</p>
              <p className="text">Sport</p>
              <div className="priceContainer">
                <p className="newPrice">$234.00</p>
                <p className="oldPrice">$23.50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
