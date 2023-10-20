import React from "react";
import "../Style/Main.css";
import p1 from "../source/p1.jpg"
import p2 from "../source/p2.jpg"
import p3 from "../source/p3.jpg"
import p4 from "../source/p4.jpg"
import p5 from "../source/p5.jpg"

import { AiOutlineArrowRight } from "react-icons/ai";
import { PiCircleNotchThin } from "react-icons/pi";
import Buttons from "../Tools/Buttons";
export default function Content() {
  return (
    <>
      <div className="content-wrapper">
        <div className="content-container_1">
          <div className="cont_1">
            <h1>1.2+ million</h1>
            <p>Customer</p>
          </div>
          <div className="cont_2">
            <h1>
              Building digital <br />
              products and <br />
              experience.
            </h1>
            <p>
              Best solution in a place where you can get <br />
              your all buisness with simple way.
            </p>
          </div>
          <div className="cont-3">
        <Buttons/>
      
           <div className="circle">
           <a href="#">View Plans</a>
           <div className="oval"></div>
           </div>
          </div>
        </div>
        
        <div className="content-container_2">
      
          <div className="card_1">
            <div className="imgae_1 img_grp"><img src={p1} alt="" /></div>
            <div className="imgae_2 img_grp"><img src={p3} alt="" /></div>
          </div>
          <div className="card_2">
            {" "}
            <span id="line_one"></span>
          <span id="line_two"></span>
            <div className="imgae_3 img_grp"><img src={p3} alt="" /></div>
            <div className="imgae_4 img_grp"><img src={p1} alt="" /></div>
          </div>
        </div>
      </div>
    </>
  );
}
