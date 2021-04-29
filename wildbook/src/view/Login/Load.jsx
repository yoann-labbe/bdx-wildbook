import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Dialog, Slide, Tooltip } from "@material-ui/core";
import Popupload from "./Popupload";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex",
      flexDirection: "column",
    },
  },
  cadre: {
    border: "2px primary solid",
    display: "flex",
    justifyContent: "center",
    height: "225px",
    width: "225px",
    margin: "auto",
    marginTop: "10px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "10px",
  },
}));

export default function Load() {
  const classes = useStyles();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const display = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const handleClick = async () => {
    const login = {
      email: "",
      password: "password",
    };
    try {
      const token = await axios.post(
        "https://wildbook-api.herokuapp.com/login",
        login
      );
      console.log(token.data);
      localStorage.setItem("userToken", token.data.acces_token);
    } catch (e) {}
  };

  return (
    <Box className={classes.cadre}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button id="click" variant="contained" onClick={handleClick}>
          Connexion
        </Button>
        <Tooltip>
          <Button>Mot de passe oublié ?</Button>
        </Tooltip>
      </form>
    </Box>
  );
}
