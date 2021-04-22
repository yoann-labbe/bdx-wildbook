import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles(() => ({
banniere : {
    border: "2px solid black",
    height: "150px",
    backgroundImage: `url(${"https://picsum.photos/1200/150?ramdom"})`,
    opacity: "0,8",
    
},
follow : {
   display: "flex",
   justifyContent: "flex-end",
   marginTop: "120px",
   marginRight: "5px",
},
text: {
    position: "absolute",
    marginTop: "25px",
    textAlign: "center",
    width: "100%",
},
}))

    

function Couverture () {
    const classes = useStyles();
    return (
    <div className={classes.banniere}>
    <div className={classes.text}><h1>Votre titre de sujet</h1>
    <EditIcon/></div>
    <div className={classes.follow}>
        <Button variant="contained" color="primary">Follow</Button>
    </div>
    </div>
    );

}

export default Couverture;
