
import React from 'react';
import { Card, CardContent, CardMedia, IconButton, makeStyles, Typography } from '@material-ui/core';
import { AccountCircle, ChatBubbleOutline, FavoriteBorder, ThumbUpAlt } from '@material-ui/icons';

const element = <img src={"https://picsum.photos/800/100?ramdom"}/>

const useStyles = makeStyles({
    icon : {
        float: "right",
    },
    cardm :{
        marginBottom: 12,
        marginLeft:20,
    },
    div:{
    overflow: "scroll",
    },
})


function PostCard(props) {
    const classes =useStyles()
    return (
        <div className={classes.div}>
                    <Card className={classes.cardm}>
                    <AccountCircle fontSize="medium"/>
                    <CardMedia
                    title="post"
                    image  />
                    {element}
                    <CardContent>
                        <Typography>
                           Titre
                        </Typography>
                        <div className={classes.icon}>
                        <IconButton>
                        <FavoriteBorder/>
                        </IconButton>
                        <IconButton>
                        <ThumbUpAlt/>
                        </IconButton>
                        <IconButton>
                        <ChatBubbleOutline/>
                        </IconButton>
                       
                        </div>
                         </CardContent>
                    </Card>
                    </div> 
                    
                   
    );
}

export default PostCard;