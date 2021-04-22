import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles(() => ({ 
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        listStyle: 'none',
        color: 'rgb(247, 108, 109)',
        backgroundColor: 'rgb(250, 248, 248)',
        boxShadow: '0px 3px 15px #b3b3b3',
        margin: '0 auto',
        paddingLeft: 0,
        fontSize: '30px',
        height: '70px',
    }, 

    logo: {
        width: '59px',
        height: '92px', 
        justifyContent: 'flex-start',
        paddingLeft: '5px',
        display: 'flex',
        zIndex: '1',
        paddingTop: '35px',
    },

    items: {
        fontFamily: 'Bebas Neue',
    }, 

    input: {
        width : '150px',
        height: '18px',
        borderRadius: '5px' ,
        borderColor: 'rgb(248, 245, 245)',
        color: 'rgb(247, 108, 109)',
    }, 

    profil: {
        border: 'rgb(226, 107, 107) 1px solid',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '40px',
        width: '200px',
        padding: '10px',
        margin: '8px',
    }
}));

function Header () {
    
const classes = useStyles(); 
return (
        
    <div className={classes.nav}>
        <img src="./assets/newLogo.png" alt="logo" className={classes.logo}></img>
        <p className={classes.items}>NEWS</p>
        <p className={classes.items}>TOPICS</p>
        <input className={classes.input} label="search" placeholder="Search"></input>
    
        {/*<form id="formsearch" className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>*/}
        
        <div className={classes.profil}>
            <AccountCircleIcon style={{fontSize: 60}}/>
            <NotificationsIcon />
            <SettingsIcon />
        </div>
    </div>
)
}


export default Header;