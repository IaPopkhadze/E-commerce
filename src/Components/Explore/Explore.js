import React from "react";
import "./explore.css";
import Batumi  from '../../Assets/batumi.jpg'
import Berlin  from '../../Assets/berlin.jpg'
import Gdanski  from '../../Assets/gdanski.jpg'
import Orleans  from '../../Assets/orleans.jpg'
import Portefino  from '../../Assets/portefino.jpg'
import Stambul  from '../../Assets/stambul.jfif'
import Shanxai  from '../../Assets/shanxai.jpg'
import Amsterdam  from '../../Assets/amsterdami.jpg'
function Explore() {
  return (
    <div className="explore">
      <div className="exploreConatiner">
        <h1 className="exploreTitle">Explore By Location</h1>
        <p className="exploreText">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid quam
          accusamus fuga ut. Ullam perspiciatis voluptatem doloremque suscipit
          aliquam, eveniet fugiat rem! Consequuntur facilis, modi quos rerum hic
          accusantium eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ipsum dolorem, iste accusantium cupiditate neque omnis deleniti qui non amet?
        </p>
        <div className="parent_city_container">
            <div className="child_city_container">
              <img className="city_image" src={Batumi} alt="" />
              <div className="city_overlay">
                <h3>Batumi, Georgia</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugit.</p>
              </div>
            </div>
            <div className="child_city_container">
              <img className="city_image" src={Berlin} alt="" />
              <div className="city_overlay">
                <h3>Berlin, Germany</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugit.</p>
              </div>
            </div>
            <div className="child_city_container">
              <img className="city_image" src={Gdanski} alt="" />
              <div className="city_overlay">
                <h3>Gdansk, Poland</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugit.</p>
              </div>
            </div>
            <div className="child_city_container">
              <img className="city_image" src={Orleans} alt="" />
              <div className="city_overlay">
                <h3>Batumi, Georgia</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugit.ddddddddd</p>
              </div>
            </div>
            <div className="child_city_container">
              <img className="city_image" src={Portefino} alt="" />
              <div className="city_overlay">
                <h3>Portefino, Italy</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugit.</p>
              </div>
            </div>
            <div className="child_city_container">
              <img className="city_image" src={Stambul} alt="" />
              <div className="city_overlay">
                <h3>New Orleans, Louisiana</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugit.</p>
              </div>
            </div>
            <div className="child_city_container">
              <img className="city_image" src={Shanxai} alt="" />
              <div className="city_overlay">
                <h3>Shanghai, China</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugit.</p>
              </div>
            </div>
            <div className="child_city_container">
              <img className="city_image" src={Amsterdam} alt="" />
              <div className="city_overlay">
                <h3>Amsterdam, Netherlands</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugit.</p>
              </div>
            </div>
            

        </div>
      </div>
    </div>
  );
}

export default Explore;
