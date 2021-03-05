import React from "react";
import "../styles.css";
import Client from "./client";
import Combo from "./combo";
import Footer from "./footer";
import Header from "./header";
import Map from "./map";
import Modern from "./modern";
import More from "./more";
import Testimonial from "./testimonial";

const SecondPage = () => {
  return (
    <div>
      <Header />
      <Modern />
      <Client />
      <Combo />
      <Map />
      <Testimonial />
      <More />
      <Footer />
    </div>
  );
};

export default SecondPage;
