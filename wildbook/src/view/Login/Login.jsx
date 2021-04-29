import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CreateAccount from "./CreateAccount";
import { Link } from "react-router-dom";
import Load from "./Load";

const useStyles = makeStyles((theme) => ({
  logo: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "100px",
    width: "150px",
  },
  wb: {
    textAlign: "center",
    color: "#F76C6D",
  },
  bouton1: {
    marginRight: "10px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function Login() {
  const classe = useStyles();
  return (
    <div>
      <img
        className={classe.logo}
        src="./assets/newLogo.png"
        alt="logo wildbook"
      />
      <h1 className={classe.wb}>WILDBOOK</h1>
      <div className={classe.buttonContainer}>
        <Link
          to="/Account"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <Button className={classe.bouton1} variant="outlined" color="primary">
            Créer un compte
          </Button>
        </Link>
        <Link to="/Load" style={{ color: "inherit", textDecoration: "none" }}>
          <Button className={classe.bouton2} variant="outlined">
            Connexion
          </Button>
        </Link>
      </div>
    </div>
  );
}
export default Login;
