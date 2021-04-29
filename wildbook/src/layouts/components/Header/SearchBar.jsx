import axios from 'axios';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from 'react-router';


export default function SearchBar() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");
  const router = useHistory();
  React.useEffect(() => {
    let active = true;
  console.log('coucou');
   

    (async () => {
      const response = await axios
      .get("https://wildbook-api.herokuapp.com/users?keyword="+ keyword)
     
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

  return (
    <Autocomplete
      
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
      onChange={(event, newValue) => router.push(`/profile/${newValue._id}`)}
 
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
