import React, { useContext } from "react";
import { Link, makeStyles } from "@material-ui/core";
import UserContext from "../../../../../context/user";
import { useHistory } from "react-router";

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
  const { connectedUser } = useContext(UserContext);

  return (
    <div className={classes.wilder}>
      <Link
        to={"/profile/users/id"}
        style={{
          color: "inherit",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={avatarUrl} className={classes.littleAvatar} alt={firstName} />
      </Link>
      <p className={classes.newWilderName}>
        {firstName} {lastName}
      </p>
    </div>
  );
};

export default NewWilder;
