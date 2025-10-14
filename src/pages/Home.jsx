import { useEffect, useState } from "react";
import { fetchRepos } from "../api/github";
import Loader from "../components/Loader";
import RepoListItem from "../components/RepoListItem";
import {
  Container,
  Typography,
  Box,
  TextField,
  InputAdornment,
  List,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Home = () => {
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchRepos()
      .then((data) => {
        setRepos(data);
        setFilteredRepos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setFilteredRepos(
      repos.filter((repo) => repo.name.toLowerCase().includes(value))
    );
  };

  if (loading) return <Loader />;

  return (
    <Container sx={{ mt: 6, mb: 4 }}>
      <Typography
        variant="h4"
        color="primary"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
      >
        GoDaddy GitHub Repositories
      </Typography>

      <Box display="flex" justifyContent="center" mb={4}>
        <TextField
          placeholder="Search repository..."
          value={search}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
          }}
          sx={{ width: { xs: "100%", sm: "60%", md: "40%" } }}
        />
      </Box>

      <List>
        {filteredRepos.length === 0 ? (
          <Typography textAlign="center" color="text.secondary">
            No repositories found.
          </Typography>
        ) : (
          filteredRepos.map((repo) => (
            <RepoListItem key={repo.id} repo={repo} />
          ))
        )}
      </List>
    </Container>
  );
};

export default Home;
