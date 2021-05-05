import React from "react";
import { makeStyles } from "@material-ui/core";
import CreatePost from "../../common/components/CreatePost/CreatePost";
import Posts from "../../common/components/Posts/Posts";
import Couverture from "./components/Couverture";
import ComingSoon from "../../common/ComingSoon";

const useStyles = makeStyles(() => ({
  theme: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

function Theme() {
  const classes = useStyles();

  return (
    <div className={classes.theme}>
      <ComingSoon />
      <Couverture />
      <CreatePost />
      <Posts />
    </div>
  );
}

export default Theme;
