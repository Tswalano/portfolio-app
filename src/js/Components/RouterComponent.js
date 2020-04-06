import React, { useState, useMemo } from "react";
import NavbarComp from "./NavbarComponent";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import HomeComponent from "./HomeComponent";
import Playgournd from "./Playgournd";

function RouterComponent() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <Container maxWidth="md" style={{}}>
        <Route path="/" exact component={HomeComponent} />
      </Container>
      <UserContext.Provider value={value}>
        <Route path="/about" component={Playgournd} />
      </UserContext.Provider>
    </Router>
  );
}
export default RouterComponent;
