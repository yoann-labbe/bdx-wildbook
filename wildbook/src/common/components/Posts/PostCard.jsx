import React, { useContext, useEffect, useState } from "react";
import { Card, makeStyles } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import Comment from "./Comment";
import PostImage from "./PostImage";
import PostVideo from "./PostVideo";
import UserContext from "../../../context/user";
import axios from "axios";

const useStyles = makeStyles({
  cardm: {
    height: "100%",
    marginBottom: 12,
    margin: 20,
    backgroundColor: "white",
    padding: 15,
  },
  div: {
    overflow: "scroll",
  },
  iconAvatar: {
    borderRadius: "100%",
    height: "40px",
    width: "40px",
  },
});

const PostCard = ({ post, props }) => {
  const classes = useStyles();
  const { connectedUser } = useContext(UserContext);
  const [iconAvatar, setIconAvatar] = useState({});

  useEffect(() => {
    getIcon();
  }, [connectedUser]);

  const getIcon = () => {
    try {
      const accessToken = localStorage.getItem("userToken");
      if (accessToken && Object.keys(connectedUser).length > 0) {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        axios
          .get(
            `https://wildbook-api.herokuapp.com/users/${connectedUser._id}`,
            config
          )
          .then((response) => response.data)
          .then((data) => {
            setIconAvatar(data);
            console.log(
              "🚀 ~ file: Header.jsx ~ line 155 ~ .then ~ data",
              data
            );
          });
      }
    } catch (e) {
      //ici afficher un message d'erreur  à l'utilisateur
    }
  };

  return (
    <div className={classes.div}>
      {connectedUser._id ? (
        <img
          className={classes.iconAvatar}
          src={iconAvatar.avatarUrl}
          alt={connectedUser.firstName}
        />
      ) : (
        <AccountCircle style={{ fontSize: "default" }} />
      )}
      <Card className={classes.cardm}>
        <PostImage urlImage={post?.pictureUrl} />
        <PostVideo urlVideo={post?.videoUrl} />
        <h4>{post?.text} </h4>
      </Card>

      <Comment text={props} />
    </div>
  );
};

export default PostCard;
