import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import AddUser from "./AddUser";

function RouterComponent() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/add" component={AddUser} />
      </div>
    </Router>
  );
}
export default RouterComponent;
