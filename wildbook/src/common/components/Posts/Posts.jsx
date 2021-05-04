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
    marginLeft: 20,
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
      <Card className={classes.root} label="Creer un post">
        <h3 className={classes.title}>Dernier Post</h3>
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
