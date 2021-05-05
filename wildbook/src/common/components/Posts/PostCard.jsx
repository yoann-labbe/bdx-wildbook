import React, { useContext, useEffect, useState } from "react";
import { Card, makeStyles } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import PostImage from "./PostImage";
import PostVideo from "./PostVideo";
import PostComment from "./PostComment";
import Comments from "./Comments";
import UserContext from "../../../context/user";
import axios from "axios";

const useStyles = makeStyles({
  cardm: {
    height: "100%",
    marginBottom: 12,
    margin: 20,
    backgroundColor: "white",
    padding: 15,
    borderRadius: "20px",
   
  },
  div: {
    overflow: "auto",
   
  },
  comment: {
    display: "flex",
    flexDirection: "column",
    borderRadius : "30px",
  },
  iconAvatar: {
    borderRadius: "100%",
    height: "40px",
    width: "40px",
  },
  post: {
    marginTop: "20px",
    //boxShadow: "0px 3px 15px #b3b3b3",
    
  },
  p: {
    marginLeft: "18px",
    fontFamily: "Neucha",
    fontSize: "18px",
    color: "rgba(243, 79, 80, 1)"
  },
});

const PostCard = ({ post, comment, props }) => {
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
    } catch (e) {}
  };

  return (
    <div className={classes.div}>
      <Card className={classes.post}>
        <AccountCircle fontSize="default" />
        <Card className={classes.cardm}>
          <PostImage urlImage={post?.pictureUrl} />
          <PostVideo urlVideo={post?.videoUrl} />
          <h4>{post?.text} </h4>
        </Card>
        <div className={classes.comment}>
          <PostComment postId={post?._id} />
          <p className={classes.p}> Last Comments :</p>
          <Comments comment={post?.comments} />
        </div>
      </Card>
    </div>
  );
};

export default PostCard;
