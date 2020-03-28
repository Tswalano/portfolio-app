import React, { Component } from "react";
import { MemoryRouter as Router } from "react-router";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { MenuItem, Menu } from "@material-ui/core";

function NavbarComp() {
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="h6">Tswalano</Typography>
          <MenuItem component={Link} to="/">
            Login
          </MenuItem>
          <MenuItem component={Link} to="/home">
            Home
          </MenuItem>
          <MenuItem component={Link} to="/users">
            Users
          </MenuItem>
          <MenuItem component={Link} to="/about">
            About
          </MenuItem>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavbarComp;
