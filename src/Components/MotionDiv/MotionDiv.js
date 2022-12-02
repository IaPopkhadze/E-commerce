import React from "react";
import { motion } from "framer-motion";
import Motion1 from "../../Assets/motion1.jpg";
import Motion2 from "../../Assets/motion2.jpg";
import Motion3 from "../../Assets/motion3.jpg";
import Motion4 from "../../Assets/motion4.jpg";
import './motionDiv.css'
function MotionDiv() {
  return (
    <div className="motionCardContainer">
      <div className="motionSection1">
        <div className="motionLine"></div>
        <motion.div
          initial={{ x: 500 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 3,
          }}
          className="motionContent"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magnam
          dignissimos nulla odit veritatis, deleniti inventore reiciendis,
          dolorum, aspernatur delectus nihil. Dicta cum impedit eius eligendi
          eveniet aliquam nemo laudantium.
        </motion.div>
      </div>

      <div className="motionSection2">
        <div className="motionCard">
          <motion.div
            initial={{ x: -500 }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 2,
            }}
            className="motionCardImage"
          >
            <img src={Motion1} alt="" />
          </motion.div>
          <motion.div
            initial={{ x: 500 }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 2,
            }}
            className="motionCardContent"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              consequuntur beatae! Alias animi non tempora itaque inventore?
              Maxime molestiae tempora perferendis quia quo odit expedita natus,
              deleniti corporis voluptatibus repellat! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Sit possimus quia repellat
              ipsam officia nam repudiandae sint consequatur rerum nisi?
            </p>
            <div className="motionTwoLittleBoxes">
              <div className="motionTwoLittleBoxes_1">SHOW ME MORE</div>
              <div className="motionTwoLittleBoxes_2">CHECK DETAIL</div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="motionSection2 ">
        <div className="motionCard secondBox">
          <motion.div
            initial={{ x: -500 }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 2,
            }}
            className="motionCardContent secondBoxContent"
          >
            <p className="secondContent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              consequuntur beatae! Alias animi non tempora itaque inventore?
              Maxime molestiae tempora perferendis quia quo odit expedita natus,
              deleniti corporis voluptatibus repellat! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Sit possimus quia repellat
              ipsam officia nam repudiandae sint consequatur rerum nisi?
            </p>
            <div className="motionTwoLittleBoxes">
              <div className="motionTwoLittleBoxes_1 secondBtn_1 ">
                SHOW ME MORE
              </div>
              <div className="motionTwoLittleBoxes_2 secondBtn_2">
                CHECK DETAIL
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 500 }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 2,
            }}
            className="motionCardImage"
          >
            <img src={Motion2} alt="" />
          </motion.div>
        </div>
      </div>

      <div className="motionSection2">
        <div className="motionCard">
          <motion.div
            initial={{ x: -500 }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 2,
            }}
            className="motionCardImage"
          >
            <img src={Motion3} alt="" />
          </motion.div>
          <motion.div
            initial={{ x: 500 }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 2,
            }}
            className="motionCardContent"
          >
            <p className="thirdContent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              consequuntur beatae! Alias animi non tempora itaque inventore?
              Maxime molestiae tempora perferendis quia quo odit expedita natus,
              deleniti corporis voluptatibus repellat! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Sit possimus quia repellat
              ipsam officia nam repudiandae sint consequatur rerum nisi?
            </p>
            <div className="motionTwoLittleBoxes">
              <div className="motionTwoLittleBoxes_1 thirdBtn_1">
                SHOW ME MORE
              </div>
              <div className="motionTwoLittleBoxes_2 thirdBtn_2">
                CHECK DETAIL
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="motionSection2">
        <div className="motionCard">
          <motion.div
            initial={{ x: -500 }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 2,
            }}
            className="motionCardContent lastBox"
          >
            <p className="fourthContent lastBoxContent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              consequuntur beatae! Alias animi non tempora itaque inventore?
              Maxime molestiae tempora perferendis quia quo odit expedita natus,
              deleniti corporis voluptatibus repellat! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Sit possimus quia repellat
              ipsam officia nam repudiandae sint consequatur rerum nisi?
            </p>
            <div className="motionTwoLittleBoxes">
              <div className="motionTwoLittleBoxes_1 fourthBtn_1">
                SHOW ME MORE
              </div>
              <div className="motionTwoLittleBoxes_2 fourthBtn_2">
                CHECK DETAIL
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 500 }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 2,
            }}
            className="motionCardImage"
          >
            <img src={Motion4} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default MotionDiv;
