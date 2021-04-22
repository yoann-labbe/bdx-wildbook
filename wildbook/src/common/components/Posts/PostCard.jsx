
import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, IconButton, makeStyles, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import { AccountCircle, ChatBubbleOutline, ChatOutlined, FavoriteBorder,} from '@material-ui/icons';

const element = <img src={"https://picsum.photos/800/100?ramdom"}/>

const useStyles = makeStyles({
    icon : {
        float: "right",
    },
    cardm :{
        height:"100%",
        marginBottom: 12,
        marginLeft:20,
    },
    div:{
    overflow: "scroll",
    },
    textA:{
        minWidth:441,
        maxWidth:441,
        minHeight:40,
    },
    addP:{
        height:"100%",
        maxWidth:430,
    },
})


function PostCard(props) {
    const [com, setcom]=useState()
    const [display, setdisplay] = useState(false);
    const classes =useStyles()
    const handleClick = ()=>{
        setdisplay(!display);
    }
    const handleChange = (e)=>{
        setcom(e.target.value)
    }    
        
    
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
                        <IconButton 
                        onClick={handleClick}>
                        <ChatBubbleOutline/>
                        </IconButton>
                        </div>
                        {display &&<TextareaAutosize
                        className={classes.textA}
                        id="filled-full-width"
                        label="Commenter"
                        size="small"
                        variant="outlined"
                        style={{ margin: 10 }}
                        placeholder="Commenter"
                        fullWidth
                        margin="normal"
                        value={com}
                        onChange={handleChange}
                        >
                        </TextareaAutosize>}
                        <Card
                        className={classes.cardm}
                        variant="outlined"
                        >
                        <p className={classes.addP}>{com}</p>
                        </Card>
                            
                            

                         </CardContent>
                    </Card>
                    </div> 
                    
                   
    );
}

export default PostCard;