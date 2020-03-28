import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { SendOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "center",
    display: "flex",
    margin: "20px 0",
    "& > p": {
      // flex: 1,
      justifyContent: "center",
      textAlign: "center"
    }
  }
}));

export default function LoginComponent() {
  const classes = useStyles();
  return (
    <>
      <Box mt={10}>
        <Box display="flex" justifyContent="center" m={2} p={1}>
          <Avatar
            height="100%"
            alt="Remy Sharp"
            src="./../../assets/img/icon.png"
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography>Welcome, Please login</Typography>
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            size="small"
          />
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            size="small"
          />
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          <Button startIcon={<SendOutlined />}>login</Button>
        </Box>
      </Box>
    </>
  );
}
