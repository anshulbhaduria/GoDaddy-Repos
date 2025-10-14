import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#00A4A6" },
    secondary: { main: "#1B1B1B" },
    background: { default: "#F4F6F8", paper: "#FFFFFF" },
    text: { primary: "#1B1B1B", secondary: "#555" },
  },
  typography: {
    fontFamily: ["Proxima Nova", "Helvetica Neue", "Arial", "sans-serif"].join(
      ","
    ),
    h4: { fontWeight: 700 },
    h6: { fontWeight: 600 },
    body2: { lineHeight: 1.6 },
  },
  shape: { borderRadius: 12 },
});

export default theme;
