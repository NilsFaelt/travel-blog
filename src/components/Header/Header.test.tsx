import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from ".";

test("Header to render", () => {
  render(<Header />);
});
test("Logo to be in header", () => {
  const LogoComponent = screen.getByTestId("logo-comp");
  expect(LogoComponent).toBeTruthy();
});

// test("Links values to be correct", () => {
//   const links = screen.getby('')
// });
