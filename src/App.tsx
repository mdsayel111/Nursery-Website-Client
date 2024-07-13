import MainLayout from "./layout/MainLayout";

import { ThemeProvider } from '@mui/material/styles';
import theme from "./MUI-theme";

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
