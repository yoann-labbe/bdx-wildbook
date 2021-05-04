import { IconButton, makeStyles } from "@material-ui/core";
import { FavoriteBorder } from "@material-ui/icons";
import React, { useState } from "react";

const useStyles = makeStyles({
  like: {
    display: "flex",
    alignItems: "space-between",
  },
});

function Likes({}) {
  const classes = useStyles();
  const [like, setLike] = useState(0);
  const [liked, setliked] = useState(false);
  const handleClick = () => {
    if (!false) {
      setLike(like + 1);
      setliked(true);
    }
  };
  return (
    <div className={classes.like}>
      <IconButton onClick={handleClick}>
        <FavoriteBorder />
      </IconButton>
      <p>Approved : {like}</p>
    </div>
  );
}

export default Likes;
