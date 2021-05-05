import React from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles(() => ({
  notFound: {
    fontSize: "100px",
    fontFamily: "Bebas Neue",
    marginTop: "100px",
    color: "#EA5656",
  },
  notFoundContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  back: {
    fontFamily: "Bebas Neue",
    fontSize: "30px",
    color: "#EA5656",
    border: "rgb(226, 107, 107) 1px solid",
    borderRadius: "5px",
    padding: "10px",
    boxShadow: "0px 3px 15px #b3b3b3",
  },

  redirect: {
    "&:hover": {
      cursor: "pointer",
    },
  },

  logo: {
    width: "100px",
    marginTop: "100px",
  },
}));

function NotFound() {
  const history = useHistory();
  const redirectToHome = () => {
    history.push("/");
  };
  const classes = useStyles();
  return (
    <div className={classes.notFoundContainer}>
      <img className={classes.logo} src="./assets/newLogo.png" alt="Logo" />
      <h1 className={classes.notFound}>404 Not Found</h1>
      <div className={classes.redirect} onClick={redirectToHome}>
        <p className={classes.back}>BACK TO WILDBOOK</p>
      </div>
    </div>
  );
}

export default NotFound;
