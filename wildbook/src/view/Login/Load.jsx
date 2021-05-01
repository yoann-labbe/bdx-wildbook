import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Dialog, Slide, Tooltip } from "@material-ui/core";
import Popupload from "./Popupload";
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

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleConnection = async () => {
    try {
      const token = await axios.post(
        "https://wildbook-api.herokuapp.com/users/login",
        form
      );
      console.log(token.data);
      localStorage.setItem("userToken", token.data.access_token);
    } catch (e) {
      //ici afficher un message d'erreur  à l'utilisateur
    }
  };

  return (
    <Box className={classes.cadre}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Mail"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <TextField
          id="standard-password-input"
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={form.password}
          onChange={handleChange}
        />
        <Button id="click" variant="contained" onClick={handleConnection}>
          Connexion
        </Button>
        <Tooltip>
          <Button>Mot de passe oublié ?</Button>
        </Tooltip>
      </form>
    </Box>
  );
}
