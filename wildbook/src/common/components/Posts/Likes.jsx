import { IconButton, makeStyles } from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import axios from "axios";
import React, { useContext, useState } from "react";
import UserContext from "../../../context/user";

const useStyles = makeStyles({
  like: {
    display: "flex",
    alignItems: "space-between",
  },
  nbLike : {
    fontFamily: "Bebas Neue", 
    fontSize : "15px", 
  }
  
});

function Likes({ post }) {
  const classes = useStyles();
  const { connectedUser } = useContext(UserContext);
  const [liked, setLiked] = useState(false);
  const handleClick = async () => {
    try {
      const accessToken = localStorage.getItem("userToken");
      if (accessToken) {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };

        await axios.post(
          `https://wildbook-api.herokuapp.com/posts/${post?._id}/like`,
          {},
          config
        );

        setLiked(true);
      }
    } catch (e) {}
  };
  return (
    <div className={classes.like}>
      <IconButton onClick={handleClick}>
        {!post?.likes?.find((like) => like._id === connectedUser._id) &&
          !liked && <FavoriteBorder />}
        {(post?.likes?.find((like) => like._id === connectedUser._id) ||
          liked) && <Favorite color="primary" />}
      </IconButton>
      <p className={classes.nbLike}>{post?.likes?.length + (liked ? 1 : 0)}</p>
    </div>
  );
}

export default Likes;
