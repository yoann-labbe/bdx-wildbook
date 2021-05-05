import React from "react";
import { makeStyles } from "@material-ui/core";
import CreatePost from "../../common/components/CreatePost/CreatePost";
import Couverture from "./components/Couverture";
import ComingSoon from "../../common/ComingSoon";
import Posts from "../../common/components/Posts/Posts";

const useStyles = makeStyles(() => ({
  theme: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  divInFront: {
    zIndex: 1,
    width: "100%",
    height: "100%",
    position: "relative",
  },
}));

function Theme() {
  const classes = useStyles();

  return (
    <div className={classes.theme}>
      <div className={classes.divInFront}>
        <ComingSoon />
      </div>
      <Couverture style={{ width: "100%" }} />
      <CreatePost />
      <Posts />
    </div>
  );
}

export default Theme;
