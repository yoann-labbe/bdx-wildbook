import React, { useContext, useEffect, useState } from "react";
import CreatePost from "../../common/components/CreatePost/CreatePost";
import Posts from "../../common/components/Posts/Posts";
import ProfilInfos from "./components/ProfilInfos/ProfilInfos";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import UserContext from "../../context/user";

const useStyles = makeStyles(() => ({
  profilInfos: {
    display: "flex",
    flexDirection: "column",
    alignItems: " center",
    justifyContent: "space-around",
  },
}));

function Profil(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.profilInfos}>
      <ProfilInfos userId={props.match.params.id} />
      <CreatePost />
      <Posts />
    </div>
  );
}

export default Profil;
