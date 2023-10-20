import React from "react";
import Content from "./Content";
import Header from "./Header";
import "../Style/Main.css"
export default function Main() {
  return (
    <>
      <section className="main-wrapper">
        <Header />

        <Content />
      </section>
    </>
  );
}
