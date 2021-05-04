import React from "react";
import { Card, CardMedia, makeStyles } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import PostImage from "./PostImage";
import PostVideo from "./PostVideo";
import PostComment from "./PostComment";
import Comments from "./Comments";

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
  comment: {
    display: "flex",
    flexDirection: "column",
  },
});

const PostCard = ({ post, comment, props }) => {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <AccountCircle fontSize="default" />
      <Card className={classes.cardm}>
        <PostImage urlImage={post?.pictureUrl} />
        <PostVideo urlVideo={post?.videoUrl} />
        <h4>{post?.title} </h4>
      </Card>
      <div className={classes.comment}>
        <PostComment postId={post?._id} />
        Commentaire :
        <Comments comment={post?.comments} />
      </div>
    </div>
  );
};

export default PostCard;
