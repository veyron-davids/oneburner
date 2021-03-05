import React from "react";
import Client from "./client";
import Collaboration from "./collaboration";
import Contacts from "./contact";
import Header from "./header";
import Integrate from "./integrate";
import Showcase from "./showcase";
import ShowcaseTwo from "./showcase-two";
import Tab from "./tab";
import Footer from "./footer";
import "../styles.css";
import Trial from "./trial";


const FirstPage = () => {
     return (
       <div>
         <Header />
         <Collaboration />
         <Client />
         <Tab />
         <Showcase />
         <Integrate />
         <ShowcaseTwo />
         <Contacts />
         <Trial />
         <Footer />
       </div>
     );
}

export default FirstPage
