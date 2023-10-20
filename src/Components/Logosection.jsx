import React from "react";
import "../Style/Logosection.css";
import amazon from "../source/amazon.png";
import google from "../source/google.png";
import altassian from "../source/atlassian.png";
import apple from "../source/apple.png";
import square from "../source/square.jpg";
import intel from "../source/intel.png";
import Buttons from "../Tools/Buttons";

export default function Logosection() {
  return (
    <>
      <section className="logoSeciton">
        <div className="log-wraaper">
          <div className="logo-firstLevel">
            <p>Over 45k top class brand working with Unilab.</p>
            <div className="logo-img">
              <img src={amazon} alt="" />
              <img src={google} alt="" />
              <img src={altassian} alt="" />
              <img src={intel} alt="" />
              <img src={apple} alt="" />
            </div>
          </div>

          <div className="logo-secondLevel">
            <div className="logo-cony1">
              <div className="logo_square"></div>
              <div className="logo-section-banner">
                <img src={square} alt="" />
              </div>
            </div>
            <div className="logo-cont2">
              <h1>
                See why we are trusted <br /> the world over.
              </h1>
              <p>
                Best solution in a place where you cna get your all problem{" "}
                <br /> solution to your problem best solution in a place where
                you can <br /> get your all problem solution to your problem.
              </p>
              <div className="logopercenteage">
                <div className="per_first per">
                  <div className="nubmer">
                    <h1  className="tag">98%</h1>
                    <div className="line"></div>
                  </div>
                  <p>Successfull Done</p>
                </div>
                <div className="per_second per">
                  <div className="nubmer">
                    <h1 className="tag">26%</h1>
                    <div className="line"></div>
                  </div>
                  <p>
                    Less Email send <br />
                    and Recive
                  </p>
                </div>
                <div className="per_third per ">
                  <div className="nubmer">
                    <h1  className="tag">32%</h1>
                    <div className="line"></div>
                  </div>
                  <p>Global services</p>
                </div>
              </div>
           <div>   <Buttons/></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
