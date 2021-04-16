import { makeStyles } from "@material-ui/core";
import React from "react";


const useStyles = makeStyles((theme) => ({
    footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:  "rgb(250, 248, 248)",
    width: "100%",
    position:"absolute",
    bottom: 0,
    }, 

    droits: {
        fontFamily: 'Bebas Neue',
        color: 'rgb(247, 108, 109)',
    }
}));



function Footer () {
const classes = useStyles(); 
    return (
        <div className={classes.footer}>
           
            <p className={classes.droits}>CCR 2021 Tous droits réservés - Wild code School</p>
        
        </div>
    )
}

export default Footer;