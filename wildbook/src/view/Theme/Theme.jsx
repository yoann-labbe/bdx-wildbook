import React from 'react';
import { makeStyles } from "@material-ui/core";
import CreatePost from '../../common/components/CreatePost/CreatePost';
import Posts from '../../common/components/Posts/Posts';


const useStyles = makeStyles(() => ({
    
    theme : {
        display: "flex",
        justifyContent: "center",
    },

    postContainer : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
    }
}))




function Theme() {
    const classes = useStyles();
    
    return (
        <div className={classes.theme}>
              <div className={classes.postContainer}>
                <CreatePost />
                <Posts />
            </div>
        </div>
    );

}

export default Theme;