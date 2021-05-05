import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  background: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "relative",
  },
  commingSoon: {
    display: "flex",
    justifyContent: "center",
  },
  wildWork: {},
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
