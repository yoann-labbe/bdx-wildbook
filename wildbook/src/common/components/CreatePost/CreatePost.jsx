import { Button, Card, CardContent, IconButton, TextField } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AddAPhoto, BorderColor, YouTube } from '@material-ui/icons';




const useStyles = makeStyles({
    root: {
        width: 650,
        height: 230,
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
    },
    sendB: {
        float: "right",

    },
    centerbutton :{
        display:"flex",
   justifyContent:"space-around",
    },

});

function CreatePost(props) {
    const classes = useStyles();
    return (
  
        <Card className={classes.root}>
            <CardContent>
               <div className={classes.centerbutton}>
                   <IconButton>

               <BorderColor color="primary" style={{fontSize : 65}}  />
                   </IconButton>
                   <IconButton>
                        <AddAPhoto color="primary" style={{fontSize : 65}}  />
                   </IconButton>
                   <IconButton>
                <YouTube color="primary" style={{fontSize : 65}}  />
                   </IconButton>
               </div>

                <TextField id="filled-full-width"
                    label="Creer un post"
                    size="small"
                    variant="outlined"
                    style={{ margin: 10 }}
                    placeholder="Post..."
                    fullWidth
                    margin="normal">

                </TextField>

                <Button variant="contained" color="primary" className={classes.sendB} flexDirection="row-reverse">
                    send

                    </Button>

            </CardContent>

        </Card>

    );
}

export default CreatePost;