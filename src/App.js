import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import FirstPage from "./conponents/firstPage";
import SecondPage from "./conponents/secondPage";
import ThirdPage from "./conponents/thirdPage";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={FirstPage} />
          <Route path="/secondPage" component={SecondPage} />
          <Route path="/ThirdPage" component={ThirdPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
