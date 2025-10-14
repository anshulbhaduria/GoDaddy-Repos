import { useEffect, useState } from "react";
import { useParams, Link as RouterLink } from "react-router";
import { fetchRepoByName } from "../api/github";
import Loader from "../components/Loader";
import {
  Container,
  Typography,
  Box,
  Link as MuiLink,
  Button,
  Divider,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const RepoDetails = () => {
  const { name } = useParams();
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRepoByName(name)
      .then((data) => {
        setRepo(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [name]);

  if (loading) return <Loader />;

  return (
    <Container sx={{ mt: 6, mb: 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        component={RouterLink}
        to="/"
        variant="outlined"
        sx={{ mb: 3 }}
      >
        Back
      </Button>

      <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom>
        {repo.name}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {repo.description || "No description provided."}
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Box sx={{ lineHeight: 2 }}>
        <Typography>
          <strong>Language:</strong> {repo.language || "N/A"}
        </Typography>
        <Typography>
          <strong>Forks:</strong> {repo.forks_count}
        </Typography>
        <Typography>
          <strong>Open Issues:</strong> {repo.open_issues_count}
        </Typography>
        <Typography>
          <strong>Watchers:</strong> {repo.watchers_count}
        </Typography>
      </Box>

      <MuiLink
        href={repo.html_url}
        target="_blank"
        rel="noopener"
        sx={{
          mt: 4,
          display: "inline-block",
          color: "#00A4A6",
          fontWeight: 600,
          "&:hover": { textDecoration: "underline" },
        }}
      >
        View on GitHub →
      </MuiLink>
    </Container>
  );
};

export default RepoDetails;
