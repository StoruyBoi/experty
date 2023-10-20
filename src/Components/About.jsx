import React from "react";
import Buttons from "../Tools/Buttons";
import { RiPaintFill } from "react-icons/ri";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa";
import { SiMarketo } from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";
import "../Style/About.css";
export default function About() {
  return (
    <>
      <section className="about">
        <div className="about-wraaper">
          <div className="about-cont1">
            <p>WHAT WE DO</p>
            <div className="about-cont1_box">
              <h1>
                Our included <br />
                services.
              </h1>
              <p>
                We helping clients to create with <br />
                our talented expert.
              </p>
              <Buttons />
            </div>
          </div>
          <div className="about-cont2">

<div className="main-cont1">

            <div className="cont2-wrapper-1">
              <div className="cont2-box1">
                <div className="cont-cirlce-box">
                  <FaLayerGroup />
                </div>
                <div className="cont2-content">
                  <h1>Arts & Animation</h1>
                  <p>
                    We helping clients to create with <br /> our talented
                    expert.
                  </p>
                </div>
                <BsArrowRight />
              </div>
            </div>




            <div className="cont2-wrapper-1">
              <div className="cont2-box1">
                <div className="cont-cirlce-box">
                  <BsFillLightningChargeFill />
                </div>
                <div className="cont2-content">
                  <h1>Branding</h1>
                  <p>
                    We helping clients to create with <br /> our talented
                    expert.
                  </p>
                </div>
                <BsArrowRight />
              </div>
            </div>

            </div>



            <div className="cont2-wrapper-2">
                






            <div className="cont2-wrapper-1">
              <div className="cont2-box1">
                <div className="cont-cirlce-box">
                  <RiPaintFill />
                </div>
                <div className="cont2-content">
                  <h1>UI/UX Design</h1>
                  <p>
                    We helping clients to create with <br /> our talented
                    expert.
                  </p>
                </div>
                <BsArrowRight />
              </div>
            </div>








            <div className="cont2-wrapper-1">
              <div className="cont2-box1">
                <div className="cont-cirlce-box">
                  <SiMarketo />
                </div>
                <div className="cont2-content">
                  <h1>Marketing</h1>
                  <p>
                    We helping clients to create with <br /> our talented
                    expert.
                  </p>
                </div>
                <BsArrowRight />
              </div>
            </div>




            </div>
            </div>
          </div>
      
      </section>
    </>
  );
}
