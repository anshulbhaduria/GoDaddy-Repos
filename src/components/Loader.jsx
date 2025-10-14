import { CircularProgress, Box } from "@mui/material";

const Loader = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="60vh"
  >
    <CircularProgress color="primary" />
  </Box>
);

export default Loader;
