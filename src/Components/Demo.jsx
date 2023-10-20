import React from "react";
import { BsCheckAll } from "react-icons/bs";
import Buttons from "../Tools/Buttons";
import dmeosaure from "../source/dmeosaure.jpg";
import pp1 from "../source/pp1.jpg";
import pp2 from "../source/pp2.jpg";
import pp3 from "../source/pp3.jpg";
import pp4 from "../source/pp4.jpg";
import pp5 from "../source/pp5.jpg";
import pp6 from "../source/pp6.jpg";
import "../Style/Demo.css";
export default function Demo() {
  return (
    <>
      <section className="demo">
        <div className="demo-first-wraaper">
          <div className="demo-contq">
            <div className="demo-title">
              <h1>
                We beliver that our works <br />
                can contribute to a <br />
                better world.
              </h1>
              <p>
                Best solution in a place where you can get your all problem{" "}
                <br />
                solution to your problem best solution.
              </p>
            </div>
            <div className="demo-list">
              <div className="demo-box1">
                <span>
                  {" "}
                  <BsCheckAll /> <h1>Advanced Analytics</h1>
                </span>
                <p>
                  Best solution in a place where you can <br /> get your all
                  problem solution.
                </p>
              </div>
              <div className="demo-box1">
                <span>
                  {" "}
                  <BsCheckAll /> <h1>Work faster</h1>
                </span>
                <p>
                  Best solution in a place where you can <br /> get your all
                  problem solution.
                </p>
              </div>
            </div>
            <div className="demo-buton-box">
              <Buttons /> <a href="#">100% Satisfaction Guaranteed</a>
            </div>
          </div>
          <div className="dmeo-img-seciton">
            <div className="imgseciotn">
              {" "}
              <img src={dmeosaure} alt="" />{" "}
            </div>
            <div className="demo-square"></div>
          </div>
        </div>
        <div className="second-wrappper">
          <div className="main-content-damo">
            <h1>
              Experty is for Everyone. <br />
              Easy and Free
            </h1>
            <Buttons />
          </div>
          <div className="group-profile">
          <div className="grp-1">
            <div className="pprofile_1 i-pp1">
              <img src={pp1} alt="" />
              <div className="profile-user">
                <h1>suzeen Goofy</h1>
                <p>UX Designer</p>
              </div>    
            </div>
            <div className="pprofile_1 i-pp2">
              <img src={pp2} alt="" />
            </div>
            <div className="pprofile_1 i-pp3">
              <img src={pp3} alt="" />
            </div>
          </div>
          <div className="grp-2">
          <div className="pprofile_1 i-pp4">
              <img src={pp4} alt="" />
             
            </div>
            <div className="pprofile_1 i-pp5">
              <img src={pp5} alt="" />
            </div>
            <div className="pprofile_1 i-pp6">
              <img src={pp6} alt="" />
              <div className="profile-user">
                <h1>Alia Zeneifer</h1>
                <p>UI Designer</p>
              </div>    
            </div>
          </div>
        </div>
          <div className="semi-circle-wraaper">
            <div className=" checking s-first"></div>
            <div className=" test s-second"></div>
            <div className=" test s-third"></div>
            <div className=" test s-fourth"></div>
          </div>
          
        </div>
        
      </section>
    
    </>
  );
}
