import React, { useEffect, useState } from "react";
import CreatePost from "../../common/components/CreatePost/CreatePost";
import ProfilInfos from "./components/ProfilInfos/ProfilInfos";
import { Card, CardContent, makeStyles } from "@material-ui/core";
import axios from "axios";
import PostCard from "../../common/components/Posts/PostCard";

const useStyles = makeStyles(() => ({
  profilInfos: {
    display: "flex",
    flexDirection: "column",
    alignItems: " center",
    justifyContent: "space-around",
  },
  root: {
    width: 800,
    height: "100%",
    marginBottom: 40,
  },
  title: {
    marginLeft: 20,
  },
  CardContent: {
    backgroundColor: "rgb(250, 248, 248)",
    margin: "8px",
  },
}));

function Profil(props) {
  const classes = useStyles();
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPost();
  }, [props.match?.params?.id]);

  const getPost = async () => {
    try {
      const accessToken = localStorage.getItem("userToken");
      if (accessToken && props.match?.params?.id) {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        const getNewPost = await axios.get(
          `https://wildbook-api.herokuapp.com/posts?userId=${props.match?.params?.id}`,
          config
        );
        setPost(getNewPost.data[0].data);
        console.log(getNewPost.data[0].data);
      }
    } catch (e) {}
  };

  return (
    <div className={classes.profilInfos}>
      <ProfilInfos userId={props.match.params.id} />
      <CreatePost />
      <Card className={classes.root} label="Creer un post">
        <h3 className={classes.title}>Dernier Post</h3>
        <div className={classes.CardContent}>
          <CardContent>
            {post.map((authorPost, index) => (
              <PostCard key={index} post={authorPost} />
            ))}
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default Profil;
