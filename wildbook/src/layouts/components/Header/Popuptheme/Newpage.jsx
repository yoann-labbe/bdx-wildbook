import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import "./Newpage.css";


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      display: "flex",
    },
  creat: {
    border: "2px black solid",
    height: "200px",
    width: "300px",
  },
  page1: {
    marginLeft: "20px",
    marginTop: "30px",
},
  box1: {
    border: "2px black solid",
    height: "300px",
    width: "450px",
    overflow: "scroll",
    marginLeft: "10px",
  },
  },
}));

export default function Newpage() {
  const classes = useStyles();

  return (
    <Box className="creat">
    <button><CloseIcon/></button>
    <form className={classes.root} noValidate autoComplete="on">
      <TextField id="standard-search" label="Rechercher une page" type="search" />
      <Box className={classes.box1}>Page 1</Box>
      <Button className={classes.page1} variant="outlined">Créer une nouvelle page</Button>
    </form>
    </Box>
  );
}