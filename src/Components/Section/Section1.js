import React from 'react'
import './section1.css'
import BackgroundImage from '../../Assets/backgroundPicture.jpg'
function Section1() {
  return (
    <div className='section1'>
     <div className="s_image">
        <img src={BackgroundImage} alt="" />
        <div className="s_content">
            <span  className='transparent'>Trending Items</span>
            <span className='transparent'>All you  need in one site</span>
            <span>Women's collection <span className='and'>&</span> Men's collection</span>
          <button className='s_content_btn' >Shop now</button>
        </div>
     </div>

    </div>
  )
}

export default Section1