import React from 'react';
import { makeStyles } from "@material-ui/core";
import CreatePost from '../../common/components/CreatePost/CreatePost';
import Posts from '../../common/components/Posts/Posts';
import Couverture from "./components/Couverture";



const useStyles = makeStyles(() => ({
    
    theme : {
        display: "flex",
        justifyContent: "center",
    },

    postContainer : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "100%",
    }
}))




function Theme() {
    const classes = useStyles();

    return (
        <div className={classes.theme}>
              <div className={classes.postContainer}>
                <Couverture />
                <CreatePost />
                <Posts />
            </div>
        </div>
    );

}

export default Theme;