import MainLayout from "./layout/MainLayout";

import { createTheme, ThemeProvider } from '@mui/material/styles';


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

function App() {

  return (
    <div>
      {/* mui customize theme provider */}
      <ThemeProvider theme={theme}>
        <MainLayout />
      </ThemeProvider>
    </div>
  )
}

export default App
