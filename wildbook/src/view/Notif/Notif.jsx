import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import { useHistory } from "react-router";
import { Dialog, DialogContent, DialogContentText } from "@material-ui/core";
import ComingSoon from "../../common/ComingSoon";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
    marginBlockStart: "30px",
  },
  paper: {
    maxWidth: 600,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },

  check: {
    textAlign: "end",
  },

  read: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    alignItems: "center",
    color: "rgb(226, 107, 107)",
  },

  closeIcon: {
    display: "flex",
    justifyContent: "flex-end",
    color: "#F76C6D",
  },

  popUp: {
    backgroundColor: "rgb(250, 248, 248)",
    maxWidth: "700px",
    maxHeight: "500px",
    overflow: "scroll",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "25px",
    color: "rgb(226, 107, 107)",
  },

  date: {
    fontSize: "10px",
    color: "rgb(226, 107, 107)",
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

const message = `New Notification`;

const date = `1 day ago`;

function Notif() {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const redirectToHome = () => {
    history.push("/");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    handleClickOpen();
  }, []);

  return (
    <div className={classes.root}>
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
            <button
              onClick={redirectToHome}
              onClick={handleClose}
              className={classes.redirectButton}
            >
              BACK TO WILDBOOK
            </button>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <div className={classes.read}>
        <Typography>Mark all as read : </Typography>
        <Checkbox
          className={classes.check}
          checked={true}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </div>

      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography className={classes.date}>{date}</Typography>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography className={classes.date}>{date}</Typography>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography className={classes.date}>{date}</Typography>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography className={classes.date}>{date}</Typography>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography className={classes.date}>{date}</Typography>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography className={classes.date}>{date}</Typography>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography className={classes.date}>{date}</Typography>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Notif;
