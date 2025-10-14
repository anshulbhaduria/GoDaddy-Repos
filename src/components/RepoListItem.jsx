import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router";

const RepoListItem = ({ repo }) => (
  <Box sx={{ mb: 2 }}>
    <ListItem
      sx={{
        py: 2,
        px: 3,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        borderRadius: 2,
        "&:hover": { boxShadow: "0px 4px 15px rgba(0,0,0,0.1)" },
      }}
    >
      <ListItemText
        primary={repo.name}
        secondary={
          repo.language ? `Language: ${repo.language}` : "Language: N/A"
        }
        primaryTypographyProps={{
          fontWeight: 600,
          sx: { wordWrap: "break-word", overflowWrap: "break-word" },
        }}
        secondaryTypographyProps={{ color: "primary", sx: { mt: 0.5 } }}
      />
      <ListItemSecondaryAction sx={{ mt: { xs: 2, sm: 0 } }}>
        <Button
          component={Link}
          to={`/repo/${repo.name}`}
          variant="contained"
          color="primary"
        >
          View Details
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  </Box>
);

export default RepoListItem;
