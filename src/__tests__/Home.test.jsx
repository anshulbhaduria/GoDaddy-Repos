import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("../api/github", () => ({ fetchRepos: jest.fn() }));
jest.mock("react-router", () => ({ Link: ({ children }) => children }));
import { fetchRepos } from "../api/github";
import Home from "../pages/Home";

describe("Home Page", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders header and repo items from API", async () => {
    const repos = [{ id: 1, name: "repo-one", language: "JavaScript" }];
    fetchRepos.mockResolvedValueOnce(repos);

    render(<Home />);

    expect(
      await screen.findByText("GoDaddy GitHub Repositories")
    ).toBeInTheDocument();

    expect(await screen.findByText("repo-one")).toBeInTheDocument();
  });

  it("shows no repositories message when API returns empty list", async () => {
    fetchRepos.mockResolvedValueOnce([]);
    render(<Home />);

    expect(
      await screen.findByText("No repositories found.")
    ).toBeInTheDocument();
  });
});
