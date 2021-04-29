import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  hOneValue: {
    margin: 0,
    paddingTop: "10px",
  },
}));

function TitreCouverture({ value, onChange, name, editionMode = false }) {
  const classes = useStyles();

  return (
    <div>
      {!editionMode && <h1 className={classes.hOneValue}>{value}</h1>}
      {editionMode && (
        <TextField
          name={name}
          label={name}
          color="secondary"
          value={value}
          onChange={onChange}
          maxLength="40"
        />
      )}
    </div>
  );
}

export default TitreCouverture;
