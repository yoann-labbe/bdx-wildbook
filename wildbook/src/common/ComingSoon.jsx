import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  background: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  commingSoon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    height: "100px",
    borderRadius: "5px",
  },
  wildWork: {
    color: "white",
    fontSize: "40px",
  },
}));

function ComingSoon() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.commingSoon}>
        <h1 className={classes.wildWork}>WILD WORK IN PROGRESS</h1>
      </div>
    </div>
  );
}

export default ComingSoon;
