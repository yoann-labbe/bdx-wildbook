import React from "react";
import { Card, CardMedia, makeStyles } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import Comment from "./Comment";
import PostImage from "./PostImage";
import PostVideo from "./PostVideo";

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
});

const PostCard = ({ post, props }) => {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <AccountCircle fontSize="default" />
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
