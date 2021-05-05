import React from "react";
import { Card, makeStyles } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import PostImage from "./PostImage";
import PostVideo from "./PostVideo";
import PostComment from "./PostComment";
import Comments from "./Comments";
import { useHistory } from "react-router";

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
  iconAvatar: {
    borderRadius: "100%",
    height: "40px",
    width: "40px",
  },
  post: {
    marginTop: "20px",
    border: "solid 1px",
  },
  p: {
    marginLeft: "18px",
  },

  postInfos: {
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
    "&:hover": {
      cursor: "pointer",
    },
  },

  postAuthor: {
    marginLeft: "10px",
    fontSize: "20px",
    fontFamily: "Bebas Neue",
  },
});

const PostCard = ({ post }) => {
  const classes = useStyles();

  const history = useHistory();
  const redirectToProfile = () => {
    history.push(`/profile/users/${post.author._id}`);
  };

  return (
    <div className={classes.div}>
      <Card className={classes.post}>
        <div className={classes.postInfos} onClick={redirectToProfile}>
          {post.author.avatarUrl ? (
            <img
              className={classes.iconAvatar}
              src={post.author.avatarUrl}
              alt="avatar"
            />
          ) : (
            <AccountCircle fontSize="default" />
          )}
          <p className={classes.postAuthor}>
            {post.author.firstName} {post.author.lastName}
          </p>
        </div>
        <Card className={classes.cardm}>
          <PostImage urlImage={post?.pictureUrl} />
          <PostVideo urlVideo={post?.videoUrl} />
          <h4>{post?.text} </h4>
        </Card>
        <div className={classes.comment}>
          <PostComment postId={post?._id} />
          <p className={classes.p}> Commentaire :</p>
          <Comments comment={post?.comments} />
        </div>
      </Card>
    </div>
  );
};

export default PostCard;
