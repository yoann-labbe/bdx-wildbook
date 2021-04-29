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

  div: {
    marginBottom: 30,
  },

  newWilders: {
    margin: "0 100px",
    width: "340px",
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
        <div className={classes.div}>
          <CreatePost />
        </div>
        <Posts />
      </div>

    </div>
  );
}

export default Home;
