import React from "react";
import Kemi from "../assets/kemi.png"

const Testimonial = () => {
  return (
    <div className="testimonial">
      <p>
        Best. Product. Ever! We like Oneburner more and more each day because it
        makes our work alot <br /> easier. It's just amazing. Very easy to use,
        impressed us on multiple levels. Thank you so much for your <br />
        help and is worth much more than we paid. We were treated like royalty.
      </p>
      <div className="ceo"></div>
      <div className="ceo-picture-board">
        <img src={Kemi} alt="" />
        <div className="picture-details">
          <h3>Kemi Hassan</h3>
          <p>CEO, Saharaa Inc</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
