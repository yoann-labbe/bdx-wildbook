import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CreateAccount from "./CreateAccount";
import { Link } from "react-router-dom";
import Load from "./Load";
import DialogNotif from "../Notif/DialogNotif";
import { Dialog } from "@material-ui/core";
import Popupload from "./Popupload";
import Popupaccount from "./Popupaccount";

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
  const handleClose = () => {
    setOpen(false);
  };
  
  {/*const handleClickOpen = () => {
    setOpen(true);
  };*/}
  

  return (
    <div>
      <img
        className={classe.logo}
        src="./assets/newLogo.png"
        alt="logo wildbook"
      />
      <h1 className={classe.wb}>WILDBOOK</h1>
      <div className={classe.buttonContainer}>
        <Button
          className={classe.bouton1}
          variant="outlined"
          color="primary"
          onClick={() => setOpenAccount(true)}
        >
          Créer un compte
        </Button>
        <Button
          className={classe.bouton2}
          variant="outlined"
          onClick={() => setOpen(true)}
        >
          Connexion
        </Button>
      </div>
      <Popupload open={open} handleClose={handleClose} />
      <Popupaccount
        openAccount={openAccount}
        handleCloseAccount={handleCloseAccount}
      />
    </div>
  );
}
export default Login;
