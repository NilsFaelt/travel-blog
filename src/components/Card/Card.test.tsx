import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card.component";

test("Rendinering card", () => {
  render(<Card />);
  const link = screen.getByText("Mail: Nils.faelt@gmail.com");
  expect(link).toHaveProperty(
    "href",
    "mailto:Nils.faelt@gmail.com?subject=Subject%20Here&body=Message%20Body%20Here"
  );
});
