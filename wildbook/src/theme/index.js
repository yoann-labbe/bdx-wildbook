import palette from "./palette";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const theme = responsiveFontSizes(
    createMuiTheme({
      palette: palette,
    })
  );

  export default theme; 