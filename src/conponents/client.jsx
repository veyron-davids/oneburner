import React from "react";
import { ReactComponent as Dangote } from "../assets/dangote.svg";
import { ReactComponent as Egypt } from "../assets/egyptair.svg";
import { ReactComponent as Mtn } from "../assets/mtn.svg";
import { ReactComponent as Paystack } from "../assets/paystack.svg";
import { ReactComponent as Standrd } from "../assets/standard.svg";
import { ReactComponent as Gtb } from "../assets/gtb.svg";
import Sko from "../assets/sko.png";


const Client = () => {
  return (
    <div className="client-section">
      <div className="client-title">
        Over 500+ comapanies bond teams together on oneburner
      </div>
      <div className="clients">
        <Paystack className="img-client" />
        <Egypt className="img-client" />
        <Dangote className="img-client" />
        <Standrd className="img-client" />
        <Mtn className="img-client" />
        <Gtb className="img-client" />
        <img className="img-client" src={Sko} alt="img" />
      </div>
    </div>
  );
};

export default Client;
