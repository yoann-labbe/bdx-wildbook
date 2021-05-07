import React, { useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Popupload from "./Popupload";
import Popupaccount from "./Popupaccount";
import UserContext from "../../context/user";
import { useHistory } from "react-router";

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

function Login(props) {
  const classe = useStyles();
  const { connectedUser } = useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  const [openAccount, setOpenAccount] = React.useState(false);
  const history = useHistory();
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseAccount = () => {
    setOpenAccount(false);
  };

  const switchFromRegisterToLogin = () => {
    setOpenAccount(false);
    setOpen(true);
  };

  useEffect(() => {
    if (connectedUser && connectedUser._id) {
      history.push(
        history?.location?.state?.from ? history?.location?.state?.from : "/"
      );
    }
  }, [connectedUser, history]);

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
          Register
        </Button>
        <Button
          className={classe.bouton2}
          variant="outlined"
          onClick={() => setOpen(true)}
        >
          Login
        </Button>
      </div>
      <Popupload open={open} handleClose={handleClose} />
      <Popupaccount
        openAccount={openAccount}
        handleCloseAccount={handleCloseAccount}
        switchFromRegisterToLogin={switchFromRegisterToLogin}
      />
    </div>
  );
}
export default Login;
