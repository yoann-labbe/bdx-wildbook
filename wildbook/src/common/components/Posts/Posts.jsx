import React from 'react';
import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import { AccountCircle, ChatBubbleOutline, FavoriteBorder, ThumbUpAlt } from '@material-ui/icons';
import { blue } from '@material-ui/core/colors';
import PostCard from './PostCard';


const useStyles = makeStyles({
    root:{
        width: 650,
        height: 536,
    },
    title : {
        marginLeft: 20,
        color: "pink",
    },
    
  
})


function Posts(props) {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root} label="Creer un post" >
                <h3 className={classes.title}>
                    Dernier Post
                </h3>
                <CardContent>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                </CardContent>
                
            </Card>
        </div>
    );
}

export default Posts;