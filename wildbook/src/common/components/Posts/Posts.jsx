import React from 'react';
import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import { AccountCircle, ChatBubbleOutline, FavoriteBorder, ThumbUpAlt } from '@material-ui/icons';
import PostCard from './PostCard';


const useStyles = makeStyles({
    root: {
        width: 800,
        height: "100%",
        marginBottom: 40,
    },
    title: {
        marginLeft: 20,
    },

})



function Posts() {
    const classes = useStyles();
    const post = {
        urlImage: 'https://picsum.photos/700/300?ramdom',
        /*titrePhoto: 'Ma Photo',*/
        urlVideo: 'https://www.youtube.com/embed/C005_zx3KaA'


    }
    return (
        <div>
            <Card className={classes.root} label="Creer un post" >
                <h3 className={classes.title}>
                    Dernier Post
                </h3>
                <div className={classes.CardContent}>

                    <CardContent >
                        <PostCard post={post} />
                        <PostCard post={post} />
                        <PostCard post={post} />

                    </CardContent>
                </div>

            </Card>
        </div>
    );
}

export default Posts;

