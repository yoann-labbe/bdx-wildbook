import React, { useContext, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Tooltip } from "@material-ui/core";

import { useHistory } from "react-router";
import UserContext from "../../context/user";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "35ch",
      display: "flex",
      flexDirection: "column",
    },
  },
  cadre: {
    border: "2px primary solid",
    display: "flex",
    justifyContent: "center",
    height: "250px",
    width: "260px",
    margin: "auto",
    borderRadius: "10px",
  },
  click: {
    marginTop: "35px",
  },
}));

export default function Load() {
  const classes = useStyles();
  const history = useHistory();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { setConnectedUser } = useContext(UserContext);

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
      const config = {
        headers: {
          Authorization: `Bearer ${token.data.access_token}`,
        },
      };

      const userProfile = await axios.get(
        "https://wildbook-api.herokuapp.com/users/profile",
        config
      );
      setConnectedUser(userProfile.data);
      history.push("/");
    } catch (e) {
      //ici afficher un message d'erreur  à l'utilisateur
    }
  };
  const handlepress = async (e) => {
    if (e.charCode === 13) {
      try {
        const token = await axios.post(
          "https://wildbook-api.herokuapp.com/users/login",
          form
        );

        console.log(token.data);
        localStorage.setItem("userToken", token.data.access_token);
        const config = {
          headers: {
            Authorization: `Bearer ${token.data.access_token}`,
          },
        };

        const userProfile = await axios.get(
          "https://wildbook-api.herokuapp.com/users/profile",
          config
        );
        setConnectedUser(userProfile.data);
        history.push("/");
      } catch (e) {
        //ici afficher un message d'erreur  à l'utilisateur
      }
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
          onKeyPress={handlepress}
        />

        <Button
          className={classes.click}
          variant="contained"
          onClick={handleConnection}
        >
          Log in
        </Button>
        <Tooltip>
          <Button>Forgot your password</Button>
        </Tooltip>
      </form>
    </Box>
  );
}
