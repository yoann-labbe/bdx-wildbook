import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CreateAccount from "./CreateAccount";
import { Link } from "react-router-dom";
import Load from "./Load";
import DialogNotif from "../Notif/DialogNotif";
import { Dialog } from "@material-ui/core";
import Popupload from "./Popupload";

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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
          to="/account"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <Button className={classe.bouton1} variant="outlined" color="primary">
            Créer un compte
          </Button>
        </Link>

        <Link to="/load" style={{ color: "inherit", textDecoration: "none" }}>
          <Button
            className={classe.bouton2}
            variant="outlined"
            onClick={() => setOpen(true)}
          >
            Connexion
          </Button>
        </Link>
      </div>
      <Popupload open={handleClickOpen} onClose={handleClose} />
    </div>
  );
}
export default Login;
