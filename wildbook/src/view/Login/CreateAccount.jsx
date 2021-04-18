import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      display: "flex",
      flexDirection: "column",  
    },
    box1: {
        border: "2px solid black",
    },
  },
}));

export default function CreateAccount() {
  const classes = useStyles();
  

  return (
    <Box class="cadre2">
    <div className={classes.box1}>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Nom" />
      <TextField id="standard-basic" label="Prénom" />
      <TextField id="date" label="Birthday" type="date" defaultValue="1991-08-28" className={classes.textField} InputLabelProps={{shrink: true,}}/>
      <TextField id="standard-basic" label="Mail" />
      <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password"/>
      <Button variant="outlined">S'inscrire</Button>
    </form>
    </div>
    </Box>
  );
}