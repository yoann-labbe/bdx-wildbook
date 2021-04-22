import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';



const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    marginBlockStart: '30px',

   
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
width: '100%',
alignItems: 'center',
color: "rgb(226, 107, 107)",
  },

closeIcon :{
  display: "flex",
  justifyContent: "flex-end",
  color: "#F76C6D",
}, 

popUp : {
  backgroundColor: 'rgb(250, 248, 248)',
  maxWidth: '700px',
  maxHeight: '500px',
  overflow: "scroll",
  
 
}, 
title : {
  display: "flex",
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: '25px', 
  color: "rgb(226, 107, 107)"
}, 

date: {
  fontSize: "10px",
  color: "rgb(226, 107, 107)",
}
}));

const message = `New Notification`;

const date = `1 day ago`;
 
function Notif() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
    
    
    <div className={classes.read}>
    <Typography>Mark all as read : </Typography> 
    <Checkbox 
    className={classes.check}
    checked={true}
    inputProps={{ 'aria-label': 'primary checkbox' }}/>
    </div>

      <Paper className={classes.paper} >
  
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
      {/*</Paper>*/}
      </div>

  );
}














export default Notif;