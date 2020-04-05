import React, { useContext, useState, useMemo, useEffect } from "react";
import NavbarComp from "./NavbarComponent";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import login from "./Utils/Login";
import HomeComponent from "./HomeComponent";

export default function Playgournd() {
  return (
    <div>
      <NavbarComp />
      <Container maxWidth="md" style={{ marginTop: "35px" }}>
        <About />
      </Container>
    </div>
  );
}

function Home() {
  const { user, setUser } = useContext(UserContext);
  return <p>Home</p>;
}

function About() {
  const { user, setUser } = useContext(UserContext);

  const cb = React.useCallback(async () => {
    const res = await login();
    const x = res.data[0];
    setUser(x);
  });

  return (
    <>
      <h2>About</h2>
      <p>{user ? "Welcome, " + user.name + "  " + user.surname : ""}</p>
      <button onClick={() => cb()}>Login</button>
    </>
  );
}

function Users() {
  return <h2>Users</h2>;
}
