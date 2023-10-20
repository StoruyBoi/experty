import React from "react";
import "../Style/Footer.css";
import { BiLogoTwitter } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaPhoneVolume } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { BsFillSendFill } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-wraaper">
          <div className="fot-con1">
            <h1>Experty</h1>
            <p>
              We combine technical skills with creativity to <br /> improve
              client's online presence. these <br /> agaencies typically provide
              a diverse <br /> set of services.
            </p>
            <div className="social-links">
              <BiLogoTwitter />
              <AiFillInstagram />
              <BiLogoFacebookCircle />
            </div>
          </div>
          <div className="fot-con1">
            <h1>Information</h1>
            <div className="infor-sub-cont">
              <FaPhoneVolume />
              <p>+(444-876-907-340)</p>
            </div>
            <div className="infor-sub-cont">
              <BiMessageDetail />
              <p>alomtlmedia@gamil.com</p>
            </div>
            <div className="infor-sub-cont">
              <ImLocation2 />{" "}
              <p>
                2972Westheimer Rd.Santa <br />
                Ana,IIIinois 85486
              </p>
            </div>
          </div>
          <div className="fot-con1">
            <h1>Subscribe Now</h1>
            <div className="sub-font-cont">
              <input type="email" placeholder="Email Address" />{" "}
              <button>
                <BsFillSendFill />
              </button>
            </div>
            <div className="input-cont">
              <input type="checkbox" name="" id="" />{" "}
              <p>by signing p, you agree to recieve mail</p>
            </div>
          </div>
          
        </div>
        <div className="footer-last-section">
            <div className="footer-last-wraaper">
              <p>
                2023 <b>Xebrand.</b> All Rights Reserved.
              </p>
              <ul>
                <li>
                  <a href="#">WHO WE ARE </a>
                </li>
                <li>
                  <a href="#">OUR WORK</a>
                </li>
                <li>
                  <a href="#">OUR PARTNERS</a>
                </li>
                <li>
                  <a href="#">CAPABILITIES</a>
                </li>
              </ul>
            </div>
          </div>
      </footer>
    </>
  );
}
