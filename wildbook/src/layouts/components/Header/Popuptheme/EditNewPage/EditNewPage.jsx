import React from 'react';
import { InputLabel, makeStyles, MenuItem, Select, TextField, FormControl, Button } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    
    editNewPageContainer : {
        width: "600px",
        height: "700px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "50px auto",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
        padding: "0px",
    },

    bandeau : {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "#B0B0B0 solid 1px",
        margin: "0px",
        width: "100%",
    },

    bandeauTitle : {
        margin: " auto 20px",
        color: "#4F4F4F"
    },

    form : {
        display: "flex",
        flexDirection: "column",
        width: "70%",
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: "70%",
    },
      selectEmpty: {
        marginTop: theme.spacing(2),
        width: "50%",
    },

    buttonClose : {
        padding: "0",
        border: "none",
        cursor: "pointer",
        background: "none",
        padding: "5px",
    },

    closeIcon : {
            "&:hover" : {fill: "#EA5655"},
            "&:active" : {fill: "#000000"},
    },

      buttonCreation: { 
          marginBottom : "100px",
    },

      descriptionBox: {
          width: "70%",
      }
    }));


function EditNewPage () {
    const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

    return (
        <div className={classes.editNewPageContainer}>
            <div className={classes.bandeau}>
                <p className={classes.bandeauTitle}>Créer une nouvelle Page</p>
                <div>
                    <button className={classes.buttonClose}>
                        <CloseIcon className={classes.closeIcon}/>
                    </button>
                </div>
            </div>
            <form className={classes.form} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Titre" color="secondary"/>
            <TextField id="standard-basic" label="Sujet" color="secondary"/>
            </form>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label" color="secondary">Topic</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    color="secondary"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value={0}>Open-Space</MenuItem>
                    <MenuItem value={1}>Events</MenuItem>
                    <MenuItem value={2}>JS</MenuItem>
                    <MenuItem value={3}>PHP</MenuItem>
                    <MenuItem value={4}>Data</MenuItem>
                    <MenuItem value={5}>Testeur</MenuItem>
                    <MenuItem value={6}>Quests advices</MenuItem>
                    <MenuItem value={7}>Playground</MenuItem>
                    <MenuItem value={8}>ClashOfCodes</MenuItem>
                    <MenuItem value={9}>Random</MenuItem>
                </Select>
            </FormControl>
            <TextField className={classes.descriptionBox}
                id="outlined-multiline-static"
                label="Description"
                color="secondary"
                multiline
                rows={4}
                defaultValue=""
                variant="outlined"
             />
             <Button className={classes.buttonCreation} variant="contained">Créer</Button>

        </div>
    );
}

export default EditNewPage;
