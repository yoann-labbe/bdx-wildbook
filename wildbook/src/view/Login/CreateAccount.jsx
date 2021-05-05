import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  Box,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40ch",
      display: "flex",
      flexDirection: "column",
      fontFamily: "Bebas Neue",
    },
  },
  cadreTwo: {
    border: "2px primary solid",
    display: "flex",
    justifyContent: "center",
    width: "235px",
    margin: "auto",
    marginTop: "10px",
    borderRadius: "10px",
  },
  click2: {
    margin: "30px auto",
    fontFamily: "Bebas Neue",
  },
  wb2: {
    color: "#F76C6D",
    fontFamily: "Bebas Neue",
    marginLeft: "25px",
  },
  inscript: {
    fontFamily: "Bebas Neue",
    display: "flex",
    justifyContent: "center",
  },
}));

export default function CreateAccount({ switchFromRegisterToLogin }) {
  const classes = useStyles();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    campus: "",
    email: "",
    plainPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    const user = await axios.post(
      "https://wildbook-api.herokuapp.com/users",
      form
    );

    console.log(
      "🚀 ~ file: CreateAccount.jsx ~ line 69 ~ handleClick ~ user",
      user.data
    );
    switchFromRegisterToLogin();
  };

  return (
    <Fragment>
      <div>
        <h2 className={classes.inscript}>S'inscrire</h2>
      </div>
      <Box className={classes.cadreTwo}>
        <div className={classes.boxOne}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Nom"
              value={form.lastName}
              name="lastName"
              onChange={handleChange}
            />
            <TextField
              id="standard-basic"
              label="Prénom"
              value={form.firstName}
              name="firstName"
              onChange={handleChange}
            />
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="1991-08-28"
              className={classes.textField}
              InputLabelProps={{ shrink: true }}
              value={form.birthday}
              name="birthday"
              onChange={handleChange}
            />
            <FormControl>
              <InputLabel id="demo-simple-select-label" color="secondary">
                Campus
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                color="primary"
                value={form.campus}
                name="campus"
                onChange={handleChange}
              >
                <MenuItem value={"Bordeaux"}>Bordeaux</MenuItem>
                <MenuItem value={"Biarritz"}>Biarritz</MenuItem>
                <MenuItem value={"LaLoupe"}>La Loupe</MenuItem>
                <MenuItem value={"Lille"}>Lille</MenuItem>
                <MenuItem value={"Lyon"}>Lyon</MenuItem>
                <MenuItem value={"Marseille"}>Marseille</MenuItem>
                <MenuItem value={"Nantes"}>Nantes</MenuItem>
                <MenuItem value={"Orleans"}>Orleans</MenuItem>
                <MenuItem value={"Paris"}>Paris</MenuItem>
                <MenuItem value={"Reims"}>Reims</MenuItem>
                <MenuItem value={"Saintes"}>Saintes</MenuItem>
                <MenuItem value={"Strasbourg"}>Strasbourg</MenuItem>
                <MenuItem value={"Toulouse"}>Toulouse</MenuItem>
                <MenuItem value={"Tours"}>Tours</MenuItem>
                <MenuItem value={"Amsterdam"}>Amsterdam</MenuItem>
                <MenuItem value={"Barcelone"}>Barcelone</MenuItem>
                <MenuItem value={"Berlin"}>Berlin</MenuItem>
                <MenuItem value={"Bruxelle"}>Bruxelle</MenuItem>
                <MenuItem value={"Bucarest"}>Bucarest</MenuItem>
                <MenuItem value={"Lisbonne"}>Lisbonne</MenuItem>
                <MenuItem value={"Londres"}>Londres</MenuItem>
                <MenuItem value={"Madrid"}>Madrid</MenuItem>
                <MenuItem value={"RemoteEN"}>Remote EN</MenuItem>
                <MenuItem value={"RemoteFR"}>Remote FR</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="standard-basic"
              label="Mail"
              value={form.email}
              name="email"
              onChange={handleChange}
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={form.plainPassword}
              name="plainPassword"
              onChange={handleChange}
            />
            <Button
              className={classes.click2}
              variant="outlined"
              onClick={handleClick}
            >
              S'inscrire
            </Button>
            <div className="">
              <Link className="" to="">
                Déjà inscrit? Connectez-vous.
              </Link>
            </div>
          </form>
        </div>
      </Box>
    </Fragment>
  );
}
