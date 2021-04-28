
import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, IconButton, makeStyles, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import { AccountCircle, ChatBubbleOutline, ChatOutlined, FavoriteBorder, SendTwoTone, } from '@material-ui/icons';

const element = <img src={"https://picsum.photos/750/300?ramdom"} />

const useStyles = makeStyles({
    icon: {
        float: "right",
    },
    cardm: {
        height: "100%",
        marginBottom: 12,
        margin: 20,
        backgroundColor: "white",
        padding: 15,
    },
    cardp: {
        height: "100%",
        marginBottom: 12,
        marginLeft: 20,
        marginTop: 20,

    },
    div: {
        overflow: "scroll",

    },
    textA: {
        minWidth: 441,
        maxWidth: 441,
        minHeight: 40,
    },
    addP: {
        height: "100%",
        maxWidth: 430,
        paddingLeft: 5,
    },
    btn: {
        float: "right",
    },
})


function PostCard(props) {
    const [com, setcom] = useState()
    const [display, setdisplay] = useState(false);
    const [displays, setdisplays] = useState(false)
    const classes = useStyles()
    const handleClick = () => {
        setdisplay(!display);
    }
    const handleChange = (e) => {
        setcom(e.target.value)
    }
    const handleClick2 = () => {
        setdisplays(!displays)
        setdisplay(!display)
    }


    return (
        <div className={classes.div}>
            <Card className={classes.cardm}>
                <AccountCircle fontSize="medium" />
                <CardMedia
                    title="post"
                    image />
                {element}
                <CardContent>
                    <Typography>
                        Titre
                        </Typography>
                    <div className={classes.icon}>
                        <IconButton>
                            <FavoriteBorder />
                        </IconButton>
                        <IconButton
                            onClick={handleClick}>
                            <ChatBubbleOutline />
                        </IconButton>
                    </div>
                    {display && <Card>

                        <TextareaAutosize
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
                        </TextareaAutosize>
                        <IconButton className={classes.btn}
                            color="primary"
                            onClick={handleClick2}>
                            <SendTwoTone />
                        </IconButton>
                        .
                    </Card>}

                    {displays &&
                        <div>

                            <Card
                                className={classes.cardp}
                                variant="outlined"
                            >

                                <p className={classes.addP}>{com}</p>
                            </Card>
                        </div>}



                </CardContent>
            </Card>
        </div>


    );
}

export default PostCard;