import React, { useEffect, useState } from "react";
import NewWilder from "./NewWilder/NewWilder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { makeStyles } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles(() => ({
  windowContainer: {
    fontFamily: "Bebas Neue",
    margin: "10px",
    width: "300px",
    height: "400px",
    display: "block",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    marginRight: "100px" /*300*/,
    marginLeft: "100px",
    marginTop: "100px",
    borderRadius: "8px",
    backgroundColor: "#F1F1F1"
  },

  titleContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },

  title: {
    marginLeft: "20px",
    //padding: "10px 0",
    color: "#EA5655",
    fontSize: "25px",
    letterSpacing : "2px"
    
  },

  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
  },

  wilderContainer: {
    width: "300px",
    height: "300px",
    //border: "#B0B0B0 solid 2px",
    overflowY: "auto"
  },
}));

function LastSubscribers() {
  const classes = useStyles();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    try {
      const accessToken = localStorage.getItem("userToken");
      if (accessToken) {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        axios
          .get(
            "https://wildbook-api.herokuapp.com/users?sortBy=createdAt&sort=-1&limit=15",
            config
          )
          .then((response) => response.data)
          .then((data) => {
            console.log(data);
            setUsers(data);
            console.log(users);
          });
      }
    } catch (e) {
      //ici afficher un message d'erreur  à l'utilisateur
    }
  };

  return (
    <div className={classes.windowContainer}>
      <div className={classes.titleContainer}>
        <div className={classes.icon}>
          <PeopleAltIcon style={{ color: "#EA5655" }} />
        </div>
        <h3 className={classes.title}>New Wilders :</h3>
      </div>
      <div className={classes.wilderContainer}>
        {users.map((wilder, index) => (
          <NewWilder key={index} {...wilder} />
        ))}
      </div>
    </div>
  );
}

export default LastSubscribers;
