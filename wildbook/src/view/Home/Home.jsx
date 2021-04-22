import React from "react";
import { makeStyles } from "@material-ui/core";
import CreatePost from "../../common/components/CreatePost/CreatePost";
import Posts from "../../common/components/Posts/Posts";
import LastSubscribers from "./components/LastSubscribers/LastSubscribers";

const useStyles = makeStyles(() => ({
  home: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
  },

  postContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <div className={classes.newWilders}>
        <LastSubscribers />
      </div>
      <div className={classes.postContainer}>
        <CreatePost />
        <Posts />
        <Posts />
        <Posts />
      </div>
    </div>
  );
}

export default Home;
