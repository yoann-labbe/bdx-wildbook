import { makeStyles } from '@material-ui/core';
import React from 'react';
import CreatePost from '../../common/components/CreatePost/CreatePost';
import Posts from '../../common/components/Posts/Posts';
import LastSubscribers from '../Home/components/LastSubscribers/LastSubscribers';
import ProfilInfos from './components/ProfilInfos/ProfilInfos';

const useStyles= makeStyles({
    div : {
        height : "150%",
    },

})

function Profil() {
    const classes = useStyles();
    return (
        <div className={classes.div}>
          <ProfilInfos />
    <CreatePost/>
       { /* <Posts/>*/}
        </div>
        
        
           
        
    );
    

}

export default Profil;