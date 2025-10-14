import { ListItem, ListItemText, Button, Box } from "@mui/material";
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
        boxSizing: "border-box",
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
          sx: {
            wordWrap: "break-word",
            overflowWrap: "break-word",
            overflow: "hidden",
            textOverflow: "ellipsis",
            minWidth: 0,
          },
        }}
        secondaryTypographyProps={{ color: "primary", sx: { mt: 0.5 } }}
        sx={{
          flex: 1,
          minWidth: 0,
        }}
      />

      <Box
        sx={{
          mt: { xs: 2, sm: 0 },
          ml: { xs: 0, sm: 2 },
          display: "flex",
          justifyContent: { xs: "flex-start", sm: "flex-end" },
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <Button
          component={Link}
          to={`/repo/${repo.name}`}
          variant="contained"
          color="primary"
          sx={{
            width: { xs: "100%", sm: "auto" },
            whiteSpace: "nowrap",
          }}
        >
          View Details
        </Button>
      </Box>
    </ListItem>
  </Box>
);

export default RepoListItem;
