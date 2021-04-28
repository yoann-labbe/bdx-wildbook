import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex",
    },
  },
  creat: {
    height: "550px",
    width: "600px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  page1: {
    marginLeft: "125px",
    marginTop: "30px",
  },
  box1: {
    border: "2px #F76C6D solid",
    height: "300px",
    width: "450px",
    overflow: "scroll",
    marginLeft: "10px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
  },
  close: {
    border: "none",
    cursor: "pointer",
  },
  containerClose: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
}));

export default function Newpage() {
  const classes = useStyles();

  return (
    <Box className={classes.creat}>
      <div className={classes.containerClose}>
        <button className={classes.close}>
          <CloseIcon />
        </button>
      </div>
      <form className={classes.root} noValidate autoComplete="on">
        <TextField
          id="standard-search"
          label="Rechercher une page"
          type="search"
        />
        <Box className={classes.box1}>Page 1</Box>
        <Button className={classes.page1} variant="outlined">
          Créer une nouvelle page
        </Button>
      </form>
    </Box>
  );
}
