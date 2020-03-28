import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  Paper,
  Button,
  IconButton,
  CardHeader,
  Avatar
} from "@material-ui/core";
import { ShareIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import ImageAvatar from "./LoginComponent";
import LoginForm from "./LoginForm";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "100px"
    // padding: "20px",
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    // // margin: "20px 0"
  }
}));

export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageAvatar />
      <LoginForm />
    </div>
  );
}

// export default Banner;
