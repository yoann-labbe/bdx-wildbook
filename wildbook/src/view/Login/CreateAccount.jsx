import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex",
      flexDirection: "column",
      fontFamily: "Bebas Neue",
    },
  },
  cadreTwo: {
    border: "2px #F76C6D solid",
    display: "flex",
    justifyContent: "center",
    height: "425px",
    width: "225px",
    margin: "auto",
    marginTop: "10px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
  easy: {
    fontFamily: "Bebas Neue",
    display: "flex",
    justifyContent: "center",
  },
}));

export default function CreateAccount() {
  const classes = useStyles();

  const [name, setName] = React.useState("");
  const [surName, setSurName] = React.useState("");
  const [birthday, setBirthday] = React.useState("");
  const [campus, setCampus] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const display = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const handleClick = () => {
    console.log(name, surName, campus, birthday, email, password);
  };

  return (
    <Fragment className={classes.account}>
      <div>
        <h1 className={classes.wb2}>WILDBOOK</h1>
      </div>
      <div>
        <h2 className={classes.inscript}>S'inscrire</h2>
        <h3 className={classes.easy}>C'est rapide et facile</h3>
      </div>
      <Box className={classes.cadreTwo}>
        <div className={classes.boxOne}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Prénom"
              value={surName}
              onChange={(e) => setSurName(e.target.value)}
            />
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="1991-08-28"
              className={classes.textField}
              InputLabelProps={{ shrink: true }}
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Campus"
              value={campus}
              onChange={(e) => setCampus(e.target.value)}
            />

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
            <Button
              className={classes.click2}
              variant="outlined"
              onClick={handleClick}
            >
              S'inscrire
            </Button>
          </form>
        </div>
      </Box>
    </Fragment>
  );
}
