import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import Signup from "./Signup";

const Landing = () => {
  return (
    <div className="font-semibold h-full">
      <Router>
        <Switch>
          <Route path="/" exact component={Navbar}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/home" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Landing;
