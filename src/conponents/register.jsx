import React from "react";
import SignupCont from "./signup-contact";

const Register = () => {
  return (
    <div className="Register">
      <div className="sign-up">
        <form>
          <div className="form" id="form-flex">
            <div className="form-double">
              <label htmlFor="">Last Name</label>
              <input type="text" name="" value="" />
            </div>
            <div className="form-double" id="form-sapcing">
              <label htmlFor="">First Name</label>
              <input type="text" name="" value="" />
            </div>
          </div>
          <div className="form">
            <label htmlFor="">Work Email</label>
            <input type="text" name="" value="" />
          </div>
          <div className="form">
            <label htmlFor="">Phone Number</label>
            <input type="text" name="" value="" />
          </div>
          <div className="form">
            <label htmlFor="">Product of Interest</label>
            <input type="text" name="" value="" />
          </div>
          <div className="form" id="form-flex">
            <div className="form-double">
              <label htmlFor="">Company Name</label>
              <input type="text" name="" value="" />
            </div>
            <div className="form-double" id="form-sapcing">
              <label htmlFor="">Company Size</label>
              <input type="text" name="" value="" />
            </div>
          </div>
          <div className="form">
            <label htmlFor="">How can expert help you?</label>
            <textarea name="w3review" rows="4" cols="80"></textarea>
          </div>
        </form>
          <button>Contact Us</button>
          </div>
          <SignupCont />
    </div>
  );
};

export default Register;
