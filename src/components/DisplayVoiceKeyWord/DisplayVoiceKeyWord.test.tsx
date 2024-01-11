import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { DisplayVoiceKeyWord } from ".";

test("DisplayVoiceKeyWord comp to be defined", () => {
  render(<DisplayVoiceKeyWord text='test' />);
});
