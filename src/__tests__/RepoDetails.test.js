import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("../api/github", () => ({ fetchRepoByName: jest.fn() }));
jest.mock("react-router", () => ({
  useParams: () => ({ name: "repo-one" }),
  Link: ({ children }) => children,
}));

import { fetchRepoByName } from "../api/github";
import RepoDetails from "../pages/RepoDetails";

describe("RepoDetails Page", () => {
  afterEach(() => jest.clearAllMocks());

  it("renders repo details from API", async () => {
    const repo = {
      name: "repo-one",
      description: "A repo",
      language: "JavaScript",
      forks_count: 1,
      open_issues_count: 0,
      watchers_count: 5,
      html_url: "https://github.com/godaddy/repo-one",
    };

    fetchRepoByName.mockResolvedValueOnce(repo);
    render(<RepoDetails />);

    expect(await screen.findByText("repo-one")).toBeInTheDocument();
    expect(await screen.findByText("A repo")).toBeInTheDocument();
    expect(await screen.findByText(/Language:/)).toBeInTheDocument();
  });

  it("shows fallback description when none provided", async () => {
    const repo = {
      name: "repo-two",
      description: "",
      language: null,
      forks_count: 0,
      open_issues_count: 0,
      watchers_count: 0,
      html_url: "#",
    };
    fetchRepoByName.mockResolvedValueOnce(repo);
    render(<RepoDetails />);

    expect(
      await screen.findByText("No description provided.")
    ).toBeInTheDocument();
  });
});
