import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => (
  <AppBar
    position="sticky"
    sx={{ backgroundColor: "#1B1B1B", color: "#fff", py: 1 }}
  >
    <Toolbar sx={{ justifyContent: "center" }}>
      <Typography variant="h6" fontWeight={700}>
        GoDaddy Repositories Viewer
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
