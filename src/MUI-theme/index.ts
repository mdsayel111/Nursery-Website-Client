import { createTheme } from "@mui/material";

// MUI customize breakpoint
const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 375,
        md: 426,
        lg: 769,
        xl: 1279,
      },
    },
    palette: {
      primary: {
        main: '#1976d2',
      },
    },
  });

  export default theme