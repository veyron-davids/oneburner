import React from "react";
import A from "../assets/a.png";
import B from "../assets/b.png";
import C from "../assets/c.png";


const Collaboration = () => {
  return (
    <div className="collaboration-container">
      <div className="collaboration">
        <h1>
          Collaborate with your team <br />
          and get more done
        </h1>
        <span>
          Communicate effectively with Oneburner for easy <br />
          collaboration, team work, and remote work
        </span>
        <button>Start Free Trial</button>
      </div>
      <div className="collaboration-circle">
        <div className="circle">
          <div className="circle-one"></div>
          <img id="img-one" src={A} alt="img" />
          <div className="card-one">
            <h4>Mitchelle</h4>
            <p>Admin Officer</p>
          </div>
          <div className="triangle-three"></div>
          <div className="triangle-two"></div>
          <div className="triangle-one"></div>
          <div className="message-card-one">
            <h4>
              Time to implement the new <br />
              changes
            </h4>
          </div>
          <div className="message-card-two">
            <h4>
              Yes! we are getting it <br />
              done
            </h4>
          </div>
          <div className="message-card-three">
            <h4>
              Deploying on production at<br />
              2AM
            </h4>
          </div>
          <div className="circle-two"></div>
          <img id="img-two" src={B} alt="img" />
          <div className="card-two">
            <h4>Adeola</h4>
            <p>Manager</p>
          </div>
          <div className="circle-three"></div>
          <img id="img-three" src={C} alt="img" />
          <div className="card-three">
            <h4>Adeola</h4>
            <p>Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
