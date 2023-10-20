import React from "react";
import "../Style/Plan.css";
export default function Plan() {
  return (
    <>
      <section className="plan">
        <div className="plan-wraaper">
          <div className="plan-content">
            <h1>
              Choose the Best Plan <br /> that's for you
            </h1>
            <div className="toogle-area">
              Bill Monthly <div className="toggle-arr-input"></div> <div className="toggle-cirlce"></div>  Bill Yearly
            </div>
          </div>
        </div>
        <div className="plan-card">
          <div className="card-1">
            <h1>Basic</h1>
            <div className="price-card">
              {" "}
              <h1>$5.99 </h1>
              <p>/month*</p>
            </div>
            <p>Reliable low-cost shared hosting plan</p>
            <p>2 GB Storage</p>
            <p>500 Email Accounts</p>
            <p>10 Database</p>
            <div className="card-btn">
              <button>Buy Now</button>
            </div>
          </div>
          <div className="card-2">
            <h1>Premium</h1>
            <div className="price-card">
              {" "}
              <h1>$5.99 </h1>
              <p>/month*</p>
            </div>
            <p>Reliable low-cost shared hosting plan</p>
            <p>2 GB Storage</p>
            <p>500 Email Accounts</p>
            <p>10 Database</p>
            <div className="card-btn">
              <button>Buy Now</button>
            </div>
          </div>
          <div className="card-3">
            <h1>Unlimited</h1>
            <div className="price-card">
              {" "}
              <h1>$5.99 </h1>
              <p>/month*</p>
            </div>
            <p>Reliable low-cost shared hosting plan</p>
            <p>2 GB Storage</p>
            <p>500 Email Accounts</p>
            <p>10 Database</p>
            <div className="card-btn">
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
