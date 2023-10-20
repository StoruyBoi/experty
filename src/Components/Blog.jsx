import React from "react";
import "../Style/Blog.css";
import b1 from "../source/b1.jpg";
import b2 from "../source/b2.jpg";
export default function Blog() {
  return (
    <>
      <section className="blog">
        <div className="blog-wraaper">
          <div className="blog-cont">
            <div className="Heading-blog">
              {" "}
              <h1>Latest News from our Blog</h1>{" "}
              <div className="blog-line"></div>
            </div>
            <div className="blog-contnetn">
              <div className="blog-cont1">
                <img src={b1} alt="" />
                <div className="blog-cont1-cont">
                  <hr />
                  <p>January 13,2022 | Fintech News</p>
                  <h1>
                    Finance all type of solution are <br />
                    available here.
                  </h1>
                </div>
              </div>
              <div className="blog-cont1">
                <img src={b2} alt="" />
                <div className="blog-cont1-cont">
                  <hr />
                  <p>January 13,2022 | Fintech News</p>
                  <h1>
                    Build your great business site <br /> simply better.
                  </h1>
                </div>
              </div>
            </div>
          </div>
         <div className="update-seciton">
            <div className="update-wraaper">
                <h1>To get all updates to our agency</h1>
                <p>We are providing world top classses hositng services for our global <br />customers, see our serbices.</p>
                <div className="update-button"><button>Suscribe Now</button></div>
            </div>
         </div>
        </div>
      </section>
    </>
  );
}
