import { Card, makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles({
  cardcom: {
    marginTop: "10px",
    backgroundColor: "white",
    marginBottom: "10px",
  },
  card: {
    marginLeft: "8px",
  },
});
function Comments({ comment }) {
  const classes = useStyles();
  return (
    <div>
      {comment.map((newComment, index) => (
        <Card key={index} className={classes.cardcom}>
          <p className={classes.card}>{newComment.text}</p>
        </Card>
      ))}
    </div>
  );
}

export default Comments;
