import React, { useState } from "react";
import "../Style/Main.css";
import { BsChevronDown } from "react-icons/bs";
export default function Header() {
  const [showMediaIcons,setShowMediaIcons]=useState(false);
  return (
    <>
      {/* main header section */}
      <nav>
        <h1>Experty</h1>

        <ul className= {showMediaIcons ? "mobile-navlinks":"nav-links "}  >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a id="updown" href="#">
              Service
              <BsChevronDown />
            </a>
            <div className="drop_down">
              <div className="drop_down-wrapper">
                <ul>
                  <li>
                    <a href="#">Web development</a>
                  </li>
                  <li>
                    <a href="#">Website design</a>
                  </li>
                  <li>
                    <a href="#">Block chain</a>
                  </li>
                  <li>
                    <a href="#">Content writing</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <div className="button_arr">
          <button>Sing up</button>
        </div>
        </ul>
        <div onClick={()=>setShowMediaIcons(!showMediaIcons)} className="ham-burger">
          <div className="bar1"></div>
          <div className="bar1"></div>
          <div className="bar1"></div>
        </div>
   
      </nav>
    </>
  );
}
