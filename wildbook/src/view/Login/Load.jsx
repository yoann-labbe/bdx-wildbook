import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import LockIcon from "@material-ui/icons/Lock";

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
  cadre: {
    border: "2px #F76C6D solid",
    display: "flex",
    justifyContent: "center",
    height: "200px",
    width: "225px",
    margin: "auto",
    marginTop: "15px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "10px",
    fontFamily: "Bebas Neue",
  },
  click: {
    margin: "25px auto",
    color: "#5d7fdb",
  },
  wb3: {
    color: "#F76C6D",
    fontFamily: "Bebas Neue",
    marginLeft: "25px",
  },
  lock: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
    color: "#F76C6D",
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

  const handleClick = () => {
    console.log(email, password);
  };

  return (
    <Fragment>
      <div>
        <h1 className={classes.wb3}>WILDBOOK</h1>
      </div>
      <LockIcon className={classes.lock} />
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
          <Button
            className={classes.click}
            variant="contained"
            onClick={handleClick}
          >
            Connexion
          </Button>
        </form>
      </Box>
    </Fragment>
  );
}
