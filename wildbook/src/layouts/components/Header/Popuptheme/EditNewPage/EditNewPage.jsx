import React, { useState } from "react";
import {
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  FormControl,
  Button,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  editNewPageContainer: {
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

  bandeau: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "#B0B0B0 solid 1px",
    margin: "0px",
    width: "100%",
  },

  bandeauTitle: {
    margin: " auto 20px",
    color: "#4F4F4F",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "420px",
    width: "70%",
    marginLeft: 0,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    width: "50%",
  },

  buttonClose: {
    padding: "0",
    border: "none",
    cursor: "pointer",
    background: "none",
    padding: "5px",
  },

  closeIcon: {
    "&:hover": { fill: "#EA5655" },
    "&:active": { fill: "#000000" },
  },

  buttonCreation: {
    marginBottom: "100px",
  },

  descriptionBox: {
    width: "420px",
    alignSelf: "center",
    marginTop: "50px",
  },
}));

function EditNewPage() {
  const classes = useStyles();
  const [form, setForm] = useState({
    title: " ",
    subject: " ",
    topic: " ",
    description: " ",
  });

  const handleClick = () => {
    console.log(form);
  };

  const handleModifications = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className={classes.editNewPageContainer}>
      <div className={classes.bandeau}>
        <p className={classes.bandeauTitle}>Créer une nouvelle Page</p>
        <div>
          <button className={classes.buttonClose}>
            <CloseIcon className={classes.closeIcon} />
          </button>
        </div>
      </div>
      <form
        className={classes.form}
        onSubmit={EditNewPage}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Titre"
          color="secondary"
          value={form.title}
          onChange={handleModifications}
          name={"title"}
        />
        <TextField
          id="standard-basic"
          label="Sujet"
          color="secondary"
          value={form.subject}
          onChange={handleModifications}
          name={"subject"}
        />
        <FormControl className={classes.formControl}>
          <InputLabel
            id="demo-simple-select-label"
            color="secondary"
            name={"topics"}
          >
            Topic
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            style={{ width: 420 }}
            color="secondary"
            value={form.topics}
            onChange={handleModifications}
            name={"topics"}
          >
            <MenuItem value={"Open-Space"}>Open-Space</MenuItem>
            <MenuItem value={"Events"}>Events</MenuItem>
            <MenuItem value={"JS"}>JS</MenuItem>
            <MenuItem value={"PHP"}>PHP</MenuItem>
            <MenuItem value={"Data"}>Data</MenuItem>
            <MenuItem value={"Testeur"}>Testeur</MenuItem>
            <MenuItem value={"Quests advices"}>Quests advices</MenuItem>
            <MenuItem value={"Playground"}>Playground</MenuItem>
            <MenuItem value={"ClashOfCodes"}>ClashOfCodes</MenuItem>
            <MenuItem value={"Random"}>Random</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className={classes.descriptionBox}
          id="outlined-multiline-static"
          label="Description"
          color="secondary"
          multiline
          rows={4}
          defaultValue=""
          variant="outlined"
          value={form.description}
          onChange={handleModifications}
          name={"description"}
        />
      </form>
      <Button
        className={classes.buttonCreation}
        variant="contained"
        onClick={handleClick}
      >
        Créer
      </Button>
    </div>
  );
}

export default EditNewPage;
