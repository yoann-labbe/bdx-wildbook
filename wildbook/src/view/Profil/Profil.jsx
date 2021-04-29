import React, { useEffect, useState } from "react";
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

function Profil() {
  const [connectedUser, setConnectedUser] = useState({});

  useEffect(() => {
    const connectUser = async () => {
      const accessToken = localStorage.getItem("userToken");
      if (accessToken) {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        const userProfile = await axios.get(
          "https://wildbook-api.herokuapp.com/users/profile",
          config
        );
        setConnectedUser(userProfile.data);
      }
    };

    connectUser();
  }, []);

  const classes = useStyles();

  return (
    <UserContext.Provider value={{ connectedUser, setConnectedUser }}>
      <div className={classes.profilInfos}>
        <ProfilInfos />
        <CreatePost />
        <Posts />
      </div>
    </UserContext.Provider>
  );
}

export default Profil;
