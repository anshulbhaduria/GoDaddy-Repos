import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("react-router", () => ({ Link: ({ children }) => children }));

import RepoListItem from "../components/RepoListItem";

describe("RepoListItem", () => {
  const mockRepo = {
    id: 1,
    name: "test-repo",
    language: "JavaScript",
  };

  it("renders repo name and language", () => {
    render(<RepoListItem repo={mockRepo} />);
    expect(screen.getByText("test-repo")).toBeInTheDocument();
    expect(screen.getByText(/Language:/)).toBeInTheDocument();
  });

  it("shows view details button", () => {
    render(<RepoListItem repo={mockRepo} />);
    expect(screen.getByText(/View Details/i)).toBeInTheDocument();
  });
});
