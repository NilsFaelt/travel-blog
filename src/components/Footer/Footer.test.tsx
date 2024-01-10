import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from ".";

test("Footer to render elements with correct links and hrefs", () => {
  render(<Footer />);
  const homeLink = screen.getByText("HOME");
  const aboutLink = screen.getByText("ABOUT");
  const blogstLink = screen.getByText("BLOGS");
  expect(screen.getByText("ABOUT")).toBeDefined();
  expect(screen.getByText("HOME")).toBeDefined();
  expect(screen.getByText("BLOGS")).toBeDefined();
  expect(homeLink).toHaveProperty("href", "http://localhost:3000/");
  expect(aboutLink).toHaveProperty("href", "http://localhost:3000/about");
  expect(blogstLink).toHaveProperty(
    "href",
    "http://localhost:3000/travel-blog"
  );
});
