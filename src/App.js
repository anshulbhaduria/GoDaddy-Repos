import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import RepoDetails from "./pages/RepoDetails";
import Header from "./components/Headers";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repo/:name" element={<RepoDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
