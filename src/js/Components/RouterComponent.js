import React from "react";
import NavbarComp from "./NavbarComponent";
import HomeComponent from "./HomeComponent";
import LoginComponent from "./LoginComponent";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function RouterComponent() {
  return (
    <Router>
      <NavbarComp />
      <Container maxWidth="md" style={{ marginTop: "30px" }}>
        <Switch>
          <Route path="/" exact>
            <LoginComponent />
          </Route>
          <Route path="/home">
            <HomeComponent />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default RouterComponent;
