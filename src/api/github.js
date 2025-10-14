import axios from "axios";

const BASE_URL = "https://api.github.com/orgs/godaddy/repos";

export const fetchRepos = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const fetchRepoByName = async (repoName) => {
  const response = await axios.get(
    `https://api.github.com/repos/godaddy/${repoName}`
  );
  return response.data;
};
