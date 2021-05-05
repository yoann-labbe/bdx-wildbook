import { Card, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  cardcom: {
    marginTop: "20px",
    backgroundColor: "white",
    margin: "10px",
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
          <p className={classes.card}>
            {newComment.author.firstName} has comment :
          </p>
          <p className={classes.card}>{newComment.text}</p>
        </Card>
      ))}
    </div>
  );
}

export default Comments;
