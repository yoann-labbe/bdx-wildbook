import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  wilder: {
    fontFamily: "Bebas Neue",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    borderBottom: "#EA5655 solid 2px",
  },

  littleAvatar: {
    width: "40px",
    height: "40px",
    borderRadius: "100%",
    margin: "5px 20px 5px 5px",
  },

  newWilderName: {
    fontSize: "default",
  },
}));

const NewWilder = ({ avatarUrl, firstName, lastName }) => {
  const classes = useStyles();
  return (
    <div className={classes.wilder}>
      <img src={avatarUrl} className={classes.littleAvatar} alt={firstName} />
      <p className={classes.newWilderName}>
        {firstName} {lastName}
      </p>
    </div>
  );
};

export default NewWilder;
