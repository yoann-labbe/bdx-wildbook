import React from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router";


const useStyles = makeStyles(() => ({
  wilder: {
    fontFamily: "Dosis, sans serif",
    fontSize: "15px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    borderBottom: "#EA5655 solid 2px",
    "&:hover": {
      cursor: "pointer",
    },
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

const NewWilder = ({ avatarUrl, firstName, lastName, _id }) => {
  const classes = useStyles();
  const history = useHistory();
  const redirectToProfile = () => {
    history.push(`/profile/users/${_id}`);
  };

  return (
    <div className={classes.wilder} onClick={redirectToProfile}>
      <img src={avatarUrl} className={classes.littleAvatar} alt={firstName} />
      <p className={classes.newWilderName}>
        {firstName} {lastName}
      </p>
    </div>
  );
};

export default NewWilder;
