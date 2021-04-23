import React from "react";
import NewWilder from "./NewWilder/NewWilder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  windowContainer: {
    fontFamily: "Bebas Neue",
    margin: "10px",
    width: "230px",
    height: "400px",
    display: "block",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    marginRight: "100px",/*300*/
    marginLeft: "100px",
    marginTop: "100px",
  },

  titleContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },

  title: {
    marginLeft: "20px",
    padding: "10px 0",
    color: "#EA5655",
  },

  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
  },

  wilderContainer: {
    width: "225px",
    height: "300px",
    border: "#B0B0B0 solid 2px",
    overflow: "scroll",
  },
}));

function LastSubscribers() {
  const classes = useStyles();

  const wilders = [
    { avatar: "./assets/avatar2.png", name: "Wilder 1" },
    {
      avatar: "./assets/avatar2.png",
      name: "Wilder 2",
    },
    {
      avatar: "./assets/avatar2.png",
      name: "Wilder 3",
    },
    {
      avatar: "./assets/avatar2.png",
      name: "Wilder 4",
    },
    {
      avatar: "./assets/avatar2.png",
      name: "Wilder 5",
    },
    {
      avatar: "./assets/avatar2.png",
      name: "Wilder 6",
    },
    {
      avatar: "./assets/avatar2.png",
      name: "Wilder 7",
    },
  ];

  console.log(wilders);

  return (
    <div className={classes.windowContainer}>
      <div className={classes.titleContainer}>
        <div className={classes.icon}>
          <PeopleAltIcon style={{ color: "#EA5655" }} />
        </div>
        <h3 className={classes.title}>New Wilders :</h3>
      </div>
      <div className={classes.wilderContainer}>
        {wilders.map((wilder, index) => (
          <NewWilder key={index} {...wilder} />
        ))}
      </div>
    </div>
  );
}

export default LastSubscribers;
