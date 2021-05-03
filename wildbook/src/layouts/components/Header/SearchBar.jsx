import axios from "axios";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useHistory } from "react-router";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  SearchBar: {
    widht: "100px",
    height: "80px",
    padding: "10px",
  },
}));

export default function SearchBar() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");
  const router = useHistory();
  React.useEffect(() => {
    let active = true;
    console.log("coucou");

    (async () => {
      const response = await axios.get(
        "https://wildbook-api.herokuapp.com/users?keyword=" + keyword
      );

      const users = response.data;
      console.log(users);
      if (active) {
        setOptions(users);
      }
    })();

    return () => {
      active = false;
    };
  }, [keyword]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  //const classes = useStyles();
  return (
    <Autocomplete
      //className={classes.SearchBar}
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => `${option.firstName} ${option.lastName}`}
      options={options}
      onChange={(event, newValue) => {
        if (newValue && newValue._id) {
          router.push(`/profile/users/${newValue._id}`);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          variant="outlined"
          onChange={(e) => setKeyword(e.target.value)}
          InputProps={{
            ...params.InputProps,
          }}
        />
      )}
    />
  );
}
