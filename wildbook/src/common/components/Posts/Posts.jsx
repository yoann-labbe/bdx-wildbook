import React, { useEffect, useState } from "react";
import { Card, CardContent, makeStyles } from "@material-ui/core";
import PostCard from "./PostCard";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    width: 800,
    height: "100%",
    marginBottom: 40,
  },
   
  title: {
   
    fontFamily : "Bebas Neue",
    letterSpacing : "3px",
    fontSize: "80px",
    display: "flex",
    justifyContent:"center",
    margin: "5px",
  },
  CardContent: {
    backgroundColor: "paper",
    margin: "8px",
  
  },
});

function Posts() {
  const classes = useStyles();

  const [post, setPost] = useState([]);
  useEffect(() => {
    getPost();
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

  return (
    <div>
      <Card className={classes.root} label="Create a post">
        <h1 className={classes.title}>Posts</h1>
        <div className={classes.CardContent}>
          <CardContent>
            {post.map((newPost, index) => (
              <PostCard key={index} post={newPost} />
            ))}
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default Posts;
