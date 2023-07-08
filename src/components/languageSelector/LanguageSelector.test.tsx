/**
 * @jest-environment jsdom
 */
import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import LanguageSelector from "./LanguageSelector";

describe("LanguageSelector component test", () => {
  it("renders LanguageSelector component", async () => {
    render(<LanguageSelector />);

    // Assert that all buttons are rendered

    await screen.findByRole("button", { name: /typescript/i });
    expect(
      screen.getByRole("button", { name: /typescript/i })
    ).toBeInTheDocument();

    await screen.findByRole("button", { name: /javascript/i });
    expect(
      screen.getByRole("button", { name: /javascript/i })
    ).toBeInTheDocument();
  });

  it("handles language selection", async () => {
    render(<LanguageSelector />);

    await screen.findByRole("button", { name: /typescript/i });
    // Simulate button click to select a language
    fireEvent.click(screen.getByRole("button", { name: /typescript/i }));

    // Assert that the selected language is TypeScript
    expect(
      screen
        .getByRole("button", { name: /typescript/i })
        .hasAttribute("disabled")
    ).toBe(true);

    await screen.findByRole("button", { name: /javascript/i });
    // Simulate button click to select a different language
    fireEvent.click(screen.getByRole("button", { name: /javascript/i }));

    // Assert that the selected language is JavaScript and the previously selected language (TypeScript) is enabled
    expect(
      screen
        .getByRole("button", { name: /javascript/i })
        .hasAttribute("disabled")
    ).toBe(true);
    expect(
      screen
        .getByRole("button", { name: /typescript/i })
        .hasAttribute("disabled")
    ).toBe(false);
  });
});
