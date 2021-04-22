import React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
wilder : {
    fontFamily: 'Bebas Neue',
    width: "100%",
    display:"flex",
    flexDirection: "row",
    borderBottom: "#EA5655 solid 2px",
},

littleAvatar : {
    width: "40px",
    height: "40px",
    borderRadius: "100%",
    margin: "5px 20px 5px 5px",
},

newWilderName : {
    fontSize: "medium",
}
}));

const NewWilder = ({avatar, name}) => {
    const classes = useStyles();
    return (
        <div className={classes.wilder}>
            <img src={avatar}className={classes.littleAvatar} alt={name} />
            <p className={classes.newWilderName}>{name}</p>
        </div>

    );
}

export default NewWilder;
