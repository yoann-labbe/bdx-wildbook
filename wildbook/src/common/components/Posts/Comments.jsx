import { Card, makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles({
  cardcom: {
    marginTop: "20px",
    backgroundColor: "white",
    margin: "10px",
    borderRadius: "25px",
  },
  card: {
    marginLeft: "18px",
    fontFamily: "Neucha",
    fontSize: "18px",
  },
  card1: {
    marginLeft: "10px",
    fontFamilmy: "Nunito",
    fontWeight: "bold",
    fontSize: "15px"
  },
});
function Comments({ comment }) {
  const classes = useStyles();
  return (
    <div>
      {comment.map((newComment, index) => (
        <Card key={index} className={classes.cardcom}>
          <p className={classes.card1}>
            {newComment.author.firstName} has comment :
          </p>
          <p className={classes.card}>{newComment.text}</p>
        </Card>
      ))}
    </div>
  );
}

export default Comments;
