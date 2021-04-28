import React from "react";
import CreatePost from "../../common/components/CreatePost/CreatePost";
import Posts from "../../common/components/Posts/Posts";
import ProfilInfos from "./components/ProfilInfos/ProfilInfos";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  profilInfos: {
    display: "flex",
    flexDirection: "column",
    alignItems: " center",
    justifyContent: "space-around",
  },

}));

function Profil() {
  const classes = useStyles();

  return (
    <div className={classes.profilInfos}>
      <ProfilInfos />
      <CreatePost />
      <Posts />

    </div>
  );
}

export default Profil;
