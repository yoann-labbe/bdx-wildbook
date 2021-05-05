import React, { useEffect, useState } from "react";
import CreatePost from "../../common/components/CreatePost/CreatePost";
import Posts from "../../common/components/Posts/Posts";
import ProfilInfos from "./components/ProfilInfos/ProfilInfos";
import { makeStyles } from "@material-ui/core";
import axios from "axios";

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
  const [post, setPost] = useState([]);
  useEffect(() => {
    getPost();
  }, []);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getPost = async () => {
    try {
      const accessToken = localStorage.getItem("userToken");
      if (accessToken) {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        const getNewPost = await axios.get(
          `https://wildbook-api.herokuapp.com/posts`,
          config
        );
        setPost(getNewPost.data[0].data);
      }
    } catch (e) {}
  };

  const getUsers = () => {
    try {
      const accessToken = localStorage.getItem("userToken");
      if (accessToken) {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        axios
          .get(
            `https://wildbook-api.herokuapp.com/users/${props.userId}`,
            config
          )
          .then((response) => response.data)
          .then((data) => {
            console.log(data);
            setUsers(data);
            console.log(users);
          });
      }
    } catch (e) {
      //ici afficher un message d'erreur  à l'utilisateur
    }
  };

  return (
    <div className={classes.profilInfos}>
      <ProfilInfos userId={props.match.params.id} />
      <CreatePost />
      {post
        .filter((myPost) => myPost.author.email === users.email)
        .map((authorPost, index) => (
          <Posts key={index} {...authorPost} />
        ))}
    </div>
  );
}

export default Profil;
