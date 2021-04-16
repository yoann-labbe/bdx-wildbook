import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


import "./Login.css";

const useStyles = makeStyles((theme) => ({
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
    },

  }));

function Login () {
const classe = useStyles()
return (
<div>
    <img class="logo" src="./assets/newLogo.png" alt="logo wildbook"/>
    <h1 class="wb">WILDBOOK</h1>
    <div className={classe.buttonContainer}>
    <Button id="bouton1" variant="outlined" color="primary"> Créer un compte</Button>
    <Button id="bouton2" variant="outlined">Connexion</Button>
    </div>
 </div>
);
}
export default Login;
