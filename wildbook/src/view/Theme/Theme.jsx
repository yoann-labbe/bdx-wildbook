import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  makeStyles,
} from "@material-ui/core";
import CreatePost from "../../common/components/CreatePost/CreatePost";
import Couverture from "./components/Couverture";
import ComingSoon from "../../common/ComingSoon";
import Posts from "../../common/components/Posts/Posts";
import { useHistory } from "react-router";

const useStyles = makeStyles(() => ({
  theme: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },

  redirectButton: {
    paddingTop: "20px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    fontFamily: "Bebas Neue",
    fontSize: "20px",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

function Theme() {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const redirectToHome = () => {
    history.push("/");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    handleClickOpen();
  }, []);

  return (
    <div className={classes.theme}>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <DialogContent style={{ backgroundColor: "black" }}>
          <DialogContentText
            id="alert-dialog-description"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <ComingSoon />
            <button onClick={redirectToHome} className={classes.redirectButton}>
              BACK TO WILDBOOK
            </button>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Couverture style={{ width: "100%" }} />
      <CreatePost />
      <Posts />
    </div>
  );
}

export default Theme;
